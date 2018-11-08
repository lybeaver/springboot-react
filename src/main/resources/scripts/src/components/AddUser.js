import {Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Icon} from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import axios from "axios";
const { Option } = Select;

class AddUserForm extends React.Component {

    constructor(props) {
        super(props);
        console.log("props props",props);
    }
    handleSave = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('Received values of form: ',values);
            // if (!err) {
            //     axios.post("http://localhost:8080/public/addUser",values)
            //         .then(res => {
            //                 if (res.data.success) {
            //                     this.props.onClose("",values);
            //
            //                 }
            //             }
            //         )
            //     console.log('Received values of form: ',values);
            // }
        });
    }
    componentWillMount() {
        const { setFieldsValue } = this.props.form;
        const userInfo = this.props.state.showUserInfo.user;
        const user = (userInfo || {}).text;
        console.log("componentWillMount componentWillMount",user);
        setFieldsValue({
            name:(user || {}).name,
            telephone:(user || {}).telephone,
            sex:(user || {}).sex,
            loginName:(user || {}).loginName,
            birthday:(user || {}).birthday
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const userInfo = this.props.state.showUserInfo.user;
        const user = (userInfo || {}).text;
        const typeName = (userInfo || {}).typeItem === 'ADD' ? '添加成员':'编辑成员';
        console.log("user user user",user);

        // getFieldDecorator((id,options) => {
        //     console.log("options options",id,options)
        // })
        // setFieldsValue(user);
        // setFieldsValue({'name':(user||{}).name});
        // this.props.form.setFields({
        //     user: {
        //         value: values.user,
        //         errors: [new Error('forbid ha')],
        //     },
        // });
        // this.props.form.setFieldsValue({});
        console.log("drawerVisible drawerVisible",this.props)
        return (
            <div>
                <Drawer
                    title={typeName}
                    width={720}
                    placement="right"
                    onClose={this.props.onClose.bind(this)}
                    maskClosable={false}
                    visible={this.props.state.showUserInfo.drawerVisible}
                    style={{
                        height: 'calc(100% - 55px)',
                        overflow: 'auto',
                        paddingBottom: 53,
                    }}
                >
                    <Form layout="vertical" hideRequiredMark>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item label="姓名">
                                    {getFieldDecorator('name', {
                                        initialValue: (user||{}).name,
                                        rules: [{ required: true, message: '请输入姓名' }],
                                    })(<Input placeholder="请输入姓名"/>)}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="电话">
                                    {getFieldDecorator('telephone', {
                                        initialValue: (user||{}).telephone,
                                        rules: [{ required: true, message: '请输入手机号码' }],
                                    })(
                                        <Input placeholder="请输入手机号码"/>
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item label="性别">
                                    {getFieldDecorator('sex', {
                                        initialValue: (user||{}).sex,
                                        rules: [{ required: true, message: '请选择性别' }],
                                    })(
                                        <Select placeholder="请选择性别">
                                            <Option value="0">女</Option>
                                            <Option value="1">男</Option>
                                        </Select>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="昵称">
                                    {getFieldDecorator('loginName', {
                                        initialValue: (user||{}).loginName,
                                        rules: [{ required: true, message: '请输入个昵称' }],
                                    })(
                                        <Input placeholder="请输入个昵称"/>
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item label="生日">
                                    {getFieldDecorator('birthday', {
                                        rules: [{ required: true, message: '请选择日期' }],
                                    })(
                                        <DatePicker placeholder="请选择日期"/>
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                    <div
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            width: '100%',
                            borderTop: '1px solid #e8e8e8',
                            padding: '10px 16px',
                            textAlign: 'right',
                            left: 0,
                            background: '#fff',
                            borderRadius: '0 0 4px 4px',
                        }}
                    >
                        <Button style={{marginRight: 8}} onClick={this.props.onClose.bind(this)}>关闭</Button>
                        <Button  type="primary" onClick={this.handleSave.bind(this)}>保存</Button>
                    </div>
                </Drawer>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return { state: state };
}

function mapDispatchToProps(dispatch) {
    return {
        onClose:function(typeItem, text){
            this.props.form.resetFields();
            dispatch({ type:"ON_CLOSE",typeItem,text});
        }
    };
}
// const AddUser = Form.create()(AddUserForm);
const AddUser = connect(mapStateToProps,mapDispatchToProps)(Form.create()(AddUserForm));
export default AddUser;