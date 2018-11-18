"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
const Parks_1 = __importDefault(require("./Parks"));
const Resorts_1 = __importDefault(require("./Resorts"));
exports.default = () => {
    const app = new App_1.default();
    const parks = new Parks_1.default();
    const resorts = new Resorts_1.default();
    return {
        app,
        parks,
        resorts
    };
};
