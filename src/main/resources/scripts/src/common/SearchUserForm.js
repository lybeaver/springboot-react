import React from 'react'
import {Button, Form, Input, Select} from 'antd'
import connect from "react-redux/es/connect/connect";
import { searchData } from "../reducer/UsersActionReducer"
const Option = Select.Option;
class SearchUserForm extends React.Component {
    handleSearch = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('Received values of form: ', values);
            this.props.searchData(values);
        });
    }

    handleReset = () => {
        this.props.form.resetFields();
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form layout={"inline"} onSubmit={this.handleSearch.bind(this)}>
                <Form.Item>
                    {getFieldDecorator('name', {
                        rules: [{ required: false }],
                    })(
                        <Input  placeholder="姓名" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('telephone', {
                        rules: [{ required: false }],
                    })(
                        <Input  placeholder="电话" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('sex', {
                        rules: [{ required: false }],
                    })(
                        <Select placeholder="性别" style={{ width: 150 }}>
                            <Option value="0">女</Option>
                            <Option value="1">男</Option>
                        </Select>
                    )}
                </Form.Item>
                <Button type="primary" htmlType="submit">查询</Button>
                <Button style={{ marginLeft: 8,marginTop: 4 }} onClick={this.handleReset}>清除</Button>
            </Form>
        )
    }
}
function mapStateToProps(state) {
    return { state: state };
}

function mapDispatchToProps(dispatch) {
    return {
        searchData:function (searchValues) {
            searchData(dispatch, searchValues);
            // dispatch({type: `SEARCH_DATA`, searchValues: searchValues});
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(SearchUserForm));