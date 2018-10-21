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
const log_1 = __importDefault(require("../log"));
const buildError = (message, status, timeStamp, meta) => {
    const error = {
        message: message || 'Uh oh! Something evil happend.',
        status,
        timeStamp
    };
    if (meta) {
        error.meta = meta;
    }
    return error;
};
let HttpExceptionFilter = class HttpExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus();
        log_1.default.error(
        // tslint:disable-next-line:max-line-length
        `${request.method} ${request.url} ${status} -  ${exception.message.error}: ${exception.message.message} ${exception.stack}`);
        response
            .status(status)
            .json({
            errors: [
                buildError(exception.message.message.toString(), status || 500, new Date().toISOString())
            ]
        });
    }
};
HttpExceptionFilter = __decorate([
    common_1.Catch(common_1.HttpException)
], HttpExceptionFilter);
exports.default = HttpExceptionFilter;
