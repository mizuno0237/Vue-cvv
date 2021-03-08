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

export const restPowerActionList = params => {
  return FetchGet('/api/dataset/imm_status_power', params).then((response) => {
    return response;
  });
};

export const restSysDetailInfo = params => {
  return FetchGet('/api/dataset/sys_info', params).then((response) => {
    return response;
  });
};

export const restGetPortAssignment = params => {
  return FetchGet('/api/dataset/imm_ports', params).then((response) => {
    return response;
  });
};