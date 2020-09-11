import { Action } from "./interfaces/action.interface";
import { bindActionCreators as bind } from 'redux';

export function bindActionCreators(action: Function | Action<any>, dispatch) {
    const params = {};
    const methods = Object.getOwnPropertyNames(action).filter(method => method !== 'length' && method !== 'name');
    methods.forEach(method => {
        if (action[method]) {
            try {
                params[method] = action[method].bind(action);
            } catch (e) {
            }
        }
    });
    return bind(params, dispatch);
}
