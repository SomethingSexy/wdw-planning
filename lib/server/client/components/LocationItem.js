"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const semantic_ui_react_1 = require("semantic-ui-react");
const LocationItem = ({ description, icon, id, image, meta, name, tags = [], type }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(semantic_ui_react_1.Item.Image, { size: "small", src: image }),
        react_1.default.createElement(semantic_ui_react_1.Item.Content, null,
            react_1.default.createElement(semantic_ui_react_1.Item.Header, null,
                react_1.default.createElement(react_router_dom_1.Link, { to: `/parks/${id}` }, name)),
            react_1.default.createElement(semantic_ui_react_1.Item.Meta, null,
                react_1.default.createElement("span", null,
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: icon })),
                react_1.default.createElement("span", null, type),
                meta),
            react_1.default.createElement(semantic_ui_react_1.Item.Description, null, description),
            react_1.default.createElement(semantic_ui_react_1.Item.Extra, null, tags.map((tag, index) => react_1.default.createElement(semantic_ui_react_1.Label, { key: index }, tag))))));
};
exports.default = LocationItem;
