import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './redux';

export function configStore(preloadState, ...middleware) {
    if (process.env.NODE_ENV === 'production') {
        return createStore(
            reducers,
            preloadState,
            applyMiddleware(thunk, ...middleware)
        );
    } else {
        const store = createStore(
            reducers,
            preloadState,
            applyMiddleware(thunk, ...middleware)
        );

        if ((module as any).hot) {
            (module as any).hot.accept('./redux', () => {
                const nextReducers = require('./redux');
                store.replaceReducer(nextReducers);
            })
        }
        return store;
    }
}

export const store = configStore({});
