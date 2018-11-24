"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const mobx_react_1 = require("mobx-react");
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const semantic_ui_react_1 = require("semantic-ui-react");
const DaySideBarEmpty_1 = __importDefault(require("./DaySideBarEmpty"));
const DaySideBarHours_1 = __importDefault(require("./DaySideBarHours"));
const DaySideBarWeather_1 = __importDefault(require("./DaySideBarWeather"));
const withFetch_1 = __importDefault(require("./withFetch"));
const dateStyle = {
    marginBottom: '1em',
    marginTop: '1em'
};
const renderToday = (today) => {
    const { parkHours } = today;
    if (!parkHours) {
        return react_1.default.createElement(DaySideBarEmpty_1.default, null);
    }
    return (react_1.default.createElement(semantic_ui_react_1.Grid.Row, null,
        react_1.default.createElement(semantic_ui_react_1.Grid.Column, { align: "center" },
            react_1.default.createElement(DaySideBarHours_1.default, { parks: parkHours })),
        react_1.default.createElement(semantic_ui_react_1.Grid.Column, { align: "center" },
            react_1.default.createElement(DaySideBarWeather_1.default, null))));
};
// TODO: Add colors for special event days and extended magic hours
const DaySideBar = withFetch_1.default(mobx_react_1.observer((props) => {
    const { app, days } = props;
    const today = days.today;
    if (!today) {
        return null;
    }
    const previous = days.previous.bind(days);
    const next = days.next.bind(days);
    const visible = props.app && props.app.showDay;
    return (react_1.default.createElement(semantic_ui_react_1.Sidebar, { as: semantic_ui_react_1.Segment, animation: "overlay", className: "day-sidebar", direction: "top", visible: visible },
        react_1.default.createElement(semantic_ui_react_1.Grid, { columns: 3, style: dateStyle },
            react_1.default.createElement(semantic_ui_react_1.Grid.Row, null,
                react_1.default.createElement(semantic_ui_react_1.Grid.Column, { align: "right" },
                    react_1.default.createElement(semantic_ui_react_1.Button, { onClick: previous },
                        react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faArrowLeft }))),
                react_1.default.createElement(semantic_ui_react_1.Grid.Column, { align: "center" },
                    react_1.default.createElement(semantic_ui_react_1.Header, { as: "h3" },
                        react_1.default.createElement(react_router_dom_1.Link, { to: `/days/${today.date}` }, today.label))),
                react_1.default.createElement(semantic_ui_react_1.Grid.Column, { align: "left" },
                    react_1.default.createElement(semantic_ui_react_1.Button, { onClick: next },
                        react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faArrowRight }))))),
        react_1.default.createElement(semantic_ui_react_1.Grid, { columns: 2, divided: true }, renderToday(today))));
}), {
    fetch: 'days',
    models: ['app', 'days']
});
exports.default = DaySideBar;
