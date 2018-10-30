import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {NavLink, Link, Route, Redirect, Switch, BrowserRouter,withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import Register from '../components/Register';
import Users from '../components/Users';
import '../css/home.less'
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
class SiderDemo extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        const match = this.props.match;
        console.log('matchmatch',this.props);
        console.log('matchmatch',match);
        console.log("homehoem",this.props,this.props.token.loginInfo.isLogin );
        // if (this.props.token.loginInfo.isLogin === false) {
        //     return <Redirect to="/login" />
        // }
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" />
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
                            <Menu.Item key="3"><NavLink exact to={`${match.url}/users`}>一览</NavLink></Menu.Item>
                            <Menu.Item key="4"><Link to={`${match.url}/register`}>添加</Link></Menu.Item>
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
                        <Icon className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle}/>
                        <Icon type="logout" onClick={ this.props.logout } style={{ fontSize: 18,float: 'right',lineHeight: '64px',padding: '0 24px',cursor: 'pointer' }} />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        <Route path={`${match.url}/users`} component={Users}/>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Web ©2018 Created by 我是谁，我在哪
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return { token: state };
}

function mapDispatchToProps(dispatch) {
    return {
        logout:function(history){
            dispatch({ type:"LOGOUT",state:'' });
            history.push("/login");
        }
    };
}

let home = connect(mapStateToProps,mapDispatchToProps)(SiderDemo);
export default withRouter(home);