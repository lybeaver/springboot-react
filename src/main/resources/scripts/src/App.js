import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
          <Router> <div>
              <ul>
              <li><Link to='/'>首页</Link></li>
              <li><Link to='/about'>关于</Link></li>
              <li><Link to='/topics'>主题列表</Link></li>
              </ul> <hr/>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} /> 
              <Route path="/topics" component={Topics} />
          </div> </Router>
      </div>
    );
  }
}

export default App;
