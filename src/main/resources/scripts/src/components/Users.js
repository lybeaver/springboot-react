import React from 'react'
import axios from 'axios'
import {Table, Divider, Modal, Button, Select, Input, Col, Form, Alert} from 'antd';
import { connect } from 'react-redux';
import AddUser from '../components/AddUser';
import moment from 'moment';
const confirm = Modal.confirm;
const InputGroup = Input.Group;
const Option = Select.Option;
const columns = [{
        title: '名字',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: '电话',
        dataIndex: 'telephone',
        key: 'telephone',
    }, {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
    }, {
        title: '昵称',
        dataIndex: 'loginName',
        key: 'loginName',
    }, {
        title: '生日',
        dataIndex: 'birthday',
        key: 'birthday',
    }, {
        title: '操作',
        key: 'action'
}];
function deleteConfirm()  {
    confirm({
        title: '确定要删除么?',
        content: '1秒后更新',
        onOk() {
        return new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
    },
    onCancel() {},
    });
}

// function showModal() {
//     console.log("showModalshowModal",this.state.visible)
//     this.setState({
//         visible: true,
//     });
// }

class UserList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            visible: false,
            drawerVisible: false
        };
    }

    showDrawer = () => {
        this.setState({
            drawerVisible: true,
        });
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };

    handleSearch = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('Received values of form: ', values);
        });
    }

    handleReset = () => {
        this.props.form.resetFields();
    }

    componentDidMount() {
        columns[5].render = (text, record) => (
            <span>
                <Button  onClick={ this.props.showDrawer.bind(this,'EDIT',text) }>编辑</Button>
                <Divider type="vertical" />
                <Button  onClick={ deleteConfirm }>删除</Button>
            </span>
        );
        axios.get("http://localhost:8080/public/getUserList")
              .then(response=>{
                  let result = [];
                  (response.data.data || []).map((value,index) => {
                        const item = {
                            key: '',
                            name: '',
                            telephone: 0,
                            sex: '',
                            loginName: '',
                            birthday: '',
                            id: ''
                        }
                        item.id = value.id;
                        item.key = index.toString();
                        item.name = value.name;
                        item.telephone = value.telephone;
                        item.sex = value.sex === "1" ? "男":"女";
                        item.loginName = value.loginName;
                        item.birthday = moment(value.birthday).format('YYYY-MM-DD');
                        result.push(item);
                      }
                   );
                  this.setState({data:result});
              })
    }
    componentDidUpdate () {

    }
    componentWillUnmount () {
        this.setState = (state,callback)=> {
            return;
        }
    }
    render(){
        const prop = this.props.state.showUserInfo;
        const { getFieldDecorator } = this.props.form;
        return (
           <div>
               <div>
               <Modal
                   title = "信息编辑"
                   visible = {this.state.visible}
                   onOk = {this.handleOk}
                   onCancel = {this.handleCancel}
                   okText = '保存'
                   cancelText = '返回'
               >
                   <p>Some contents...</p>
                   <p>Some contents...</p>
                   <p>Some contents...</p>
               </Modal>
           </div>
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
                           rules: [{ required: true, message: '请选择性别' }],
                       })(
                           <Select placeholder="请选择性别">
                               <Option value="0">女</Option>
                               <Option value="1">男</Option>
                           </Select>
                       )}
                   </Form.Item>
                   <Button type="primary" htmlType="submit">查询</Button>
                   <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                       清除
                   </Button>
               </Form>
               <div>
                   <Button type="primary" style={{
                       marginRight: 8,
                   }} onClick = { this.props.showDrawer.bind(this,'ADD',undefined) }>添加成员</Button>
               </div>
               <div style={{ height:20 }}/>
           <Table columns={ columns } dataSource={ this.state.data }/>
       </div>);
    }
}
function mapStateToProps(state) {
    return { state: state };
}

function mapDispatchToProps(dispatch) {
    return {
        showDrawer:function(typeItem, text){
            console.log("type type type",typeItem);
            console.log("text text text",text);
            if (typeItem === 'EDIT') {
                axios.get("http://localhost:8080/public/getUser/"+text.id)
                    .then(res=>{
                        const result = res.data||{};
                        if (result.code === '501') {
                            this.setState({ mesShow: true, message:result.message, success:result.success });
                            dispatch({type:"ON_CLOSE", typeItem, user:"", success:true, message:result.message, icon:result.icon});
                        } else {
                            dispatch({type:"SHOW_DRAWER", typeItem, text});
                        }
                    });
            } else {
                dispatch({ type:"SHOW_DRAWER",typeItem,text });
            }
        }
    };
}

let UserListRedux = connect(mapStateToProps,mapDispatchToProps)(UserList);
export default UserListRedux;
