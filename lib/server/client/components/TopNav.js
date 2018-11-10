"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const semantic_ui_react_1 = require("semantic-ui-react");
const TopNav = () => {
    return (react_1.default.createElement(semantic_ui_react_1.Menu, { color: "violet", fixed: "top", inverted: true },
        react_1.default.createElement(semantic_ui_react_1.Container, null,
            react_1.default.createElement(semantic_ui_react_1.Menu.Item, null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "WDW Planner")))));
};
exports.default = TopNav;
