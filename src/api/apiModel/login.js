import {
  FetchPost,
  FetchGet,
  QS
} from '../http';
/**
 * login
 * @param {Object}
 * @returns {Promise} 返回一个promise
 */
console.log(FetchGet)
export const signIn = params => {
  return FetchPost('/api/login', QS.stringify(params)).then((response) => {
    return response;
  });
};
