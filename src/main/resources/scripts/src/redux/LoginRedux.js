import { connect } from 'react-redux';
//=====引入组件=====
import Login from '../reducer/LoginReducer'


//=====react-redux 封装组件=====
// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
function mapStateToProps(state) {
    return {}
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
    return {
        LOGIN:function(username,history){
            console.log("用户名"+username)
            setTimeout(function(){
                dispatch({type:"LOGIN"})
                history.push("/Home")
            },1000)
        }
    };
}

//封装传递state和dispatch
var LoginRedux = connect(mapStateToProps,mapDispatchToProps)(Login);

export default LoginRedux