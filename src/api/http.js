import axios from 'axios';
import {getCookie} from './../util/cookie.js';
export const QS = require('qs');
// json请求头
export const oXHRHeadrs = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
};

// url序列化请求头
export const oXHRHeadrsUrlencoded = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
};

// formData表单请求头
export const oXHRHeadrsFormData = {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
};

axios.interceptors.request.use(
    config => {
        if (sessionStorage.token) {
            config.headers.Authorization = 'Bearer ' + sessionStorage.token;
        }
        if(getCookie('_csrf_token')) {
            config.headers['X-XSRF-TOKEN'] = getCookie('_csrf_token');
        }
        return config
    }
)

export function FetchGet(url, params = {}, headers) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }, headers).then((response) => {
      resolve(response);
    }).catch(err => {
      reject(err);
    });
  });
}
/**
 * fetch Get请求
 * @param {String} url 请求地址
 * @param {Obejct} data 請求參數
 * @param {Obejct} headers 請求头部
 * @param {Obejct} params 请求序列化参数
 * @returns {Promise} 返回一个promise
 */
export function FetchPost(url, data = {}, headers, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, data, headers, params).then((response) => {
      resolve(response);
    }).catch(err => {
      reject(err);
    });
  });
}
/**
 * fetch patch请求
 * @param {String} url 请求地址
 * @param {Obejct} data 請求參數
 * @param {Obejct} params 请求序列化参数
 * @returns {Promise} 返回一个promise
 */
export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response);
      }, err => {
        reject(err);
      });
  });
}
/**
 * put 方法封装
 * @param {String} url 请求路径
 * @param {Object} data 请求参数
 * @returns {Promise} 返回调用
 */
export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response);
      }, err => {
        reject(err);
      });
  });
}
