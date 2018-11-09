"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_react_1 = require("mobx-react");
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const ParkActivity_1 = __importDefault(require("./ParkActivity"));
const withFetch_1 = __importDefault(require("./withFetch"));
// TODO: We probably need to load withFetch to make sure we have all of the parks first
const ParkActivities = withFetch_1.default(mobx_react_1.observer((props) => {
    const { park } = props;
    if (!park) {
        return null;
    }
    const data = park.toJson;
    if (!data.activities) {
        return null;
    }
    return (react_1.default.createElement(semantic_ui_react_1.Card.Group, null, data.activities.map(activity => react_1.default.createElement(ParkActivity_1.default, Object.assign({ key: activity.id }, activity)))));
}), {
    // isLoading: ({ parkId, parks }) => {
    //   // TODO: figure out how we want to handle loading state
    //   if (!parks.loaded) {
    //     return false;
    //   }
    //   const park = parks.findById(parkId);
    //   if (!park.activities) {
    //     return false;
    //   }
    //   return true;
    // },
    find: 'findById',
    id: 'parkId',
    method: 'fetchParkActivities',
    model: 'parks',
    propName: 'park'
    // params: ['parkId']
});
exports.default = ParkActivities;
