import React from 'react'
import axios from 'axios'
class Header extends React.Component{
    state = {
        loginState : false
    }
    checkLogin() {
        axios.get("http://localhost:8080/public/index")
            .then(response=>{
                console.log(response.data)
            })
    }
    // componentDidMount() {
    //     console.log("login success")
    // }
    render(){

        const loginId = "loginForm";
        return(<form className="form-signin" id={loginId} method={'submit'}>
            <h2 className="form-signin-heading"> 请登录 </h2>
            <label htmlFor="inputEmail" className="sr-only"> 邮箱地址
            </label>
            <input type="email" id="inputEmail" className="form-control" placeholder="邮箱地址" ref={input => this.input = input}/>
            <label htmlFor="inputPassword" className="sr-only"> 密  码</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="密码" required/>
            <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.checkLogin}> 登 录
            </button>
        </form>);
    }
}
export default Header;