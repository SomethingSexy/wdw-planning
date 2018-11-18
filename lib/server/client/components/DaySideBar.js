"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_react_1 = require("mobx-react");
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
// TODO: Add colors for special event days and extended magic hours
const DaySideBar = mobx_react_1.observer((props) => (react_1.default.createElement(semantic_ui_react_1.Sidebar, { as: semantic_ui_react_1.Segment, animation: "overlay", direction: "top", style: { marginTop: '3em !important' }, visible: props.app && props.app.showDay },
    react_1.default.createElement(semantic_ui_react_1.Grid.Row, { align: "center", columns: 1 },
        react_1.default.createElement(semantic_ui_react_1.Grid.Column, null,
            react_1.default.createElement(semantic_ui_react_1.Header, { as: "h3" }, "Thursday, March 2nd 2019"))),
    react_1.default.createElement(semantic_ui_react_1.Grid, { columns: 2, divided: true },
        react_1.default.createElement(semantic_ui_react_1.Grid.Row, null,
            react_1.default.createElement(semantic_ui_react_1.Grid.Column, { align: "center" },
                react_1.default.createElement(semantic_ui_react_1.Header, { as: "h4" }, "Hours"),
                react_1.default.createElement(semantic_ui_react_1.Table, { basic: "very", celled: true, collapsing: true },
                    react_1.default.createElement(semantic_ui_react_1.Table.Header, null,
                        react_1.default.createElement(semantic_ui_react_1.Table.Row, null,
                            react_1.default.createElement(semantic_ui_react_1.Table.HeaderCell, null, "Park"),
                            react_1.default.createElement(semantic_ui_react_1.Table.HeaderCell, null, "Hours"))),
                    react_1.default.createElement(semantic_ui_react_1.Table.Body, null,
                        react_1.default.createElement(semantic_ui_react_1.Table.Row, null,
                            react_1.default.createElement(semantic_ui_react_1.Table.Cell, null, "Magic Kingdom"),
                            react_1.default.createElement(semantic_ui_react_1.Table.Cell, null, "10:00 AM to 12:00 AM"))))),
            react_1.default.createElement(semantic_ui_react_1.Grid.Column, { align: "center" },
                react_1.default.createElement(semantic_ui_react_1.Header, { as: "h4" }, "Weather"),
                "Morning / Afternoon / Night"))))));
exports.default = mobx_react_1.inject('app')(DaySideBar);
