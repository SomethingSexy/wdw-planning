"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_react_1 = require("mobx-react");
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const react_router_dom_1 = require("react-router-dom");
const Application_1 = __importDefault(require("./Application"));
const index_1 = __importDefault(require("./stores/index"));
// import './theme.css';
const store = index_1.default();
// After rendering server is setup we can fully enable react-router.
react_dom_1.default.hydrate(react_1.default.createElement(mobx_react_1.Provider, Object.assign({}, store),
    react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(Application_1.default, null))), document.getElementById('app'));
