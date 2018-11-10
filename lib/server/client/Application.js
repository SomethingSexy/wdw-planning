"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const semantic_ui_react_1 = require("semantic-ui-react");
const MainNav_1 = __importDefault(require("./components/MainNav"));
const Park_1 = __importDefault(require("./components/Park"));
const Parks_1 = __importDefault(require("./components/Parks"));
const Resorts_1 = __importDefault(require("./components/Resorts"));
const TopNav_1 = __importDefault(require("./components/TopNav"));
// import Root from './Root';
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
    }, {
        component: Resorts_1.default,
        exact: true,
        path: '/resorts',
    }];
exports.default = () => {
    /* tslint:disable-next-line:jsx-no-multiline-js */
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(TopNav_1.default, null),
        react_1.default.createElement(semantic_ui_react_1.Container, { style: { marginTop: '7em' } },
            react_1.default.createElement(MainNav_1.default, null),
            react_1.default.createElement(react_router_dom_1.Switch, null,
                react_1.default.createElement(react_router_dom_1.Redirect, { exact: true, from: "/", to: "/parks" }),
                routes.map(route => (react_1.default.createElement(react_router_dom_1.Route, Object.assign({ key: route.path }, route))))))));
};
{ /* <AnimatedSwitch
atEnter={{ opacity: 0 }}
atLeave={{ opacity: 0 }}
atActive={{ opacity: 1 }}
className="switch-wrapper"
>
{routes.map(route => (<Route key={route.path} {...route} />))}
</AnimatedSwitch> */
}
