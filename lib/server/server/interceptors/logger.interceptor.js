"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
// tslint:disable-next-line:no-submodule-imports
const operators_1 = require("rxjs/operators");
const log_1 = __importDefault(require("../log"));
let LoggingInterceptor = class LoggingInterceptor {
    intercept(context, call$) {
        const start = Date.now();
        return call$.pipe(operators_1.tap(() => {
            const request = context.switchToHttp().getRequest();
            const ms = Date.now() - start;
            log_1.default.info(`${request.method} ${request.url} success - ${ms}ms`);
        }));
    }
};
LoggingInterceptor = __decorate([
    common_1.Injectable()
], LoggingInterceptor);
exports.default = LoggingInterceptor;
