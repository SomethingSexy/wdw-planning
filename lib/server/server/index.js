"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const cluster_1 = __importDefault(require("cluster"));
const os_1 = require("os");
require("reflect-metadata");
const app_module_1 = __importDefault(require("./app.module"));
const index_1 = __importDefault(require("./config/index"));
const http_exception_filters_1 = __importDefault(require("./filters/http-exception.filters"));
const logger_interceptor_1 = __importDefault(require("./interceptors/logger.interceptor"));
const log_1 = __importStar(require("./log"));
const numCPUs = os_1.cpus().length;
if (cluster_1.default.isMaster) {
    log_1.default.info(`This machine has ${numCPUs} CPUs.`);
    for (let i = 0; i < numCPUs; i += 1) {
        cluster_1.default.fork();
    }
    cluster_1.default.on('online', worker => {
        log_1.default.info(`Worker ${worker.process.pid} is online`);
    });
    cluster_1.default.on('exit', (worker, code, signal) => {
        log_1.default.warn(`Worker ${worker.process.pid} died with code: ${code} and signal: ${signal}`);
        log_1.default.info('Starting a new worker...');
        cluster_1.default.fork();
    });
}
else {
    async function bootstrap() {
        const app = await core_1.NestFactory.create(app_module_1.default, {
            logger: new log_1.NestLogger(log_1.default)
        });
        app.useGlobalFilters(new http_exception_filters_1.default());
        app.useGlobalInterceptors(new logger_interceptor_1.default());
        await app.listen(index_1.default.port);
        const envLabel = process.env.NODE_ENV || 'development';
        log_1.default.info(`Started server instance on port ${index_1.default.port} in ${envLabel} environment at ${new Date().toLocaleString()} (localtime).`); // tslint:disable-line
    }
    bootstrap();
}
