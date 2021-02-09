/*
  基于axios 发送请求
*/

import axios from 'axios'

// 创建一个axios 实例

const request = axios.create({
  // baseURL:'http://ttapi.research.itcast.cn' //请求的基础路径
  baseURL: 'http://api-toutiao-web.itheima.net/'
})

export default request
