import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Icon,Modal} from 'antd';
import store from '../../untils/storage'

import './index.less'

const { confirm } = Modal

 class Header extends Component {
    showConfirm = ()=> {
        confirm({
          title: '温馨提示',
          content: '确定退出吗？',
          onOk:() =>{
            localStorage.userInfo = {};
            localStorage.token = ''
            store.removeUser()
            this.props.history.replace('/login')
          }
        });
      }

    render() {
        let username
        if(localStorage.userInfo){
            username = JSON.parse(localStorage.userInfo).username
        }else{
            username = 'xxxxx'
        }
        
        return (
            <div className='header'>
                <div className='flex'>
                        <span className="welcome">
                            欢迎您：<i>{username}</i><Icon type="down" />
                        </span>

                        <span className='exit' onClick={this.showConfirm}>退出</span>
                </div>

            </div>
        )
    }

}

export default withRouter(Header)