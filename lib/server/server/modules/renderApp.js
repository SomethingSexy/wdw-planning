"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_react_1 = require("mobx-react");
const react_1 = __importDefault(require("react"));
// tslint:disable-next-line:no-submodule-imports
const server_1 = __importDefault(require("react-dom/server"));
const react_router_dom_1 = require("react-router-dom");
const Application_1 = __importDefault(require("../../client/Application"));
const index_1 = __importDefault(require("../../client/stores/index"));
const store = index_1.default();
exports.default = (url) => {
    const context = {};
    const app = server_1.default.renderToString(react_1.default.createElement(mobx_react_1.Provider, Object.assign({}, store),
        react_1.default.createElement(react_router_dom_1.StaticRouter, { location: url, context: context },
            react_1.default.createElement(Application_1.default, null))));
    return app;
};
