import axios from 'axios'
import {message} from 'antd'

// 只暴露一个接口函数用default
export default function ajax(url,data={},method='GET'){
    return new Promise((resolve,reject) =>{
        let promise
      if(method === 'GET'){
        promise = axios.get(url,{
            params:data
        })
      }else if(method === 'POST'){
           promise = axios.post(url,data)
      }
      promise.then( response =>{
          resolve(response)
      }).catch(error=>{
          message.destroy();
          message.error('请求出错，请稍后再试')
      })
    })
}