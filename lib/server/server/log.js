"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = __importDefault(require("os"));
const winston_1 = require("winston");
const index_1 = __importDefault(require("./config/index"));
const { combine, timestamp, label, json, printf } = winston_1.format;
const stringFormat = printf(info => {
    return `${info.timestamp} - ${os_1.default.hostname()} [${info.label}] ${info.level}: ${info.message}`;
});
let logFormat;
if (index_1.default.log.format === 'json') {
    logFormat = combine(label({ label: index_1.default.name }), timestamp(), json());
}
else {
    logFormat = combine(label({ label: index_1.default.name }), timestamp(), winston_1.format.align(), stringFormat);
}
const logTransports = [];
if (index_1.default.log.file) {
    logTransports.push(new winston_1.transports.File({ filename: index_1.default.log.file }));
}
if (index_1.default.log.errorFile) {
    logTransports.push(new winston_1.transports.File({ filename: index_1.default.log.errorFile, level: 'error' }));
}
if (index_1.default.log.console) {
    logTransports.push(new winston_1.transports.Console({
        format: combine(label({ label: index_1.default.name }), timestamp(), winston_1.format.align(), winston_1.format.colorize(), stringFormat)
    }));
}
const logger = winston_1.createLogger({
    format: logFormat,
    level: index_1.default.log.level,
    transports: logTransports,
});
class NestLogger {
    constructor(internalLogger) {
        this.logger = internalLogger;
    }
    log(message) {
        this.logger.info(message);
    }
    error(message, _) {
        this.logger.error(message);
    }
    warn(message) {
        this.logger.warn(message);
    }
}
exports.NestLogger = NestLogger;
exports.default = logger;
