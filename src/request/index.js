import axios from 'axios';
import store from '../store';
import Cookie from '../utils/cookie.js';
import { Message } from 'view-design';

let baseURLStr = 'http://45.77.254.7:8888/';
let instance = axios.create({
  baseURL: '/',
  timeout: 5000
});

if (process.env.NODE_ENV == 'development') {
  instance.defaults.baseURL = process.env.VUE_APP_BASEURL;
} else if (process.env.NODE_ENV == 'production') {
  instance.defaults.baseURL = baseURLStr;
}

instance.interceptors.request.use(
  config => {
    console.log(config);
    console.log(process.env.NODE_ENV)
    if (process.env.NODE_ENV == 'production') {
      config.url = baseURLStr + config.url.split('api/')[1];
      config.headers['Content-Type'] ='application/json;charset=UTF-8'
    }
    // if(config.url)
    if (store.state.token || Cookie.getAttribute('token')){
      config.headers.authorization = store.state.token;
    }
      
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  response => {
   

    if (response.data.token) {
      const { token } = response.data;
      Cookie.setAttribute('token', token, 30);
      store.commit('SET_TOKEN', token);
    }
    return response;
  },
  err => {
    // console.log(err.response)

    Message.error(err.response.data.message);
    return Promise.reject(err); // 返回接口返回的错误信息
  }
);

export default instance;
