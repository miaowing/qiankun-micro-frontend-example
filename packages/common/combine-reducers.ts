import { combineReducers as combine } from 'redux';

export function combineReducers(reducerMaps) {
    const reducers = {};
    for (const key in reducerMaps) {
        if (!reducerMaps.hasOwnProperty(key)) {
            continue;
        }

        reducers[key] = reducerMaps[key].reduce.bind(reducerMaps[key]);
    }
    return combine(reducers);
}
