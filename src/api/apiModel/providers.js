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

export const restHeader = params => {
  return FetchGet('/api/providers/logoninfo', params).then((response) => {
    return response;
  });
};

export const restCommonInfo = params => {
  return FetchGet('/api/providers/xccenvinfo', params).then((response) => {
    return response;
  });
};

export const restActiveEvents = params => {
  return FetchGet('/api/providers/imm_active_events', params).then((response) => {
    return response;
  });
};
