import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {LocaleProvider} from 'antd';
import BasicRoute from './Routes';
import { Provider } from 'react-redux';
import Store from './reducer/Reducer';
import {BrowserRouter} from "react-router-dom";
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
ReactDOM.render(<LocaleProvider locale={zh_CN}><Provider store={Store}><BrowserRouter><BasicRoute/></BrowserRouter></Provider></LocaleProvider> ,document.getElementById('root'))