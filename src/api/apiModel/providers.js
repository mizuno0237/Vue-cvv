import {
  FetchGet
} from '../http';
/**
 * providers
 * @param {Object}
 * @returns {Promise} 返回一个promise
 */
export const restGetTire = params => {
  return FetchGet('/api/providers/imm_fod_tier', params).then((response) => {
    return response;
  });
};