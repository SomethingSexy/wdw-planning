"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const semantic_ui_react_1 = require("semantic-ui-react");
exports.default = () => {
    return (react_1.default.createElement(semantic_ui_react_1.Item, null,
        react_1.default.createElement(semantic_ui_react_1.Item.Image, { size: "small", src: "/images/wireframe/image.png" }),
        react_1.default.createElement(semantic_ui_react_1.Item.Content, null,
            react_1.default.createElement(semantic_ui_react_1.Item.Header, { as: "a" },
                react_1.default.createElement(react_router_dom_1.Link, { to: "/park" }, "Magic Kingdom")),
            react_1.default.createElement(semantic_ui_react_1.Item.Description, null, "Stuff"),
            react_1.default.createElement(semantic_ui_react_1.Item.Extra, null,
                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCoffee })))));
};
