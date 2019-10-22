 //对用户信息的读写删 操作
 import store from 'store'
 const userInfo = 'userInfo'
 export default {
     saveUser(user){
         // 原生写法
        // localStorage.setItem(userInfo,JSON.stringify(user))
        store.set(userInfo,user)
     },

     getUser(){
        // return JSON.parse(localStorage.getItem(userInfo) || '{}')
        return store.get(userInfo) || {}
     },

     removeUser(){
        // localStorage.removeItem(userInfo)
        store.remove(userInfo)
    }

 }