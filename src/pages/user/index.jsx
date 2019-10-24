import React, { Component } from 'react'
import { Table } from 'antd';
import './index.less'
// 用户管理路由


const columns = [
    {
      title: '用户ID',
      dataIndex: 'userId',
      align:'center',
      width:'100px'
    },
    {
      title: '真实姓名',
      dataIndex: 'relName',
      align:'center',
      width:'100px'
    },
    {
      title: '手机号码',
      dataIndex: 'phone',
      align:'center',
      width:'200px'
    },
    {
        title:'IP',
        dataIndex:'ip',
        align:'center',
        width:'120px'
    },
    {
        title:'注册时间',
        dataIndex:'dataTime',
        align:'center',
        width:'220px'
    },
    {
        title:'状态',
        dataIndex:'state',
        align:'center',
        width:'120px'
    },
    {
        title:'操作',
        dataIndex:'edit',
        render: (text, record, index) => (
            <div>
              <button onClick={()=>{
                  console.log(record)
                  console.log(1)   
                  }
                } 
                  className='ant-btn' style={{marginRight:'20px'}}>查看</button>
              <button
              onClick={()=>{
                console.log(record.state)
                  console.log(2)   
                }
              } 
              className='ant-btn'>禁用</button>
            </div>
          )
    }
  ];


  
  const data = [
    {
      key: '0',
      userId: '1652321',
      relName: '张三1',
      phone: '15875445454',
      ip:'192.168.1.1',
      dataTime:'2019-10-17 12：00',
      state:'已启用',
    },
    {
        key: '1',
        userId: '1652321',
        relName: '张三2',
        phone: '15875445454',
        ip:'192.168.1.1',
        dataTime:'2019-10-17 12：00',
        state:'已启用',
    },
    {
        key: '2',
        userId: '1652321',
        relName: '张三3',
        phone: '15875445454',
        ip:'192.168.1.1',
        dataTime:'2019-10-17 12：00',
        state:'已启用',
    }
  ];
export default class UserHome extends Component {

    render() {
        return (
            <div className='home'>
                <Table columnWidth='120' align='center' bordered columns={columns} dataSource={data} size="middle" />
            </div>
        )
    }

}