"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_react_1 = require("mobx-react");
const react_1 = __importDefault(require("react"));
const Locations_1 = __importDefault(require("./Locations"));
const ResortItem_1 = __importDefault(require("./ResortItem"));
const withFetch_1 = __importDefault(require("./withFetch"));
const Resorts = withFetch_1.default(mobx_react_1.observer((props) => {
    const { resorts } = props;
    const items = resorts.all;
    return (react_1.default.createElement(Locations_1.default, { items: items }, resort => react_1.default.createElement(ResortItem_1.default, { resort: resort })));
}), { fetch: 'resorts', models: 'resorts' });
exports.default = Resorts;
