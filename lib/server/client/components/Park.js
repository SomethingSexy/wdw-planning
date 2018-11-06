"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_react_1 = require("mobx-react");
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const ParkActivities_1 = __importDefault(require("./ParkActivities"));
const ParkAreas_1 = __importDefault(require("./ParkAreas"));
const withFetch_1 = __importDefault(require("./withFetch"));
const panes = park => [
    {
        menuItem: (react_1.default.createElement(semantic_ui_react_1.Menu.Item, { key: "attractions" },
            "Attractions",
            react_1.default.createElement(semantic_ui_react_1.Label, { color: "yellow" }, park.activitiesCount))),
        render: () => (react_1.default.createElement(semantic_ui_react_1.Tab.Pane, { attached: false, className: "no-border" },
            react_1.default.createElement(ParkActivities_1.default, { parkId: park.id })))
    },
    {
        menuItem: (react_1.default.createElement(semantic_ui_react_1.Menu.Item, { key: "dining" },
            "Dining",
            react_1.default.createElement(semantic_ui_react_1.Label, { color: "blue" }, park.diningCount))),
        render: () => react_1.default.createElement(semantic_ui_react_1.Tab.Pane, { attached: false, className: "no-border" }, "Tab 2 Content")
    }
];
// TODO: We probably need to load withFetch to make sure we have all of the parks first
const Park = withFetch_1.default(mobx_react_1.observer(({ match, parks }) => {
    // TODO: figure out how we want to handle loading state
    if (!parks.loaded) {
        return null;
    }
    const { id } = match.params;
    const data = parks.findById(id);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(semantic_ui_react_1.Header, { as: "h1" }, data.name),
        react_1.default.createElement(semantic_ui_react_1.Segment, { basic: true, clearing: true },
            react_1.default.createElement("div", null, "TODO: Other information"),
            react_1.default.createElement("div", { style: { float: 'right' } },
                react_1.default.createElement(ParkAreas_1.default, { park: data }))),
        react_1.default.createElement(semantic_ui_react_1.Segment, { basic: true },
            react_1.default.createElement(semantic_ui_react_1.Tab, { menu: { secondary: true, pointing: true }, panes: panes(data) }))));
}), 'parks', {
    isLoading: ({ parks }) => {
        if (parks.loaded) {
            return false;
        }
        return true;
    },
});
exports.default = Park;
