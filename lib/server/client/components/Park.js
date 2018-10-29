"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const Park = () => {
    return (react_1.default.createElement(semantic_ui_react_1.Header, { as: "h1" }, "Magic Kingdom"));
};
exports.default = Park;
