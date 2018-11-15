import {Drawer, Form, Button, Col, Row, Input, Select, DatePicker,Avatar, Icon} from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import axios from "axios";
import { Message } from "../common/Message";
const { Option } = Select;

class AddUserForm extends React.Component {

    constructor(props) {
        super(props);
        console.log("props props",props);
    }

    handleSave = (doType,id) => {
        // e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('Received values of form: ',values,doType,id);
            console.log("value value",{...values,di:id})
            if (!err) {
                const url = "http://localhost:8080/public/"+(doType==='ADD'?"addUser":"updateUser");
                values.id = id;
                axios.post(url,values)
                    .then(res => {
                            const result = res.data || {};
                            if (result.success) {
                                console.log("success axios success", this.props, res.data.data, res.data.success, res.data.message);
                                this.props.saveClose("", result.data, result.success, result.message, this.props.form, true, result.icon);
                            }
                        }
                    )
                console.log('Received values of form: ',values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const user = this.props.state.showUserInfo.user;
        const doType = this.props.state.showUserInfo.typeItem;
        const typeName = doType === 'ADD' ? '添加成员':'编辑成员';
        console.log("user user user",user);
        console.log("drawerVisible drawerVisible",this.props)
        return (
            <div>
                <Drawer
                    title={typeName}
                    width={720}
                    placement="right"
                    onClose={this.props.closeDrawer.bind(this)}
                    maskClosable={false}
                    visible={this.props.state.editDrawer.drawerVisible}
                    style={{
                        height: 'calc(100% - 55px)',
                        overflow: 'auto',
                        paddingBottom: 53,
                    }}
                >
                    <Form layout="vertical" hideRequiredMark>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item>
                                    <Avatar shape="square" size={64} icon="user" />
                                </Form.Item>
                            </Col>
                        </Row>
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
                                        initialValue: (user||{}).sex==='男'?'1':'0',
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
                                        initialValue:user ? moment((user||{}).birthday, 'YYYY-MM-DD'):undefined,
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
                        <Button style={{marginRight: 8}} onClick = { this.props.closeDrawer.bind(this) }>关闭</Button>
                        <Button  type="primary" onClick = { this.handleSave.bind(this,doType,(user||{}).id) }>保存</Button>
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
        saveClose:function(typeItem, user, success, message, form,isSave, icon){
            console.log("close close",this.props,icon);
            if (isSave) {
                form.resetFields();
                Message(icon,message);
            } else {
                this.props.form.resetFields();
            }
            dispatch({ type:"SAVE_CLOSE", typeItem, user, success, message, icon});
        },
        closeDrawer:function() {
            dispatch( { type: `CLOSE_DRAWER`} );
        }
    };
}
const AddUser = connect(mapStateToProps,mapDispatchToProps)(Form.create()(AddUserForm));
export default AddUser;