"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const semantic_ui_react_1 = require("semantic-ui-react");
const Parks_1 = __importDefault(require("./components/Parks"));
const TopNav_1 = __importDefault(require("./components/TopNav"));
exports.default = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(TopNav_1.default, null),
        react_1.default.createElement(semantic_ui_react_1.Container, { text: true, style: { marginTop: '7em' } },
            react_1.default.createElement(react_router_dom_1.Switch, null,
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Parks_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/parks", component: Parks_1.default })))));
};
