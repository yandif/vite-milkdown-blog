import { message as Message } from '@/components/Message';
import { TOKEN } from '@/constant';
import { stores } from '@/store/index';
import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/v1',
  withCredentials: false,
  timeout: 10000,
  // crossDomain: true,
});

instance.defaults.headers.post['Content-Type'] = 'application/json';

/** 添加请求拦截器 **/
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(TOKEN);
    if (token) {
      config.headers && (config.headers['token'] = window.btoa(token));
    }
    // 文件上传，发送的是二进制流，所以需要设置请求头的'Content-Type'
    // if (config.url.includes("/upload")) {
    //   config.headers["Content-Type"] = "multipart/form-data";
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

/** 添加响应拦截器  **/
instance.interceptors.response.use(
  (response) => {
    const { code, message, result, status } = response?.data || {};

    if (code === 10043) {
      Message.error(message);
      stores.AdminStore.setCurrentUser(null);
    }

    if (code === 1) {
      if (status === 500) {
        Message.error('服务器错误');
      } else if (status === 404) {
        Message.error('资源不存在');
      } else {
        Message.error(message);
      }
    }
    return Promise.resolve({ code, message, data: result });
  },
  (error) => {
    return Promise.reject(error);
  },
);

const create = (method: string) => {
  return (url: string, query?: unknown, config = {}): Promise<unknown> => {
    return new Promise((resolve, reject) => {
      const configs: { [key: string]: unknown } = { method, url, ...config };
      if (['GET', 'DELETE'].includes(method)) {
        configs.params = query;
      } else {
        configs.data = query;
      }
      instance(configs)
        .then((res) => resolve(res))
        .catch((e) => reject(e));
    });
  };
};

export default instance;
export const get = create('GET');
export const post = create('POST');
export const put = create('PUT');
export const patch = create('PATCH');
export const del = create('DELETE');
