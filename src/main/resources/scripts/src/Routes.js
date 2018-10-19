import React from 'react';
import { BrowserRouter, HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Routers from './RouterMap';
import { connect } from 'react-redux'
import Login from './components/Login';
import Register from './components/Register';
import Home from  './components/Home'
import NotFound from './components/NotFound';
// const  BasicRoute = ()=>(
//     <BrowserRouter>
//         <Switch>
//             <Route exact path="/login" component={Login}/>
//             <Redirect from="/" exact to="/login"/>
//             <Route exact path="/register" component={Register}/>
//             <Route exact path="/home" component={Home}/>
//             <Route path="*" component={NotFound}/>
//         </Switch>
//     </BrowserRouter>
// )
// export default BasicRoute;
// e.preventDefault();
const token  = false;
class BasicRoute extends React.Component {
     constructor(props) {
        super(props)
     }
    render() {
     // let token = this.props.token
        return (
          <BrowserRouter>
             <div>
                   <Switch>
                        {Routers.map((item, index) => {
                             return <Route key={index} path={item.path} exact render={props =>
                                (!item.auth ? (<item.component {...props} />) : (token ? <item.component {...props} /> : <Redirect to={{
                                    pathname: '/login', state: { from: props.location }}} />)
                               )} />
                        })}
                        <Route component={NotFound} />
                   </Switch>
             </div>
          </BrowserRouter>
        )
     }
 }

// redux拿到token并挂载到App的props上面
const mapStateToProps = (state) => {
    return { token: state }
}
export default connect(mapStateToProps)(BasicRoute);