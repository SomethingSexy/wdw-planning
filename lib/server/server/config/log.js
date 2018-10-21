"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const LOG_FILE = process.env.LOG_FILE;
const LOG_FILE_ERROR = process.env.LOG_FILE_ERROR;
let LOG_CONSOLE = process.env.LOG_CONSOLE;
const LOG_LEVEL = process.env.LOG_LEVEL || 'info';
const LOG_FORMAT = process.env.LOG_FORMAT || 'string';
LOG_CONSOLE = process.env.NODE_ENV !== 'production' && LOG_CONSOLE !== 'false'
    ? true
    : (LOG_CONSOLE || false);
const logSchema = joi_1.default.object({
    console: joi_1.default.boolean(),
    errorFile: joi_1.default.string(),
    file: joi_1.default.string(),
    format: joi_1.default.string(),
    level: joi_1.default.string().valid(['error', 'warn', 'info', 'verbose', 'debug', 'silly'])
});
const { error, value: envVars } = joi_1.default.validate({
    console: LOG_CONSOLE,
    errorFile: LOG_FILE_ERROR,
    file: LOG_FILE,
    format: LOG_FORMAT,
    level: LOG_LEVEL
}, logSchema);
if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}
if (!envVars.file && !envVars.errorFile && !envVars.console) {
    throw new Error('At least one logger needs to be configured.');
}
exports.default = Object.assign({}, envVars);
