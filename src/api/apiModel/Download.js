import {
  FetchGet
} from '../http';

const saveAs = function(data, type, name) {
    const link = document.createElement("a");
    const exportName = name ? name:'data';
    const url = 'data:text/' + type + ';charset=utf-8,\uFEFF' + encodeURI(data);
    link.href = url;
    link.download = exportName + '.' + type;
    link.click();
}

export const remoteConsoleCaptureScreen = randomNum => {
  return FetchGet('/download/Mini_ScreenShot.png?t=', randomNum).then((response) => {
    return response;
  });
};

export const downloadFile = (fileurl, filename) => {
    return FetchGet(fileurl).then(dataObject => {
        const data = dataObject.data;
        const file = new Blob([data], {type: 'application/octet-stream'});
        saveAs(file, filename);
        console.log('http GET download ' + fileurl);
    }, () => {
        console.log('http GET failed to download ' + fileurl);
    });
};