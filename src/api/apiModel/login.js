import {
  FetchPost,
  FetchGet,
  QS
} from '../http';
/**
 * 登录
 * @param {Object}
 * @returns {Promise} 返回一个promise
 */

export const signIn = params => {
  return FetchPost('/api/login', QS.stringify(params)).then((response) => {
    return response;
  });
};

export const restGetTire = params => {
  return FetchGet('/api/providers/imm_fod_tier', QS.stringify(params)).then((response) => {
    return response;
  });
};