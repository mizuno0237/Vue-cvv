import {
  FetchGet
} from '../http';

export const getUploadProgress = updateRandomNum => {
  return FetchGet('/upload/progress?X-Progress-ID=' + updateRandomNum).then((response) => {
    return response;
  });
};