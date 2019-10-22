import ajax from './ajax'
// 登录接口
export const login = (username,password)=> ajax('/admin/login/login',{username:username,password:password},'POST')