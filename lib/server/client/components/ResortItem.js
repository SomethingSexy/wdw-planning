"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const LocationItem_1 = __importDefault(require("./LocationItem"));
const ResortItem = ({ resort }) => {
    const item = resort.toJson;
    const meta = (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(semantic_ui_react_1.Label, { className: "right", color: "yellow" },
            item.activitiesCount,
            react_1.default.createElement(semantic_ui_react_1.Label.Detail, null,
                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faStar }))),
        react_1.default.createElement(semantic_ui_react_1.Label, { className: "right", color: "blue" },
            item.diningCount,
            react_1.default.createElement(semantic_ui_react_1.Label.Detail, null,
                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faUtensils })))));
    return (react_1.default.createElement(LocationItem_1.default, { description: item.description, key: item.id, icon: free_brands_svg_icons_1.faFortAwesome, id: item.id, image: `public/${item.image}.jpg`, meta: meta, name: item.name, tags: item.areas, type: "Resort" }));
};
exports.default = ResortItem;
