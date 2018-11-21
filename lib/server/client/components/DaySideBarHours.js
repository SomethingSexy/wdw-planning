"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
{ /* <Table.Row>
<Table.Cell>Magic Kingdom</Table.Cell>
<Table.Cell>10:00 AM to 12:00 AM</Table.Cell>
<Table.Cell />
</Table.Row>
<Table.Row warning>
<Table.Cell>Hollywood Studios</Table.Cell>
<Table.Cell>10:00 AM to 12:00 AM</Table.Cell>
<Table.Cell textAlign="center">
  <FontAwesomeIcon icon={faCheck} />
</Table.Cell>
</Table.Row> */
}
const renderPark = park => {
    return (react_1.default.createElement(semantic_ui_react_1.Table.Row, null,
        react_1.default.createElement(semantic_ui_react_1.Table.Cell, null, park.name),
        react_1.default.createElement(semantic_ui_react_1.Table.Cell, null, `${park.open} to ${park.close}`),
        react_1.default.createElement(semantic_ui_react_1.Table.Cell, null)));
};
const DaySideBarHours = (props) => (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(semantic_ui_react_1.Header, { as: "h4" }, "Hours"),
    react_1.default.createElement(semantic_ui_react_1.Table, { celled: true, collapsing: true },
        react_1.default.createElement(semantic_ui_react_1.Table.Header, null,
            react_1.default.createElement(semantic_ui_react_1.Table.Row, null,
                react_1.default.createElement(semantic_ui_react_1.Table.HeaderCell, null, "Park"),
                react_1.default.createElement(semantic_ui_react_1.Table.HeaderCell, null, "Hours"),
                react_1.default.createElement(semantic_ui_react_1.Table.HeaderCell, { textAlign: "center" }, "EMH"))),
        react_1.default.createElement(semantic_ui_react_1.Table.Body, null, props.parks.map(park => renderPark(park))))));
exports.default = DaySideBarHours;
