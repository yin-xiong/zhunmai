import React, { Component } from 'react'
import './home.less'
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;


/* 管理的路由组件 */
export default class Home extends Component {
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
                    <Sider>Sider</Sider>
                    <Layout>
                        <Header>Header</Header>
                        <Content>Content</Content>
                    </Layout>
                </Layout>
            </div>
        )
    }



}