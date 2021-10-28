import axios from 'axios';

import { message as Message } from '@/components/Message/index';
const instance = axios.create({
  baseURL: "/api",
  withCredentials: false,
  timeout: 10000,
  crossDomain: true,
});

instance.defaults.headers.post['Content-Type'] = 'application/json';
/** 添加请求拦截器 **/
instance.interceptors.request.use(
  config => {
    config.headers['x-access-token'] = localStorage.getItem('exam-token') || '';
    // 文件上传，发送的是二进制流，所以需要设置请求头的'Content-Type'
    // if (config.url.includes("/upload")) {
    //   config.headers["Content-Type"] = "multipart/form-data";
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

/** 添加响应拦截器  **/
instance.interceptors.response.use(
  response => {
    const { code, message, result, status } = response?.data;
    if (code) {
      if (status === 500) {
        Message.error('服务器错误');
      } else if (status === 404) {
        Message.error('资源不存在');
      } else {
        Message.error(message);
      }
    } else {
      Message.success(message);
    }
    return Promise.resolve({ code, message, data: result });
  },
  error => {
    return Promise.reject(error);
  }
);

/* 统一封装get请求 */
export const get = (url, params, config = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'get',
      url,
      params,
      ...config,
    })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

/* 统一封装post请求  */
export const post = (url, data, config = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'post',
      url,
      data,
      ...config,
    })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const put = (url, data, config = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'put',
      url,
      data,
      ...config,
    })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default instance;
