import {Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Icon} from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import axios from "axios";
const { Option } = Select;

class AddUserForm extends React.Component {
    constructor(props) {
        super(props);
    }
    handleSave = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ',values);
            }
        });
    }
    render() {
        const { getFieldDecorator,setFieldsValue } = this.props.form;
        const user = (this.props.state.showUserInfo.user||{}).text;
        const typeName = (this.props.state.showUserInfo.user||{}).typeItem === 'ADD' ? '添加成员':'编辑成员';
        // setFieldsValue(user);
        // setFieldsValue({'name':(user||{}).name});
        // this.props.form.setFields({
        //     user: {
        //         value: values.user,
        //         errors: [new Error('forbid ha')],
        //     },
        // });
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
                        <Input  type="hidden" className={"id"} />
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item label="姓名">
                                    {getFieldDecorator('name', {
                                        rules: [{ required: true, message: '请输入姓名' }],
                                    })(<Input placeholder="请输入姓名"/>)}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="电话">
                                    {getFieldDecorator('telephone', {
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
                        <Button  type="primary" onClick={this.handleSave}>保存</Button>
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
        onClose:function(){
            this.props.form.resetFields();
            dispatch({ type:"ON_CLOSE"});
        }
    };
}
// const AddUser = Form.create()(AddUserForm);
const AddUser = connect(mapStateToProps,mapDispatchToProps)(Form.create()(AddUserForm));
export default AddUser;