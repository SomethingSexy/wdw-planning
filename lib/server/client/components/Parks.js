"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_react_1 = require("mobx-react");
const react_1 = __importDefault(require("react"));
const Locations_1 = __importDefault(require("./Locations"));
const ParkItem_1 = __importDefault(require("./ParkItem"));
const withFetch_1 = __importDefault(require("./withFetch"));
exports.default = withFetch_1.default(mobx_react_1.observer(({ parks }) => {
    return (react_1.default.createElement(Locations_1.default, { items: parks.all }, park => react_1.default.createElement(ParkItem_1.default, { park: park })));
}), 'parks');
