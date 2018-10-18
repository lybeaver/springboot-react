import React from 'react'
import axios from 'axios'
import _ from 'lodash'
import { Table, Divider } from 'antd';

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
key: 'action',
render: (text, record) => (
    <span>
  <a href="javascript:;">编辑</a>
  <Divider type="vertical" />
  <a href="javascript:;">删除</a>
</span>
),
}];

class UserList extends React.Component {
    state = {
        data: []
    };
    componentDidMount() {
        axios.get("http://localhost:8080/public/getUserList")
              .then(response=>{
                  console.log(response.data)
                  let result = [];
                  response.data.map((value,index) => {
                        const item = {
                            key: '',
                            name: '',
                            telephone: 0,
                            sex: '',
                            loginName:''
                        }
                        item.key = index.toString();
                        item.name = value.name;
                        item.telephone = value.telephone;
                        item.sex = value.sex === "1" ? "男":"女";
                        item.loginName = value.loginName;
                        result.push(item);
                      }
                   )
                  console.log(result)
                  this.setState({data:result});
              })
    }
    render(){
       return (<Table columns={columns} dataSource={this.state.data}/>);
    }

}

export  default UserList;