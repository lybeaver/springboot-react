import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
const { Option } = Select;

class AddUserForm extends React.Component {
    handleSave = (e) => {
        e.preventDefault();
       // const formvalues = this.refs.getForm;
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        console.log("drawerVisible drawerVisible",this.props)

        return (
            <div>
                <Drawer
                    title="添加成员"
                    width={720}
                    placement="right"
                    onClose={this.props.onClose}
                    maskClosable={false}
                    visible={this.props.state.showVisible.drawerVisible}
                    style={{
                        height: 'calc(100% - 55px)',
                        overflow: 'auto',
                        paddingBottom: 53,
                    }}
                >
                    <Form layout="vertical" hideRequiredMark ref="getForm">
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item label="姓名">
                                    {getFieldDecorator('name', {
                                        rules: [{ required: true, message: '请输入姓名' }],
                                    })(<Input placeholder="请输入姓名" />)}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="电话">
                                    {getFieldDecorator('url', {
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
                                    {getFieldDecorator('owner', {
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
                                    {getFieldDecorator('type', {
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
                                    {getFieldDecorator('dateTime', {
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
                        <Button
                            style={{
                                marginRight: 8,
                            }}
                            onClick={this.props.onClose}
                        >
                            关闭
                        </Button>
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
            dispatch({ type:"ON_CLOSE"});
        }
    };
}
// const AddUser = Form.create()(AddUserForm);
let AddUser = connect(mapStateToProps,mapDispatchToProps)(Form.create()(AddUserForm));
export default AddUser;