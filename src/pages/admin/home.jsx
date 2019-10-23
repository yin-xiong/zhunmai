import React, { Component } from 'react'
import {Redirect,Route,Switch} from 'react-router-dom'
import { Layout } from 'antd';
import './home.less'
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'

import Home from '../user/index'
import Announcement from '../announcement/index'
import Unaudited from '../audited/unaudited'
import Audited from '../audited/audited'
import UnauditedWeb from '../auditedweb/unauditedweb'
import AuditedWeb from '../auditedweb/auditedweb'
import SortSet from '../sortset/sortSet'
import SystemSet from '../sortset/systemset'

const { Sider, Content } = Layout;

/* 管理的路由组件 */
export default class Admin extends Component {
    componentDidMount() { // 挂载后
        var token = localStorage.getItem('token')
        console.log(token);
        if (!token) {
            this.props.history.replace('/login')
        }
    }

    render() {
        return (
            <div className='homeWarp'>
                <Layout>
                    <Sider><LeftNav></LeftNav></Sider>
                    <Layout>
                        <Header></Header>
                        <Content style={{backgroundColor:"#fff"}}>
                            <Switch>
                                <Route path='/home' component={Home}></Route> {/*用户管理*/}
                                <Route path='/announcement' component={Announcement}></Route>  {/*公告管理*/}
                                <Route path='/unaudited' component={Unaudited}></Route> {/*待审核订单*/}
                                <Route path='/audited' component={Audited}></Route>  {/*已审核订单*/}
                                <Route path='/unauditedWeb' component={UnauditedWeb}></Route>  {/*待审核网站*/}
                                <Route path='/auditedWeb' component={AuditedWeb}></Route>  {/*已审核网站*/}
                                <Route path='/sortSet' component={SortSet}></Route>   {/*分类设置*/}
                                <Route path='/systemSet' component={SystemSet}></Route>   {/*代理费设置*/}
                                <Redirect to='/home'></Redirect>
                            </Switch>
                        
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }



}