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
const ResortNav_1 = __importDefault(require("./ResortNav"));
const withFetch_1 = __importDefault(require("./withFetch"));
// const panes = park => [
//   {
//     menuItem: (
//       <Menu.Item key="attractions">
//         Attractions<Label color="yellow">{park.activitiesCount}</Label>
//       </Menu.Item>
//     ),
//     render: () => (
//       <Tab.Pane attached={false} className="no-border">
//         <ResortActivities id={park.id} />
//       </Tab.Pane>
//     )
//   },
//   {
//     menuItem: (
//       <Menu.Item key="dining">
//         Dining<Label color="blue">{park.diningCount}</Label>
//       </Menu.Item>
//     ),
//     render: () => <Tab.Pane attached={false} className="no-border">Tab 2 Content</Tab.Pane>
//   }
// ];
const Resort = withFetch_1.default(mobx_react_1.observer((props) => {
    const { match, resorts, route } = props;
    // TODO: figure out how we want to handle loading state
    if (!resorts.loaded) {
        return null;
    }
    const { id } = match.params;
    const park = resorts.findById(id);
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
            react_1.default.createElement(ResortNav_1.default, { activitiesCount: data.activitiesCount, diningCount: data.diningCount, id: data.id }),
            react_router_config_1.renderRoutes(route.routes))));
}), {
    inject: true,
    isLoading: ({ resorts }) => {
        if (resorts.loaded) {
            return false;
        }
        return true;
    },
    model: 'resorts',
});
exports.default = Resort;
