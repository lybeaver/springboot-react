import React from 'react'
import axios from 'axios'
import {Button, Divider, Modal, Table} from 'antd';
import {connect} from 'react-redux';
import AddUser from '../components/AddUser'
import SearchUserForm from "../common/SearchUserForm";
import {searchData} from "../reducer/UsersActionReducer"

const confirm = Modal.confirm;
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
        content: ``,
        onOk() {
        return new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
    },
    onCancel() {},
    });
}

class UserList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            visible: false,
            drawerVisible: false
        };
    }

    componentDidMount() {
        columns[5].render = (text, record) => (
            <span>
                <Button  onClick={ this.props.saveShow.bind(this,'EDIT',text) }>编辑</Button>
                <Divider type="vertical" />
                <Button  onClick={ deleteConfirm }>删除</Button>
            </span>
        );
        const searchValues = {}
        this.props.searchData(searchValues);
        console.log("state state",this.props)
    }
    componentDidUpdate () {

    }
    componentWillUnmount () {
        this.setState = (state,callback)=> {
            return;
        }
    }
    onChange = (page) => {
        console.log(page);
        this.props.searchData({currentPage : page.current});
    }
    render(){
        return (
           <div>
               <div>
                   <SearchUserForm/>
                   <Button type="primary" style = {{float: 'right',display: 'inline',top: '-35px'}} onClick = { this.props.saveShow.bind(this,`ADD`,undefined) }>添加成员</Button>
               </div>
               <div style={{ height:20 }}/>
               <AddUser/>
           <Table pagination={{current:this.props.state.showUserInfo.currentPage, total:this.props.state.showUserInfo.total, pageSize:this.props.state.showUserInfo.pageSize}}
                  onChange={this.onChange}
                  columns={ columns } dataSource={ this.props.state.showUserInfo.dataList }/>
       </div>);
    }
}
function mapStateToProps(state) {
    return { state: state };
}

function mapDispatchToProps(dispatch) {
    return {
        saveShow:function(typeItem, text){
            console.log("type type type",typeItem);
            console.log("text text text",text);
            if (typeItem === 'EDIT') {
                axios.get("http://localhost:8080/public/getUser/"+text.id)
                    .then(res=>{
                        const result = res.data||{};
                        if (result.code === '501') {
                            dispatch({type:`SAVE_CLOSE`,drawerVisible: false, typeItem, user:"", success:true, message:result.message, icon:result.icon});
                        } else {
                            dispatch({type:`SAVE_SHOW`,drawerVisible: true, typeItem, text});
                        }
                    });
            } else {
                dispatch({ type:`SAVE_SHOW`,drawerVisible: true ,typeItem ,text });
            }
        },
        searchData:function (searchValues) {
            searchData(dispatch,searchValues)
        }
    };
}

let UserListRedux = connect(mapStateToProps,mapDispatchToProps)(UserList);
export default UserListRedux;
