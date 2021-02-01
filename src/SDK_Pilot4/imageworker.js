/*! Copyright ©2020 Avocent Corporation and its affiliates.
*  All Rights Reserved.
*
*/
/* 
 * Worker for ISO file handling.
 */
var _$_e64c=["isoimagecreator.js","isoimageutility.js","requestFileSystemSync","webkitRequestFileSystemSync","message","data","reqType","imageStart","processType","setDebugType","debugMode","setDebugMode","debugLevel","setDebugLevel","image worker handler start...","length","contentArray","logDebug","supportFileSystem","maxSize","reqSize","imageFileName","mapfileURL","getDataURL","Failed to download..","logInfo","delete","fileName","fileSize","delete_file_status","postMessage","addEventListener","getFile","root","remove","Image file is deleted...","Exception on deleteImageFile::","toString","logDetail","Image file might be already deleted...","fileContentArray","iso9660Config","rrConfig","jolietConfig","imageFileHandler","bCreateFromDirectory","bFileSystemSupport","expectedTotalImgSize","requestedTotalImgSize","bImageCreated","startTime","now","isoCreator","progress","progressStatus","lastStatusUpdatedTime","makeISO","Exception::","notifyException","prototype","allowASCII","setInterchangeLevel","isFile","file","addFile","addContentsRecursively","Files added into handler::","updateStatus","process","error","cancelProcess","getFileEntryURL","getImageFileSize","isoData","sendFileData","fileData","endDocCallback","endDocCallback callback Total time::","status","ISO","getMonth","/","getDate","getFullYear"," ","getHours",":","getMinutes","getSeconds","getMilliseconds"," ImageWorker ","log","logPacket","","0"];importScripts(_$_e64c[0]);importScripts(_$_e64c[1]);var imageWorkerHandlerObj=null;self[_$_e64c[2]]= self[_$_e64c[3]]|| self[_$_e64c[2]];self[_$_e64c[31]](_$_e64c[4],function(_0x24CB3){var _0x24CA7=_0x24CB3[_$_e64c[5]];var _0x24CBF=_0x24CA7[_$_e64c[6]];if(_0x24CBF=== _$_e64c[7]){Logger[_$_e64c[9]](_0x24CA7[_$_e64c[8]]);Logger[_$_e64c[11]](_0x24CA7[_$_e64c[10]]);Logger[_$_e64c[13]](_0x24CA7[_$_e64c[12]]);Logger[_$_e64c[17]](_$_e64c[14]+ _0x24CA7[_$_e64c[16]][_$_e64c[15]]);imageWorkerHandlerObj=  new ImageWorkerHandler(_0x24CA7[_$_e64c[16]],_0x24CA7[_$_e64c[18]],_0x24CA7[_$_e64c[19]],_0x24CA7[_$_e64c[20]],_0x24CA7[_$_e64c[21]])}else {if(_0x24CBF=== _$_e64c[22]){if(imageWorkerHandlerObj!== null){imageWorkerHandlerObj[_$_e64c[23]]()}else {Logger[_$_e64c[25]](_$_e64c[24])}}else {if(_0x24CBF=== _$_e64c[26]){var _0x24C9B=deleteImageFile(_0x24CA7[_$_e64c[27]],_0x24CA7[_$_e64c[28]]);self[_$_e64c[30]]({resType:_$_e64c[29],fileDeleted:_0x24C9B})}}}},false);function deleteImageFile(_0x24CBF,_0x24CCB){var _0x24C9B=false;var _0x24CA7=false;try{var _0x24CD7=requestFileSystemSync(PERSISTENT,_0x24CCB);var _0x24CB3=_0x24CD7[_$_e64c[33]][_$_e64c[32]](_0x24CBF,{create:false});_0x24CB3[_$_e64c[34]]();_0x24C9B= true;Logger[_$_e64c[17]](_$_e64c[35])}catch(e){_0x24CA7= true;Logger[_$_e64c[38]](_$_e64c[36]+ e[_$_e64c[37]]())};if(_0x24CA7=== false&& _0x24C9B=== false){Logger[_$_e64c[17]](_$_e64c[39])};return _0x24C9B}var ImageWorkerHandler=function(_0x24C9B,_0x24CCB,_0x24CB3,_0x24CBF,_0x24CA7){this[_$_e64c[40]]= _0x24C9B;this[_$_e64c[41]]= null;this[_$_e64c[42]]= null;this[_$_e64c[43]]= null;this[_$_e64c[44]]= null;this[_$_e64c[33]]= null;this[_$_e64c[45]]= false;this[_$_e64c[46]]= _0x24CCB;this[_$_e64c[47]]= _0x24CB3;this[_$_e64c[48]]= _0x24CBF;this[_$_e64c[49]]= false;this[_$_e64c[50]]= Date[_$_e64c[51]]();this[_$_e64c[52]]= null;this[_$_e64c[53]]= 0;this[_$_e64c[21]]= _0x24CA7;this[_$_e64c[54]]=  -1;this[_$_e64c[55]]= null;try{this[_$_e64c[56]]()}catch(e){Logger[_$_e64c[25]](_$_e64c[57]+ e[_$_e64c[37]]());this[_$_e64c[58]](e[_$_e64c[37]]())}};ImageWorkerHandler[_$_e64c[59]][_$_e64c[56]]= function(){this[_$_e64c[41]]=  new ISO9660Config();this[_$_e64c[42]]= null;this[_$_e64c[43]]=  new JolietConfig();this[_$_e64c[41]][_$_e64c[60]](false);this[_$_e64c[41]][_$_e64c[61]](1);this[_$_e64c[33]]=  new ISO9660RootDirectory();if(this[_$_e64c[40]][_$_e64c[15]]=== 1&& this[_$_e64c[40]][0][_$_e64c[62]]){this[_$_e64c[33]][_$_e64c[64]](this[_$_e64c[40]][0][_$_e64c[63]])}else {this[_$_e64c[33]][_$_e64c[65]](this[_$_e64c[40]])};Logger[_$_e64c[38]](_$_e64c[66]+ this[_$_e64c[47]]);this[_$_e64c[67]](0);this[_$_e64c[44]]=  new ISOImageFileHandler(this,this[_$_e64c[46]],this[_$_e64c[47]],this[_$_e64c[48]],this[_$_e64c[21]]);this[_$_e64c[52]]=  new createISO(this[_$_e64c[44]],this[_$_e64c[33]],this);this[_$_e64c[52]][_$_e64c[68]](this[_$_e64c[41]],this[_$_e64c[42]],this[_$_e64c[43]])};ImageWorkerHandler[_$_e64c[59]][_$_e64c[67]]= function(_0x24CB3){if(this[_$_e64c[54]]!== _0x24CB3&& _0x24CB3> this[_$_e64c[54]]){if(_0x24CB3!== 100&& this[_$_e64c[55]]!== null){var _0x24C9B=Date[_$_e64c[51]]();var _0x24CA7=_0x24C9B- this[_$_e64c[55]];if(_0x24CA7< 1000){return}};this[_$_e64c[54]]= _0x24CB3;this[_$_e64c[53]]= _0x24CB3;self[_$_e64c[30]]({resType:_$_e64c[53],progress:_0x24CB3});this[_$_e64c[55]]= Date[_$_e64c[51]]()}};ImageWorkerHandler[_$_e64c[59]][_$_e64c[58]]= function(_0x24C9B){self[_$_e64c[30]]({resType:_$_e64c[69],errorMsg:_0x24C9B})};ImageWorkerHandler[_$_e64c[59]][_$_e64c[70]]= function(){this[_$_e64c[52]][_$_e64c[70]]()};ImageWorkerHandler[_$_e64c[59]][_$_e64c[23]]= function(){var _0x24C9B=this[_$_e64c[44]][_$_e64c[71]]();var _0x24CA7=this[_$_e64c[44]][_$_e64c[72]]();self[_$_e64c[30]]({resType:_$_e64c[73],isoDataURL:_0x24C9B,size:_0x24CA7})};ImageWorkerHandler[_$_e64c[59]][_$_e64c[74]]= function(_0x24CA7,_0x24C9B){self[_$_e64c[30]]({resType:_$_e64c[75],fileData:_0x24C9B,position:_0x24CA7})};ImageWorkerHandler[_$_e64c[59]][_$_e64c[76]]= function(){this[_$_e64c[49]]= true;Logger[_$_e64c[38]](_$_e64c[77]+ (Date[_$_e64c[51]]()- this[_$_e64c[50]]));this[_$_e64c[67]](100);self[_$_e64c[30]]({resType:_$_e64c[78],status:0})};var Logger= new function(){this[_$_e64c[10]]= false;this[_$_e64c[12]]= 1;this[_$_e64c[8]]= _$_e64c[79];this[_$_e64c[9]]= function(_0x24C9B){this[_$_e64c[8]]= _0x24C9B};this[_$_e64c[11]]= function(_0x24C9B){self[_$_e64c[10]]= _0x24C9B;self[_$_e64c[12]]= 1};this[_$_e64c[13]]= function(_0x24C9B){self[_$_e64c[12]]= _0x24C9B};this[_$_e64c[17]]= function(_0x24CA7){if(self[_$_e64c[10]]=== true&& self[_$_e64c[12]]>= 1){var _0x24CB3= new Date();var _0x24C9B=_0x24CB3[_$_e64c[80]]()+ 1+ _$_e64c[81]+ _0x24CB3[_$_e64c[82]]()+ _$_e64c[81]+ _0x24CB3[_$_e64c[83]]();_0x24C9B+= _$_e64c[84]+ _0x24CB3[_$_e64c[85]]()+ _$_e64c[86]+ _0x24CB3[_$_e64c[87]]()+ _$_e64c[86]+ _0x24CB3[_$_e64c[88]]()+ _$_e64c[86]+ _0x24CB3[_$_e64c[89]]();console[_$_e64c[91]](_0x24C9B+ _$_e64c[90]+ this[_$_e64c[8]]+ _$_e64c[84]+ _0x24CA7);_0x24CB3= null}};this[_$_e64c[25]]= function(_0x24CA7){if(self[_$_e64c[10]]=== true){var _0x24CB3= new Date();var _0x24C9B=_0x24CB3[_$_e64c[80]]()+ 1+ _$_e64c[81]+ _0x24CB3[_$_e64c[82]]()+ _$_e64c[81]+ _0x24CB3[_$_e64c[83]]();_0x24C9B+= _$_e64c[84]+ _0x24CB3[_$_e64c[85]]()+ _$_e64c[86]+ _0x24CB3[_$_e64c[87]]()+ _$_e64c[86]+ _0x24CB3[_$_e64c[88]]()+ _$_e64c[86]+ _0x24CB3[_$_e64c[89]]();console[_$_e64c[91]](_0x24C9B+ _$_e64c[90]+ this[_$_e64c[8]]+ _$_e64c[84]+ _0x24CA7);_0x24CB3= null}};this[_$_e64c[38]]= function(_0x24CA7){if(self[_$_e64c[10]]=== true&& self[_$_e64c[12]]>= 2){var _0x24CB3= new Date();var _0x24C9B=_0x24CB3[_$_e64c[80]]()+ 1+ _$_e64c[81]+ _0x24CB3[_$_e64c[82]]()+ _$_e64c[81]+ _0x24CB3[_$_e64c[83]]();_0x24C9B+= _$_e64c[84]+ _0x24CB3[_$_e64c[85]]()+ _$_e64c[86]+ _0x24CB3[_$_e64c[87]]()+ _$_e64c[86]+ _0x24CB3[_$_e64c[88]]()+ _$_e64c[86]+ _0x24CB3[_$_e64c[89]]();console[_$_e64c[91]](_0x24C9B+ _$_e64c[90]+ this[_$_e64c[8]]+ _$_e64c[84]+ _0x24CA7);_0x24CB3= null}};this[_$_e64c[92]]= function(_0x24CB3){if(self[_$_e64c[10]]=== true&& self[_$_e64c[12]]>= 1){var _0x24CBF= new Date();var _0x24C9B=_0x24CBF[_$_e64c[80]]()+ 1+ _$_e64c[81]+ _0x24CBF[_$_e64c[82]]()+ _$_e64c[81]+ _0x24CBF[_$_e64c[83]]();_0x24C9B+= _$_e64c[84]+ _0x24CBF[_$_e64c[85]]()+ _$_e64c[86]+ _0x24CBF[_$_e64c[87]]()+ _$_e64c[86]+ _0x24CBF[_$_e64c[88]]()+ _$_e64c[86]+ _0x24CBF[_$_e64c[89]]();var _0x24CCB=_$_e64c[93];var _0x24CD7=_$_e64c[93];for(var _0x24CA7=0;_0x24CA7< _0x24CB3[_$_e64c[15]];_0x24CA7++){_0x24CCB+= _$_e64c[84];_0x24CD7= _0x24CB3[_0x24CA7][_$_e64c[37]](16);if(_0x24CD7[_$_e64c[15]]< 2){_0x24CD7= _$_e64c[94]+ _0x24CD7};_0x24CCB+= _0x24CD7};console[_$_e64c[91]](_0x24C9B+ _$_e64c[90]+ this[_$_e64c[8]]+ _$_e64c[84]+ _0x24CCB);_0x24CBF= null}}}