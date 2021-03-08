import {
  FetchPost
} from '../http';
/**
 * login
 * @param {Object}
 * @returns {Promise} 返回一个promise
 */
export const signIn = params => {
  return FetchPost('/api/login', params).then((response) => {
    return response;
  });
};
