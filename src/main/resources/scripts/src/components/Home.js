import React from 'react';
import {Avatar, Icon, Layout, Menu} from 'antd';
import {Link, NavLink, Route, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import Users from '../components/Users';
import '../css/home.less'
import notFound from "./NotFound";

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
        const defaultSelected = this.props.history.location.pathname;
        const match = this.props.match;
        console.log('matchmatch',match,defaultSelected);
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={[defaultSelected]} mode="inline">
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
                            key="/home"
                            title={<span><Icon type="user" /><span>用户管理</span></span>}
                        >
                            <Menu.Item key="/home/users"><NavLink exact to={`${match.url}/users`}>一览</NavLink></Menu.Item>
                            <Menu.Item key="/home/register"><Link to={`${match.url}/register`}>添加</Link></Menu.Item>
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
                        <Avatar className='userAvatar' style={{ backgroundColor: '#87d068',float: 'right',top:'20px',right:'80px' }} size="small" icon="user" />
                        <Icon type="logout" onClick={ this.props.logout.bind(this) } style={{ fontSize: 18,float: 'right',lineHeight: '64px',padding: '0 24px',cursor: 'pointer' }} />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 650 }}>
                        <Route path={`${match.url}/users`} component={Users}/>
                        <Route path={`${match.url}/found404`} component={notFound}/>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Web ©2018 Created by chenglin
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return { state: state };
}

function mapDispatchToProps(dispatch) {
    return {
        logout:function(){
            dispatch({ type:"LOGOUT",state:'' });
            this.props.history.push("/login");
        }
    };
}

let home = connect(mapStateToProps,mapDispatchToProps)(SiderDemo);
export default withRouter(home);