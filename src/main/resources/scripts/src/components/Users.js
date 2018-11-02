import React from 'react'
import axios from 'axios'
import { Table, Divider, Modal, Button } from 'antd';
const confirm = Modal.confirm
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
    },{
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
            data: [],
            visible: false
        };
    }

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
        columns[4].render = (text, record) => (
            <span>
                <Button  onClick={this.showModal}>编辑</Button>
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
                            id:''
                        }
                        item.id = value.id;
                        item.key = index.toString();
                        item.name = value.name;
                        item.telephone = value.telephone;
                        item.sex = value.sex === "1" ? "男":"女";
                        item.loginName = value.loginName;
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
       return (<div><div>
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
           <Table columns={columns} dataSource={this.state.data}/>
       </div>);
    }
}

export default UserList;
