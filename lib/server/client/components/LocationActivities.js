"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const LocationActivity_1 = __importDefault(require("./LocationActivity"));
const LocationActivities = (props) => {
    const { activities } = props;
    return (react_1.default.createElement(semantic_ui_react_1.Card.Group, null, activities.map(activity => react_1.default.createElement(LocationActivity_1.default, Object.assign({ key: activity.id }, activity)))));
};
exports.default = LocationActivities;
