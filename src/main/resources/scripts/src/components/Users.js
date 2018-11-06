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
        this.showModal = this.showModal.bind(this)
        this.handleOk = this.handleOk.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.state = {
            mesShow: false,
            success: false,
            message: "",
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

    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    componentDidMount() {
        columns[5].render = (text, record) => (
            <span>
                {
                    console.log("text",text)
                }
                {
                    console.log("record",record)
                }
                <Button  onClick={this.props.showDrawer.bind(this,'EDIT',text)}>编辑</Button>
                <Divider type="vertical" />
                <Button  onClick={deleteConfirm}>删除</Button>
            </span>
        )
        axios.get("http://localhost:8080/public/getUserList")
              .then(response=>{
                  console.log(response.data)
                  let result = [];
                  (response.data.data || []).map((value,index) => {
                        const item = {
                            key: '',
                            name: '',
                            telephone: 0,
                            sex: '',
                            loginName:'',
                            birthday:'',
                            id:''
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
                   )
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
       return (
           <div>
               <div>
               <Modal
                   title="信息编辑"
                   visible = {this.state.visible}
                   onOk={this.handleOk}
                   onCancel={this.handleCancel}
                   okText='保存'
                   cancelText='返回'
               >
                   <p>Some contents...</p>
                   <p>Some contents...</p>
                   <p>Some contents...</p>
               </Modal>
           </div>
               <InputGroup compact>
                   <Col span={151}>
                   <Input style={{ width: 150}} placeholder="昵称" />
                   </Col>
                   <Col span={151}>
                   <Input style={{ width: 150}} placeholder="电话" />
                   </Col>
                   <Col span={81}>
                   <Select defaultValue="1" style={{ width: 80}}>
                       <Option value="1">男</Option>
                       <Option value="0">女</Option>
                   </Select>
                   </Col>
                   <div>
                   <Button type="primary" style={{
                       marginRight: 8,
                   }} icon="search">搜索</Button>
                   <Button type="primary" style={{
                       marginRight: 8,
                   }} onClick={this.props.showDrawer.bind(this,'ADD')}>添加成员</Button>
                   </div>
                   {this.state.mesShow ? <div><Alert message={this.state.message} type={this.state.success?"success":"error"} showIcon /></div>:""}
                   <AddUser/>
               </InputGroup>
               <div style={{height:20}}/>
           <Table columns={columns} dataSource={this.state.data}/>
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
                        if (res.data.code === '501') {
                            this.setState({mesShow: true,message:res.data.message,success:res.data.success});
                            console.log("errrrrrrrrrrrrrrr",this.state)
                        } else {
                            this.setState({mesShow: true,message:res.data.message,success:res.data.success});
                            // console.log("errrrrrrrrrrrrrrr222222",this.state)
                            // console.log("resultttt",res.data)
                        }
                    });
            } else {
                dispatch({ type:"SHOW_DRAWER",typeItem,text});
            }
        }
    };
}

let UserListRedux = connect(mapStateToProps,mapDispatchToProps)(UserList);
export default UserListRedux;
