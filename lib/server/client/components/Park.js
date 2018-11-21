"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_react_1 = require("mobx-react");
const react_1 = __importDefault(require("react"));
const react_router_config_1 = require("react-router-config");
const semantic_ui_react_1 = require("semantic-ui-react");
const ParkAreas_1 = __importDefault(require("./ParkAreas"));
const ParkNav_1 = __importDefault(require("./ParkNav"));
const withFetch_1 = __importDefault(require("./withFetch"));
const Park = withFetch_1.default(mobx_react_1.observer((props) => {
    const { match, parks, route } = props;
    // TODO: figure out how we want to handle loading state
    if (!parks.loaded) {
        return null;
    }
    const { id } = match.params;
    const park = parks.findById(id);
    if (!park) {
        return null;
    }
    const data = park.toJson;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(semantic_ui_react_1.Header, { as: "h1" }, data.name),
        react_1.default.createElement(semantic_ui_react_1.Segment, { basic: true, clearing: true },
            react_1.default.createElement("div", null, "TODO: Other information"),
            react_1.default.createElement(ParkAreas_1.default, { park: data })),
        react_1.default.createElement(semantic_ui_react_1.Segment, { basic: true },
            react_1.default.createElement(ParkNav_1.default, { activitiesCount: data.activitiesCount, diningCount: data.diningCount, id: data.id }),
            react_router_config_1.renderRoutes(route.routes))));
}), {
    fetch: 'parks',
    isLoading: ({ parks }) => {
        if (parks.loaded) {
            return false;
        }
        return true;
    },
    models: 'parks',
});
exports.default = Park;
