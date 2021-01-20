import {
  FetchGet
} from '../http';

export const remoteConsoleCaptureScreen = params => {
  return FetchGet('/download/HostScreenShot.png', params).then((response) => {
    return response;
  });
};