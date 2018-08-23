import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

import './common.pcss'


ReactDOM.render(
    <LocaleProvider locale={zh_CN}>
        <App />
    </LocaleProvider>,
    document.getElementById('app'));
