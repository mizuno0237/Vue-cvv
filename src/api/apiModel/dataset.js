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

export const getFmInformation = params => {
  return FetchGet('/api/dataset/imm_firmware', params).then((response) => {
    return response;
  });
};

export const getUploadedImageInfoURIPromise = params => {
  return FetchGet('/api/dataset/imm_firmware_success', params).then((response) => {
    return response;
  });
};

export const getFmUpdateStatus = params => {
  return FetchGet('/api/dataset/imm_firmware_update', params).then((response) => {
    return response;
  });
};

export const restUpdateProgressURI = params => {
  return FetchGet('/api/dataset/imm_firmware_progress', params).then((response) => {
    return response;
  });
};