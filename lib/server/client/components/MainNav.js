"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const semantic_ui_react_1 = require("semantic-ui-react");
const leftMenu = { marginLeft: 'auto' };
const rightMenu = { marginRight: 'auto' };
const icon = { marginRight: '5px' };
const TopNav = ({ location }) => {
    const { pathname } = location;
    return (react_1.default.createElement(semantic_ui_react_1.Menu, { pointing: true, secondary: true },
        react_1.default.createElement(semantic_ui_react_1.Menu.Item, { active: pathname.startsWith('/parks') || pathname === '/', style: leftMenu },
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faFortAwesome, style: icon }),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/parks" }, "Parks")),
        react_1.default.createElement(semantic_ui_react_1.Menu.Item, { active: pathname.startsWith('/resorts') },
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faHotel, style: icon }),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/resorts" }, "Resorts")),
        react_1.default.createElement(semantic_ui_react_1.Menu.Item, { active: pathname.startsWith('/attractions'), style: rightMenu },
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faStar, style: icon }),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/attractions" }, "Attractions"))));
};
exports.default = react_router_dom_1.withRouter(TopNav);
