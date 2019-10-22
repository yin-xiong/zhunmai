import React,{Component} from 'react'
import { Form, Icon, Input, Button ,message} from 'antd';
import store from '../../untils/storage' 
import setAuthToken from '../../untils/authToken'
import './login.less'
import {login} from '../../api/api'
const Item = Form.Item

/* 管理的路由组件 */
class Login extends Component {

    handleSubmit = async (e) => {
        e.preventDefault()
        const form = this.props.form
        const values = form.getFieldsValue()
        const resp = await login(values.username,values.password)
        console.log(resp.data)  
        if(resp.data.status !==200 ){
            message.destroy();

            message.error(resp.data.message)
        }else{
            message.destroy();

            message.success(resp.data.message)

            store.saveUser(values)

            const token = resp.data.token || '123123token';
            localStorage.setItem('token',token)
            //设置axios的headers token
            setAuthToken(token)

            this.props.history.replace('/')
        }
    };

    render () {
        // 获取form对象
        const form = this.props.form
        const { getFieldDecorator } = form

        return (
            <div className='loginWarp'>
                <Form onSubmit={this.handleSubmit} className="login-form" >
                    <div className='loginTitle'><h1>准买网</h1><p>后台管理系统</p></div>
                    <Item>
                        {getFieldDecorator('username',{
                            rules: [{ required: true, trigger: 'blur' , message: '请输入你的用户名' }]
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="用户名"
                            />
                        )}
                    </Item>
                    <Form.Item>
                        {getFieldDecorator('password',{
                            rules: [{ required: true, trigger: 'blur' , message: '请输入你的密码' }]
                        })(
                            <Input
                                type='password'
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="密码"
                            />
                        )}
                    </Form.Item>

                    <Form.Item><Button type="primary" htmlType="submit" className="login-form-button">登录</Button></Form.Item>
                </Form>
            </div>
        )
    }
}
const warpLogin = Form.create()(Login)
export default warpLogin