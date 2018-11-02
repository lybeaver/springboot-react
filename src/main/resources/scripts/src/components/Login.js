import React from 'react';
import axios from 'axios';
import {Form, Icon, Input, Button, Checkbox, Alert} from 'antd';
import { connect } from 'react-redux';
import { Route, Link, Redirect } from "react-router-dom";
import '../css/login.less'
const FormItem = Form.Item;
const initState = {
    isLogin: false,
    token: '',
    user:{}
}
class NormalLoginForm extends React.Component{
    state = {
        loginError: false,
        loading: false,
        loadText: '登录'
    }
    componentWillMount() {

    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', this.props);
                this.setState({loading: true});
                this.setState({loadText: "登录中..."});
                axios.post("http://localhost:8080/public/login",values)
                .then(res=>{
                    if (res.data === '') {
                        this.setState({loginError: true});
                    } else {
                        console.log("store",this.props)
                        initState.isLogin = true
                        initState.token = res.data
                        initState.user = {}
                        localStorage.setItem("my_token",res.data);
                        console.log("console_localStorage",localStorage.getItem('my_token'));
                        this.props.login(this.props.history, initState);
                    }
                });
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <div className="login-form">
                    <div className="login-logo">
                        <div className="login-name">优雅</div>
                    </div>

                    <Form onSubmit={this.handleSubmit}>
                        <FormItem>
                            {getFieldDecorator('loginName', {
                                rules: [{ required: true, message: '请输入用户名' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </FormItem>
                        {this.state.loginError ? <div><Alert message="登录信息不正确" type="error" showIcon /></div>:''}
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住我</Checkbox>
                            )}
                            <a className="login-form-forgot" href="">忘记密码</a>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登 录
                            </Button>
                            <Route><Link to='/register'>去注册</Link></Route>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
function mapStateToProps(state) {
    return {state}
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
    return {
        login:function(history,state){
            setTimeout(function(){
                dispatch({type:"LOGIN", state:state})
                history.push("/Home")
            },1000)
        }
    };
}

//封装传递state和dispatch
let LoginRedux = connect(mapStateToProps,mapDispatchToProps)(Form.create()(NormalLoginForm));
export default LoginRedux;