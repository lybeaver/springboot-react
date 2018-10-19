import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import BasicRoute from './Routes';
ReactDOM.render(<Provider store={BasicRoute}> <app/> </Provider>,document.getElementById('root'))
