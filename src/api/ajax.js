import axios from 'axios'
import {message} from 'antd'

// 只暴露一个接口函数用default
export default function ajax(url,data={},method='GET'){
    return new Promise((resolve,reject) =>{
        let promise
      // 1 执行异步ajax请求
      if(method === 'GET'){
        promise = axios.get(url,{
            params:data
        })
      }else if(method === 'POST'){
           promise = axios.post(url,data)
      }
      // 2 成功时调用resolve
      promise.then( response =>{
          resolve(response)
      }).catch(error=>{
            message.destroy();
          // 3 失败时就不用调用reject，给出提示
          message.error('请求出错，请稍后再试')
      })
    })
}