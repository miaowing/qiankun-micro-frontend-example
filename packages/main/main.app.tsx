// import './public-path';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MainContainer } from './main.container';
import './styles/index.less';
import { registerMicroApplications } from './portal';
import { start, setDefaultMountApp } from 'qiankun';

// 获取自己的槽
function domElementGetter() {
    return document.querySelector('#main') as Element;
}

const loader = loading => ReactDOM.render(<MainContainer loading={loading}/>, domElementGetter());

registerMicroApplications(loader);

setDefaultMountApp('#/dashboard');
start();
