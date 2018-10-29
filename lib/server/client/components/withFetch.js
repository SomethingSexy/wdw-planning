"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_react_class_1 = __importDefault(require("create-react-class"));
const mobx_react_1 = require("mobx-react");
const react_1 = __importDefault(require("react"));
exports.default = (WrappedComponent, model) => {
    return mobx_react_1.inject(model)(mobx_react_1.observer(
    // TODO: Replace with stateless component and hooks when they are release in react
    create_react_class_1.default({
        componentDidMount() {
            this.props[model].fetch();
        },
        render() {
            return react_1.default.createElement(WrappedComponent, Object.assign({}, this.props));
        }
    })));
};
