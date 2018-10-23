import React from 'react';
import axios from 'axios';
import { createStore } from 'redux';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import { Route, Link } from "react-router-dom";
import '../css/login.less'
const FormItem = Form.Item;
class NormalLoginForm extends React.Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                axios.post("http://localhost:8080/public/login",values)
                    .then(res=>{
                        if (res.data == '') {
                            console.log("login error");
                        } else {
                            console.log(res.data);
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
export default Form.create()(NormalLoginForm);