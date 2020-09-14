import './public-path';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from "./store";
import { ManagementContainer } from './management.container';

// 获取自己的槽
function domElementGetter() {
    return document.querySelector('#app') as Element;
}

const App = props => <Provider store={store}><ManagementContainer/></Provider>

export async function bootstrap() {
    console.log('react app bootstraped');
}

export async function mount(props) {
    ReactDOM.render(<App/>, domElementGetter());
}

export async function unmount() {
    ReactDOM.unmountComponentAtNode(domElementGetter());
}

if (!window.__POWERED_BY_QIANKUN__) {
    ReactDOM.render(<App/>, domElementGetter());
}
