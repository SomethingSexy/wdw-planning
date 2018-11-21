"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_react_class_1 = __importDefault(require("create-react-class"));
const mobx_react_1 = require("mobx-react");
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const PARAM = 'param:';
const PROP = 'prop:';
/**
 * TODO: This needs to handle the ability to load and fetch an individual one
 * and check if both are loaded, this can remove the need for Park.tsx needing to
 * have the custom isLoading function.
 */
exports.default = (WrappedComponent, options) => {
    const { fetch, models } = options;
    const observed = mobx_react_1.observer(
    // TODO: Replace with stateless component and hooks when they are release in react
    create_react_class_1.default({
        componentDidMount() {
            const { find, id, method } = options;
            let store = this.props[fetch];
            // need to find the model first
            if (find && id) {
                store = this.findModel();
            }
            store[method || 'fetch']();
        },
        findModel() {
            const { find, id, method } = options;
            if (!find || !id) {
                return null;
            }
            let value;
            if (id.startsWith(PARAM)) {
                const idField = id.substring(PARAM.length);
                value = this.props.match.params[idField];
            }
            else if (id.startsWith(PROP)) {
                const idField = id.substring(PROP.length);
                value = this.props[idField];
            }
            return this.props[fetch][find](value);
        },
        render() {
            const { isLoading, find, propName, id } = options;
            let props = this.props;
            let store = this.props[fetch];
            if (find && id && propName) {
                store = this.findModel();
                props = Object.assign({}, props, { [propName]: store });
            }
            // TODO: Maybe pass loading down if we need more fine grain rendering
            const loading = typeof isLoading === 'function'
                ? isLoading(props)
                : store[isLoading || 'isLoading'];
            return (react_1.default.createElement(semantic_ui_react_1.Segment, { basic: true, loading: loading },
                react_1.default.createElement(WrappedComponent, Object.assign({}, props))));
        }
    }));
    // TODO: This needs to get dynamically generated
    observed.needs = [() => Promise.resolve('balls')];
    // TODO: TS freaked out when I inlined the type check
    if (typeof models === 'string') {
        return mobx_react_1.inject(models)(observed);
    }
    return mobx_react_1.inject(...models)(observed);
};
