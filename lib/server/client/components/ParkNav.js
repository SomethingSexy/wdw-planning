"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { faFortAwesome } from '@fortawesome/free-brands-svg-icons';
// import { faHotel, faStar } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const semantic_ui_react_1 = require("semantic-ui-react");
const icon = { marginLeft: '5px' };
const ParkNav = ({ activitiesCount, diningCount, id, location }) => {
    const { pathname } = location;
    return (react_1.default.createElement(semantic_ui_react_1.Menu, { pointing: true, secondary: true },
        react_1.default.createElement(semantic_ui_react_1.Menu.Item, { active: pathname.startsWith(`/parks/${id}/activities`) },
            react_1.default.createElement(react_router_dom_1.Link, { to: `/parks/${id}/activities` },
                "Attractions",
                react_1.default.createElement(semantic_ui_react_1.Label, { color: "yellow", style: icon }, activitiesCount))),
        react_1.default.createElement(semantic_ui_react_1.Menu.Item, { active: pathname.startsWith(`/parks/${id}/dining`) },
            react_1.default.createElement(react_router_dom_1.Link, { to: `/parks/${id}/dining` },
                "Dining",
                react_1.default.createElement(semantic_ui_react_1.Label, { color: "blue", style: icon }, diningCount)))));
};
exports.default = react_router_dom_1.withRouter(ParkNav);
