import axios from "axios";
import { message } from "choerodon-ui/pro";
export const baseURL = "http://localhost:80/api/v1";




export const lookup = url => {
  const lookup = axios.create({
    baseURL: baseURL + "/lookup" + url,
    withCredentials: true,
    timeout: 10000,
    crossDomain: true,
  });
  lookup.interceptors.request.use(
    config => {
      config.headers["x-access-token"] =
        localStorage.getItem("exam-token") || "";
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
  lookup.interceptors.response.use(
    response => {
      const { faild, type, message, data } = response?.data;
      if (faild === false) {
        showMessage(type, message);
        return Promise.resolve({ faild, ...data });
      } else {
        showMessage(type, message);
        return Promise.resolve({ faild, ...data });
      }
    },
    error => {
      const { faild, type, message } = error?.response?.data;
      if (faild === true) {
        showMessage(type, message);

        if (error.response.status === 401) {
          window.location.href = "/#/signin";
        }
      }
      return Promise.reject(error);
    }
  );
  return lookup;
};

const instance = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 10000,
  crossDomain: true,
});

instance.defaults.headers.post["Content-Type"] = "application/json";

/** 添加请求拦截器 **/
instance.interceptors.request.use(
  config => {
    config.headers["x-access-token"] = localStorage.getItem("exam-token") || "";
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
    const { faild, type, message, data } = response?.data;
    if (faild === false) {
      showMessage(type, message);
      return Promise.resolve({ faild, ...data });
    } else {
      showMessage(type, message);
      return Promise.resolve({ faild, ...data });
    }
  },
  error => {
    const { faild, type, message } = error?.response?.data;
    if (faild === true) {
      showMessage(type, message);

      if (error.response.status === 401) {
        window.location.href = "/#/signin";
      }
    }
    return Promise.reject(error);
  }
);

/* 统一封装get请求 */
export const get = (url, params, config = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      method: "get",
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
      method: "post",
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
      method: "put",
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
