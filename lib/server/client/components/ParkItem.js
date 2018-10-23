"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
const react_1 = __importDefault(require("react"));
const LocationItem_1 = __importDefault(require("./LocationItem"));
exports.default = ({ park }) => {
    return (react_1.default.createElement(LocationItem_1.default, { description: park.description, key: park.id, icon: free_brands_svg_icons_1.faFortAwesome, id: park.id, image: park.image, name: park.name, type: "Theme Park" }));
};
