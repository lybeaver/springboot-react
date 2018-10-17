import React from 'react'
import axios from 'axios'
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const FormItem = Form.Item;
class NormalLoginForm extends React.Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <Router><Link to='/Register'>register now!</Link></Router>
                </FormItem>
            </Form>
        );
    }
    // state = {
    //     loginState : false
    // }
    // checkLogin() {
    //     axios.get("http://localhost:8080/public/index")
    //         .then(response=>{
    //             console.log(response.data)
    //         })
    // }
    // componentDidMount() {
    //     console.log("login success")
    // }
}
export default Form.create()(NormalLoginForm);