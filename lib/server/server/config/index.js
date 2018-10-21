"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const log_1 = __importDefault(require("./log"));
const PORT = process.env.PORT || '6001';
const NAME = process.env.NAME || 'WDW Services';
const commonSchema = joi_1.default.object({
    name: joi_1.default.string(),
    port: joi_1.default.string().min(4).max(4)
});
const { error, value: envVars } = joi_1.default.validate({ name: NAME, port: PORT }, commonSchema);
if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}
const config = Object.assign({}, envVars, { log: log_1.default });
exports.default = config;
