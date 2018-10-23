"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
exports.default = ({ children, items = [] }) => {
    return (react_1.default.createElement(semantic_ui_react_1.Item.Group, { divided: true }, items.map(item => react_1.default.createElement(semantic_ui_react_1.Item, { key: item.id }, children(item)))));
};
