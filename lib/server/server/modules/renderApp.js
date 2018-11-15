"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_react_1 = require("mobx-react");
const react_1 = __importDefault(require("react"));
// tslint:disable-next-line:no-submodule-imports
const server_1 = __importDefault(require("react-dom/server"));
const react_router_dom_1 = require("react-router-dom");
const Application_1 = __importStar(require("../../client/Application"));
const index_1 = __importDefault(require("../../client/stores/index"));
const store = index_1.default();
const getRouteData = async (routesArray, url) => {
    const needs = [];
    // TODO: need to recursively check routes
    routesArray
        .filter(route => route.component.needs)
        .forEach(route => {
        const match = react_router_dom_1.matchPath(url, route.path); // { exact: true, strict: false };
        // TODO: if match and isExact
        if (match) {
            console.log(match);
            route.component.needs.forEach(need => {
                const result = need(match.params);
                needs.push(result);
            });
        }
    });
    return Promise.all(needs);
};
exports.default = async (url) => {
    const context = {};
    const test = await getRouteData(Application_1.routes, url);
    console.log('final', test);
    const app = server_1.default.renderToString(react_1.default.createElement(mobx_react_1.Provider, Object.assign({}, store),
        react_1.default.createElement(react_router_dom_1.StaticRouter, { location: url, context: context },
            react_1.default.createElement(Application_1.default, null))));
    return app;
};
