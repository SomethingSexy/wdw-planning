"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_react_1 = require("mobx-react");
const react_1 = __importDefault(require("react"));
const LocationActivities_1 = __importDefault(require("./LocationActivities"));
const withFetch_1 = __importDefault(require("./withFetch"));
const ResortActivities = withFetch_1.default(mobx_react_1.observer((props) => {
    const { id, store } = props;
    if (!store) {
        return null;
    }
    const data = store.toJson;
    if (!data.activities) {
        return null;
    }
    return (react_1.default.createElement(LocationActivities_1.default, { activities: data.activities }));
}), {
    fetch: 'resorts',
    find: 'findById',
    id: 'param:id',
    method: 'fetchActivities',
    models: 'resorts',
    propName: 'store'
});
exports.default = ResortActivities;
