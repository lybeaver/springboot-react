import React, { Component } from 'react';
class Login extends Component{
    render() {
        return(
            <div>
                <form id={'login'} onSubmit={}>
                    <input type='text'/>
                    <input type='password'/>
                    <button>login</button>
                </form>
            </div>
        );
    }
}
export default Login;