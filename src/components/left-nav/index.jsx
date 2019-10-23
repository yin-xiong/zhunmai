import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd';
import './index.less'
import logo from '../../static/image/icon/logo.png'
import MenuList from '../../config/menuConfig'

const { SubMenu } = Menu;

class leftNav extends Component {

    // 根据传进来的数据生成并循环标签数组

    // getMenuNodes = (MenuList)=>{
    //     return MenuList.map(item =>{
    //         if(!item.children){
    //             return (
    //                 <Menu.Item key={item.path}>
    //                     <Link to={item.path}>
    //                         <Icon type={item.icon} />
    //                         <span>{item.title}</span>
    //                     </Link>
    //                 </Menu.Item>
    //             )
    //         }else{
    //             return (
    //                 <SubMenu
    //                     key={item.path}
    //                     title={
    //                         <span>
    //                             <Icon type={item.icon} />
    //                             <span>{item.title}</span>
    //                         </span>
    //                     }
    //                 >
    //                     {this.getMenuNodes(item.children)}
    //                 </SubMenu>
    //             ) 
    //         }
    //     })
    // }

    getMenuNodes = (MenuList) => {
        const path = this.props.location.pathname


        return MenuList.reduce((prv, item) => {
            if (!item.children) {
                prv.push((
                    <Menu.Item key={item.path}>
                        <Link to={item.path}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                ))
            } else {
                // 查找当前子栏目的父栏目的path
                const pItem = item.children.find(pItem => pItem.path === path)
                if(pItem) this.openKey = item.path
                prv.push((
                    <SubMenu
                        key={item.path}
                        title={
                            <span>
                                <Icon type={item.icon} />
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                        {this.getMenuNodes(item.children)}
                    </SubMenu>
                ))
            }
            return prv
        }, [])
    }

    // 第一次render之前执行1次
    componentWillMount() {
        this.menuNode = this.getMenuNodes(MenuList)
    }

    render() {
        // 这里直接获取会报undefined，因为不能再undefined上面读取pathName
        const pathName = this.props.location.pathname
        const openKey = this.openKey
        
        return (
            <div className='left-nav'>
                <Link to='/' className='logo'><img src={logo} alt="准买网后台管理系统" title='准买网后台管理系统' /></Link>
                <div>
                    <Menu
                        mode="inline"
                        theme="dark"
                        selectedKeys={[pathName]}
                        defaultOpenKeys={[openKey]}
                    >
                        {/* <Menu.Item key="/home">
                            <Link to='/home'>
                                <Icon type="user" />
                                <span>用户管理</span>
                            </Link>
                        </Menu.Item>

                        <SubMenu
                            key="sub3"
                            title={
                                <span>
                                    <Icon type="check-circle" />
                                    <span>设置</span>
                                </span>
                            }
                        >
                            <Menu.Item key="/sortSet">
                                 <Icon type="pie-chart" /> 
                                <Link to='/sortSet'><span>分类设置</span></Link>
                            </Menu.Item>

                            <Menu.Item key="/systemSet">
                                <Icon type="pie-chart" /> 
                                <Link to='/systemSet'><span>代理费设置</span></Link>
                            </Menu.Item>

                        </SubMenu> */}

                        {this.menuNode}
                    </Menu>
                </div>
            </div>
        )
    }

}
export default withRouter(leftNav)