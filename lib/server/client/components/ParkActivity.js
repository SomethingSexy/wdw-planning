"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const ParkActivity = ({ description, icon, id, image, meta, name, tags = [], type }) => {
    return (react_1.default.createElement(semantic_ui_react_1.Card, null,
        react_1.default.createElement(semantic_ui_react_1.Card.Content, null,
            react_1.default.createElement(semantic_ui_react_1.Card.Header, null, name),
            react_1.default.createElement(semantic_ui_react_1.Card.Meta, null, "Co-Worker"),
            react_1.default.createElement(semantic_ui_react_1.Card.Description, null, description))));
};
exports.default = ParkActivity;
