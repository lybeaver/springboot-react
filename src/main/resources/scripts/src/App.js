import React, { Component } from 'react';
import Login from './Login'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
            'learn springboot',
            'learn react']
        }
    }
    addClick() {
        this.setState({
                list : [...this.state.list, "add element"]
            })
        console.log(this.state.list)
    }
    handleItemClick(index) {
        const list = this.state.list;
        list.splice(index,1);
        this.setState(
            {
                list:list
            }
        )
    }
  render() {
    return (
      <div className="App">
          <a href={'http://localhost:8080/'}>跨域1</a>
          <a href={'http://localhost:8080/login'}>跨域2</a>
          <div><button onClick={this.addClick.bind(this)}>add</button></div>
          <Login/>
          <ul>
              {
                  this.state.list.map((item,index)=>{
                      return <li key={index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>
                  })
              }
          </ul>
      </div>
    );
  }
}

export default App;
