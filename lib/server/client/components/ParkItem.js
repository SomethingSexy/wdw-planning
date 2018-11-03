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
const ParkItem = ({ park }) => {
    const meta = (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(semantic_ui_react_1.Label, { className: "right", color: "yellow" },
            park.activitiesCount,
            react_1.default.createElement(semantic_ui_react_1.Label.Detail, null,
                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faStar }))),
        react_1.default.createElement(semantic_ui_react_1.Label, { className: "right", color: "blue" },
            park.diningCount,
            react_1.default.createElement(semantic_ui_react_1.Label.Detail, null,
                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faUtensils })))));
    return (react_1.default.createElement(LocationItem_1.default, { description: park.description, key: park.id, icon: free_brands_svg_icons_1.faFortAwesome, id: park.id, image: `public/${park.image}.jpg`, meta: meta, name: park.name, tags: park.areas, type: "Theme Park" }));
};
exports.default = ParkItem;
