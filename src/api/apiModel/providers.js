import {
  FetchGet,
  FetchPost
} from '../http';
/**
 * providers
 * @param {Object}
 * @returns {Promise} 返回一个promise
 */


export const restGetTire = params => {
  return FetchGet('/api/providers/imm_fod_tier', params).then(response => {
    return response;
  });
};

export const restHeader = params => {
  return FetchGet('/api/providers/logoninfo', params).then(response => {
    return response;
  });
};

export const restCommonInfo = params => {
  return FetchGet('/api/providers/xccenvinfo', params).then(response => {
    return response;
  });
};

export const restActiveEvents = params => {
  return FetchGet('/api/providers/imm_active_events', params).then(response => {
    return response;
  });
};

export const restRemoteConsoleCaptureScreen = params => {
  return FetchGet('/api/providers/rp_screenshot', params).then(response => {
    return response;
  });
};

export const restRpSession = params => {
  return FetchPost('/api/providers/rp_session', params).then(response => {
    return response;
  });
};

export const getRpSession = params => {
  return FetchGet('/api/providers/rp_session', params).then(response => {
    return response;
  });
};

export const restGeneralInfo = params => {
  return FetchGet('/api/providers/sessioninfo', params).then(response => {
    return response;
  });
};

export const restRemoteConsoleKvmStatusPreempt = params => {
  return FetchPost('/api/providers/rp_kvm_preemptstatus', params).then(response => {
    return response;
  });
};

export const restGetIdentity = params => {
  return FetchGet('/api/providers/identity', params).then(response => {
    return response;
  });
};

export const restWebRequestSpaceURIPromise = params => {
  return FetchPost('/api/providers/fwupdate', params).then(response => {
    return response;
  });
};

export const restGetRPCredential = params => {
  return FetchPost('/api/providers/rp_cred', params).then(response => {
    return response;
  });
};

export const heartbeatTimer = params => {
  return FetchGet('/api/providers/heartbeats', params).then(response => {
    return response;
  });
};

export const restRestartAfterUpdate = params => {
  return FetchPost('/api/providers/imm_reset', params).then(response => {
    return response;
  });
};

export const restLicenseList = params => {
  return FetchGet('/api/providers/imm_fod', params).then(response => {
    return response;
  });
};

export const exportDeleteLicense = params => {
  return FetchPost('/api/providers/imm_fod', params).then(response => {
    return response;
  });
};