import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link, Route, Redirect } from 'react-router-dom';
import UserList from '../components/Users';
import {connect} from "react-redux";
import { logout } from "../reducer/LoginReducer";
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
class SiderDemo extends React.Component {
    state = {
        UserList:"",
        menuKey:0,
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }

    render() {
        if(this.props.token.isLogin === false){
            return <Redirect to="/" />
        }
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Link to="/page1">
                            <Icon type="pie-chart" />
                            <span>资源一览</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>效果一览</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="user" /><span>用户管理</span></span>}
                        >
                            <Menu.Item key="3"> <Link to="/page1">一览</Link></Menu.Item>
                            <Menu.Item key="4">添加</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="tool" /><span>系统管理</span></span>}
                        >
                            <Menu.Item key="5">权限设置</Menu.Item>
                            <Menu.Item key="6">角色设置</Menu.Item>
                            <Menu.Item key="7">角色分配</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="8">
                            <Icon type="file" />
                            <span>文件管理</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon type="logout" style={{ fontSize: 18,float: 'right',lineHeight: '64px',padding: '0 24px',cursor: 'pointer' }} />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        <UserList/>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return { token:{isLogin:true} };
}

function mapDispatchToProps() {
    return {};
}

let home = connect(mapStateToProps,mapDispatchToProps)(SiderDemo);
export default home;