import {
  FetchGet
} from '../http';

export const remoteConsoleCaptureScreen = randomNum => {
  return FetchGet('/download/Mini_ScreenShot.png?t=', randomNum).then((response) => {
    return response;
  });
};