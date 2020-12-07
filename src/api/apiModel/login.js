import {
  FetchPost,
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