import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BasicRoute from './Routes';
import { Provider } from 'react-redux';
import Store from './reducer/Reducer';
import {BrowserRouter} from "react-router-dom";
ReactDOM.render(<Provider store={Store}><BrowserRouter><BasicRoute/></BrowserRouter></Provider> ,document.getElementById('root'))