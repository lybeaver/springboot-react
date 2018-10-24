import React from 'react';
import axios from 'axios';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import { connect } from 'react-redux';
import { Route, Link, Redirect } from "react-router-dom";
import '../css/login.less'
const FormItem = Form.Item;

class NormalLoginForm extends React.Component{
    state = {
        token:{},
        loading: false,
        loadText: '登录'
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
                        if (res.data == '') {
                            console.log("login error");
                        } else {
                            console.log(res.data);
                            mapStateToProps({username:'chenglin'});
                            this.props.LOGIN(null,this.props.history);
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
                    { this.props.isAuth?<Redirect to='home' />:null }
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
                            <Route><Link to='/Register'>去注册</Link></Route>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}
// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
function mapStateToProps(state) {
    return {
        token:state.username
    }
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
    return {
        LOGIN:function(username, history){
            console.log("用户名"+username)
            setTimeout(function(){
                dispatch({type:"LOGIN"})
                history.push("/Home")
            },1000)
        }
    };
}

//封装传递state和dispatch
let LoginRedux = connect(mapStateToProps,mapDispatchToProps)(Form.create()(NormalLoginForm));

export default LoginRedux;