import {
  FetchGet
} from '../http';
/**
 * dataset
 * @param {Object}
 * @returns {Promise} 返回一个promise
 */
export const restGeneralSysInventoryInfo = params => {
  return FetchGet('/api/dataset/sys_inventory', params).then((response) => {
    return response;
  });
};

export const restSysTime = params => {
  return FetchGet('/api/dataset/imm_properties', params).then((response) => {
    return response;
  });
};