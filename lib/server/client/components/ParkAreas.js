"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const renderArea = (park, area, id) => {
    return (react_1.default.createElement(semantic_ui_react_1.List.Item, { key: id },
        react_1.default.createElement(semantic_ui_react_1.List.Content, null,
            react_1.default.createElement(semantic_ui_react_1.List.Header, { as: "a", href: `/parks/${park.id}/areas/${area.id}` }, area))));
};
// TODO: We probably need to load withFetch to make sure we have all of the parks first
const ParkAreas = ({ park }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(semantic_ui_react_1.Header, { as: "h3" }, "Park Areas"),
        react_1.default.createElement(semantic_ui_react_1.List, { animated: true, divided: true, horizontal: true, relaxed: true, selection: true, tiny: true, verticalAlign: "middle" }, park.areas.map((area, index) => renderArea(park, area, index)))));
};
exports.default = ParkAreas;
