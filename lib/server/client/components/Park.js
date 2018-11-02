"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_react_1 = require("mobx-react");
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
// TODO: We probably need to load withFetch to make sure we have all of the parks first
const Park = mobx_react_1.inject('parks')(mobx_react_1.observer(({ match, parks }) => {
    const { id } = match.params;
    const data = parks.findById(id);
    return (react_1.default.createElement(semantic_ui_react_1.Header, { as: "h1" }, data.name));
}));
exports.default = Park;
