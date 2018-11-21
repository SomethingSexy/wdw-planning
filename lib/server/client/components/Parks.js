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
const Parks = withFetch_1.default(mobx_react_1.observer((props) => {
    const { parks } = props;
    const items = parks.all;
    return (react_1.default.createElement(Locations_1.default, { items: items }, park => react_1.default.createElement(ParkItem_1.default, { park: park })));
}), { fetch: 'parks', models: 'parks' });
exports.default = Parks;
