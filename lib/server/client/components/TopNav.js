"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const mobx_react_1 = require("mobx-react");
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const semantic_ui_react_1 = require("semantic-ui-react");
const toggleDaySideBar = (app) => {
    app.setShowDay(!app.showDay);
};
const TopNav = props => {
    const toggle = toggleDaySideBar.bind(undefined, props.app);
    return (react_1.default.createElement(semantic_ui_react_1.Menu, { color: "violet", fixed: "top", inverted: true },
        react_1.default.createElement(semantic_ui_react_1.Container, null,
            react_1.default.createElement(semantic_ui_react_1.Menu.Item, null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "WDW Planner")),
            react_1.default.createElement(semantic_ui_react_1.Menu.Menu, { position: "right" },
                react_1.default.createElement(semantic_ui_react_1.Menu.Item, null,
                    react_1.default.createElement(semantic_ui_react_1.Button, { as: "a", onClick: toggle },
                        "3/2/2019 ",
                        react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCloudSun })))))));
};
exports.default = mobx_react_1.inject('app')(TopNav);
