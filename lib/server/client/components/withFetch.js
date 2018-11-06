"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_react_class_1 = __importDefault(require("create-react-class"));
const mobx_react_1 = require("mobx-react");
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
exports.default = (WrappedComponent, model, options = {}) => {
    return mobx_react_1.inject(model)(mobx_react_1.observer(
    // TODO: Replace with stateless component and hooks when they are release in react
    create_react_class_1.default({
        componentDidMount() {
            const { method, params } = options;
            const call = this.props[model][method || 'fetch'];
            if (params) {
                call.call(this.props[model], ...params.map(param => this.props[param]));
            }
            else {
                call.call(this.props[model]);
            }
        },
        render() {
            // TODO: Maybe pass loading down if we need more fine grain rendering
            const loading = typeof options.isLoading === 'function'
                ? options.isLoading(this.props)
                : this.props[model][options.isLoading || 'isLoading'];
            return (react_1.default.createElement(semantic_ui_react_1.Segment, { basic: true, loading: loading },
                react_1.default.createElement(WrappedComponent, Object.assign({}, this.props))));
        }
    })));
};
