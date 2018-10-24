import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers  from './reducer/Reducer';
import Login from './components/Login';
import Register from './components/Register';
import Home from  './components/Home';
import NotFound from './components/NotFound';
const store = createStore(reducers);
const  BasicRoute = ()=>(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/home" component={Home}/>
                <Redirect from="/" exact to="/login"/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </BrowserRouter>
    </Provider>
)
export default BasicRoute;
