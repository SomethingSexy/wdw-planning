"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
// tslint:disable-next-line:no-submodule-imports
const AnimatedSwitch_1 = __importDefault(require("react-router-transition/lib/AnimatedSwitch"));
const semantic_ui_react_1 = require("semantic-ui-react");
const Park_1 = __importDefault(require("./components/Park"));
const Parks_1 = __importDefault(require("./components/Parks"));
const TopNav_1 = __importDefault(require("./components/TopNav"));
require("./theme.css");
const routes = [{
        component: Parks_1.default,
        exact: true,
        path: '/',
    }, {
        component: Parks_1.default,
        exact: true,
        path: '/parks',
    }, {
        component: Park_1.default,
        exact: true,
        path: '/parks/:id'
    }];
exports.default = () => {
    /* tslint:disable-next-line:jsx-no-multiline-js */
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(TopNav_1.default, null),
        react_1.default.createElement(semantic_ui_react_1.Container, { text: true, style: { marginTop: '7em' } },
            react_1.default.createElement(AnimatedSwitch_1.default, { atEnter: { opacity: 0 }, atLeave: { opacity: 0 }, atActive: { opacity: 1 }, className: "switch-wrapper" }, routes.map(route => (react_1.default.createElement(react_router_dom_1.Route, Object.assign({ key: route.path }, route))))))));
};
