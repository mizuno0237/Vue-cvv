/*! Copyright ©2020 Avocent Corporation and its affiliates.
*  All Rights Reserved.
*
*/
var _$_4511=["message","data","reqType","SPLIT_DATA","bChunk","uiFrameUpdateInterval","vidoackTotCount","DVC","dvcsubworker.js","error","workerError","postMessage","addEventListener","transSupport","true","binaryData","videoPackCount","eof","skipUpdate","decode","buffer","DVCColorDepth","colorDepth","colorMode","dvrData","isDVC23xColor","BLOCKDVC","rlesubworker.js","RVAS","speedFactor","skipPacket","videoacks","IMAGEDATA","imgData","COLORPALETTE","colorPalette","FONTMSG","fontTableA","fontTableB","noCharSets","AST","astsubworker.js","close","terminate","STOPTHREAD","resType","resolution","x_resolution","y_resolution","dvcvideo","videodata","packetCount","encodedByteCount","decodedByteCount","IMAGEDATAPART1","imgDataPart1","IMAGEDATAPART2","imgDataPart2","IMAGEDATAPART3","imgDataPart3","IMAGEDATAPART4","imgDataPart4","IMAGEDATAPART5","imgDataPart5","IMAGEDATAPART6","imgDataPart6","IMAGEDATAPART7","imgDataPart7","IMAGEDATAPART8","imgDataPart8","arrayLength","videoack","count","log","logMsg","playbackEnd","outofmemory","errMsg","rvasvideo","rvasIMAGEDATA","rvasIMAGEDATA1","rvasIMAGEDATA2","rvasIMAGEDATA3","rvasIMAGEDATA4","rvasIMAGEDATA5","rvasIMAGEDATA6","rvasIMAGEDATA7","rvasIMAGEDATA8","cursorLoc","cursorX","cursorY","cursor","cursorData","refresh","astvideo","astcursorLoc","xOffset","yOffset","astcursor","width","height","ignoreAlpha","astvideoCodec","compressionMode","ySelector","uvSelector","getTime"];var baData=null;var videoData;var x_resolution=0;var y_resolution=0;var transferableSupported=false;var dvcDecoderWorker=null;var rleDecoderWorker=null;var astDecoderWorker=null;var dvcColorDepth=15;var dvcColorMode=true;var videoackTotalCount=0;var prevUIUpdateTime=null;var bResolutionHasUpdated=false;var dvrData=false;var dvrSpeedFactor=false;var endOfFile=false;var bSkipVideoUpdate=false;var bDVRPlayerEnabled=false;var bUpdateUIWithChunkData=true;var uiUpdateInterval=30;self[_$_4511[12]](_$_4511[0],function(_0x24CCB){var _0x24CBF=_0x24CCB[_$_4511[1]];var _0x24D13=_0x24CBF[_$_4511[2]];var _0x24D07,_0x24D1F;if(_0x24D13=== _$_4511[3]){bUpdateUIWithChunkData= _0x24CBF[_$_4511[4]];uiUpdateInterval= _0x24CBF[_$_4511[5]];videoackTotalCount= _0x24CBF[_$_4511[6]]}else {if(_0x24D13=== _$_4511[7]){if(dvcDecoderWorker=== null){dvcDecoderWorker=  new Worker(_$_4511[8]);dvcDecoderWorker[_$_4511[12]](_$_4511[9],function(_0x24C9B){self[_$_4511[11]]({'resType':_$_4511[10],'workerName':_$_4511[8]})},false);addDVCDecoderWorkerListener();dvcDecoderWorker[_$_4511[11]]({'reqType':_$_4511[3],'bChunk':bUpdateUIWithChunkData,'uiFrameUpdateInterval':uiUpdateInterval,'vidoackTotCount':videoackTotalCount})};_0x24D1F= _0x24CBF[_$_4511[13]];if(_0x24CBF[_$_4511[13]]=== _$_4511[14]){transferableSupported= true};baData= _0x24CBF[_$_4511[15]];var _0x24D37=_0x24CBF[_$_4511[16]];var _0x24CA7=false;if(bDVRPlayerEnabled){_0x24CA7= _0x24CBF[_$_4511[17]];bSkipVideoUpdate= _0x24CBF[_$_4511[18]]};if(transferableSupported){_0x24D07= {reqType:_$_4511[19],binaryData:baData,videoPackCount:_0x24D37,eof:_0x24CA7,skipUpdate:bSkipVideoUpdate};dvcDecoderWorker[_$_4511[11]](_0x24D07,[_0x24D07[_$_4511[15]][_$_4511[20]]])}else {dvcDecoderWorker[_$_4511[11]]({'reqType':_$_4511[19],'binaryData':baData,'videoPackCount':_0x24D37,eof:_0x24CA7,skipUpdate:bSkipVideoUpdate})};baData= null}else {if(_0x24D13=== _$_4511[21]){dvcColorDepth= _0x24CBF[_$_4511[22]];dvcColorMode= _0x24CBF[_$_4511[23]];videoackTotalCount= _0x24CBF[_$_4511[6]];if(dvcDecoderWorker=== null){dvcDecoderWorker=  new Worker(_$_4511[8]);dvcDecoderWorker[_$_4511[12]](_$_4511[9],function(_0x24C9B){self[_$_4511[11]]({'resType':_$_4511[10],'workerName':_$_4511[8]})},false);addDVCDecoderWorkerListener()};var _0x24C9B=false;if(_0x24CBF[_$_4511[24]]){_0x24C9B= true;bDVRPlayerEnabled= true};dvcDecoderWorker[_$_4511[11]]({'reqType':_$_4511[21],'colorDepth':dvcColorDepth,'colorMode':dvcColorMode,'vidoackTotCount':videoackTotalCount,'dvrData':_0x24C9B,isDVC23xColor:_0x24CBF[_$_4511[25]]})}else {if(_0x24D13=== _$_4511[26]){if(rleDecoderWorker=== null){rleDecoderWorker=  new Worker(_$_4511[27]);rleDecoderWorker[_$_4511[12]](_$_4511[9],function(_0x24C9B){self[_$_4511[11]]({'resType':_$_4511[10],'workerName':_$_4511[27]})},false);addRLEDecoderWorkerListener();rleDecoderWorker[_$_4511[11]]({'reqType':_$_4511[3],'bChunk':bUpdateUIWithChunkData,'uiFrameUpdateInterval':uiUpdateInterval,'vidoackTotCount':videoackTotalCount})};_0x24D07= {reqType:_$_4511[26],bChunk:bUpdateUIWithChunkData};rleDecoderWorker[_$_4511[11]](_0x24D07)}else {if(_0x24D13=== _$_4511[28]){_0x24D1F= _0x24CBF[_$_4511[13]];if(_0x24D1F=== _$_4511[14]){transferableSupported= true};if(rleDecoderWorker=== null){rleDecoderWorker=  new Worker(_$_4511[27]);rleDecoderWorker[_$_4511[12]](_$_4511[9],function(_0x24C9B){self[_$_4511[11]]({'resType':_$_4511[10],'workerName':_$_4511[27]})},false);addRLEDecoderWorkerListener();rleDecoderWorker[_$_4511[11]]({'reqType':_$_4511[3],'bChunk':bUpdateUIWithChunkData,'uiFrameUpdateInterval':uiUpdateInterval,'vidoackTotCount':videoackTotalCount})};_0x24D1F= _0x24CBF[_$_4511[13]];if(_0x24D1F=== _$_4511[14]){transferableSupported= true};var _0x24D2B=0;if(_0x24CBF[_$_4511[24]]){dvrData= _0x24CBF[_$_4511[24]];dvrSpeedFactor= _0x24CBF[_$_4511[29]];endOfFile= _0x24CBF[_$_4511[17]];bSkipVideoUpdate= _0x24CBF[_$_4511[30]]}else {_0x24D2B= _0x24CBF[_$_4511[31]]};baData= _0x24CBF[_$_4511[15]];if(transferableSupported){_0x24D07= {reqType:_$_4511[19],binaryData:baData,dvrData:dvrData,speedFactor:dvrSpeedFactor,eof:endOfFile,skipPacket:bSkipVideoUpdate,videoacks:_0x24D2B};rleDecoderWorker[_$_4511[11]](_0x24D07,[_0x24D07[_$_4511[15]][_$_4511[20]]])}else {rleDecoderWorker[_$_4511[11]]({'reqType':_$_4511[19],'binaryData':baData,'dvrData':dvrData,'speedFactor':dvrSpeedFactor,'eof':endOfFile,'skipPacket':bSkipVideoUpdate,'videoacks':_0x24D2B})}}else {if(_0x24D13=== _$_4511[32]){try{var _0x24CEF=_0x24CBF[_$_4511[33]];_0x24D07= {reqType:_$_4511[32],imgData:_0x24CEF};if(dvcDecoderWorker!== null){dvcDecoderWorker[_$_4511[11]](_0x24D07)}else {if(rleDecoderWorker!== null){rleDecoderWorker[_$_4511[11]](_0x24D07)}else {if(astDecoderWorker!== null){astDecoderWorker[_$_4511[11]](_0x24D07)}}};_0x24CEF= null;bResolutionHasUpdated= true}catch(evt){}}else {if(_0x24D13=== _$_4511[34]){if(rleDecoderWorker=== null){rleDecoderWorker=  new Worker(_$_4511[27]);rleDecoderWorker[_$_4511[12]](_$_4511[9],function(_0x24C9B){self[_$_4511[11]]({'resType':_$_4511[10],'workerName':_$_4511[27]})},false);addRLEDecoderWorkerListener();rleDecoderWorker[_$_4511[11]]({'reqType':_$_4511[3],'bChunk':bUpdateUIWithChunkData,'uiFrameUpdateInterval':uiUpdateInterval,'vidoackTotCount':videoackTotalCount})};var _0x24D2B=0;if(bDVRPlayerEnabled=== false){_0x24D2B= _0x24CBF[_$_4511[31]]};var _0x24CB3=_0x24CBF[_$_4511[35]];if(transferableSupported){_0x24D07= {reqType:_$_4511[34],colorPalette:_0x24CB3,videoacks:_0x24D2B};rleDecoderWorker[_$_4511[11]](_0x24D07,[_0x24D07[_$_4511[35]][_$_4511[20]]])}else {rleDecoderWorker[_$_4511[11]]({'reqType':_$_4511[34],'colorPalette':_0x24CB3,videoacks:_0x24D2B})}}else {if(_0x24D13=== _$_4511[36]){if(rleDecoderWorker=== null){rleDecoderWorker=  new Worker(_$_4511[27]);rleDecoderWorker[_$_4511[12]](_$_4511[9],function(_0x24C9B){self[_$_4511[11]]({'resType':_$_4511[10],'workerName':_$_4511[27]})},false);addRLEDecoderWorkerListener();rleDecoderWorker[_$_4511[11]]({'reqType':_$_4511[3],'bChunk':bUpdateUIWithChunkData,'uiFrameUpdateInterval':uiUpdateInterval,'vidoackTotCount':videoackTotalCount})};var _0x24D2B=0;if(bDVRPlayerEnabled=== false){_0x24D2B= _0x24CBF[_$_4511[31]]};var _0x24CD7=_0x24CBF[_$_4511[37]];var _0x24CE3=_0x24CBF[_$_4511[38]];var _0x24CFB=_0x24CBF[_$_4511[39]];if(transferableSupported){_0x24D07= {reqType:_$_4511[36],'fontTableA':_0x24CD7,'fontTableB':_0x24CE3,'noCharSets':_0x24CFB,videoacks:_0x24D2B};if(_0x24CD7!== null&& _0x24CE3!== null){rleDecoderWorker[_$_4511[11]](_0x24D07,[_0x24D07[_$_4511[37]][_$_4511[20]]],[_0x24D07[_$_4511[38]][_$_4511[20]]])}else {if(_0x24CD7!== null&& _0x24CE3=== null){rleDecoderWorker[_$_4511[11]](_0x24D07,[_0x24D07[_$_4511[37]][_$_4511[20]]],null)}else {if(_0x24CD7=== null&& _0x24CE3!== null){rleDecoderWorker[_$_4511[11]](_0x24D07,null,[_0x24D07[_$_4511[38]][_$_4511[20]]])}else {rleDecoderWorker[_$_4511[11]](_0x24D07,null,null)}}}}else {rleDecoderWorker[_$_4511[11]]({'reqType':_$_4511[36],'fontTableA':_0x24CD7,'fontTableB':_0x24CE3,'noCharSets':_0x24CFB,videoacks:_0x24D2B})}}else {if(_0x24D13=== _$_4511[40]){if(astDecoderWorker=== null){astDecoderWorker=  new Worker(_$_4511[41]);astDecoderWorker[_$_4511[12]](_$_4511[9],function(_0x24C9B){self[_$_4511[11]]({'resType':_$_4511[10],'workerName':_$_4511[41]})},false);addASTDecoderWorkerListener();astDecoderWorker[_$_4511[11]]({'reqType':_$_4511[3],'bChunk':bUpdateUIWithChunkData,'uiFrameUpdateInterval':uiUpdateInterval,'vidoackTotCount':videoackTotalCount})};_0x24D1F= _0x24CBF[_$_4511[13]];if(_0x24D1F=== _$_4511[14]){transferableSupported= true};baData= _0x24CBF[_$_4511[15]];var _0x24D37=_0x24CBF[_$_4511[16]];if(_0x24CBF[_$_4511[24]]&& bDVRPlayerEnabled=== false){bDVRPlayerEnabled= true};var _0x24CA7=false;if(bDVRPlayerEnabled){_0x24CA7= _0x24CBF[_$_4511[17]];bSkipVideoUpdate= _0x24CBF[_$_4511[18]]};if(transferableSupported){_0x24D07= {reqType:_$_4511[19],binaryData:baData,videoPackCount:_0x24D37,dvrData:bDVRPlayerEnabled,eof:_0x24CA7,skipUpdate:bSkipVideoUpdate};astDecoderWorker[_$_4511[11]](_0x24D07,[_0x24D07[_$_4511[15]][_$_4511[20]]])}else {astDecoderWorker[_$_4511[11]]({'reqType':_$_4511[19],'binaryData':baData,'videoPackCount':_0x24D37,dvrData:bDVRPlayerEnabled,eof:_0x24CA7,skipUpdate:bSkipVideoUpdate})}}else {if(_0x24D13=== _$_4511[42]){if(dvcDecoderWorker!== null){dvcDecoderWorker[_$_4511[43]]()}else {if(rleDecoderWorker!== null){rleDecoderWorker[_$_4511[43]]()}else {if(astDecoderWorker!== null){astDecoderWorker[_$_4511[43]]()}}};this[_$_4511[42]]()}else {if(_0x24D13=== _$_4511[44]){if(rleDecoderWorker!== null){rleDecoderWorker[_$_4511[11]]({'reqType':_$_4511[44]})}}}}}}}}}}}}},false);function addDVCDecoderWorkerListener(){dvcDecoderWorker[_$_4511[12]](_$_4511[0],function(_0x24CB3){var _0x24CA7=_0x24CB3[_$_4511[1]];var _0x24CBF=_0x24CA7[_$_4511[45]];if(_0x24CBF=== _$_4511[46]){var _0x24CCB=_0x24CA7[_$_4511[47]];var _0x24CD7=_0x24CA7[_$_4511[48]];setResolution(_0x24CCB,_0x24CD7)}else {if(_0x24CBF=== _$_4511[49]){try{self[_$_4511[11]]({'resType':_$_4511[49],'videodata':_0x24CA7[_$_4511[50]],'colorDepth':_0x24CA7[_$_4511[22]],'packetCount':_0x24CA7[_$_4511[51]],'encodedByteCount':_0x24CA7[_$_4511[52]],'decodedByteCount':_0x24CA7[_$_4511[53]]})}catch(evt){}}else {if(_0x24CBF=== _$_4511[32]){try{self[_$_4511[11]]({'resType':_$_4511[32],'imgData':_0x24CA7[_$_4511[33]],'packetCount':_0x24CA7[_$_4511[51]],'encodedByteCount':_0x24CA7[_$_4511[52]],'decodedByteCount':_0x24CA7[_$_4511[53]]})}catch(evt){}}else {if(_0x24CBF=== _$_4511[54]){self[_$_4511[11]]({'resType':_$_4511[54],'imgDataPart1':_0x24CA7[_$_4511[55]]})}else {if(_0x24CBF=== _$_4511[56]){self[_$_4511[11]]({'resType':_$_4511[56],'imgDataPart2':_0x24CA7[_$_4511[57]]})}else {if(_0x24CBF=== _$_4511[58]){self[_$_4511[11]]({'resType':_$_4511[58],'imgDataPart3':_0x24CA7[_$_4511[59]]})}else {if(_0x24CBF=== _$_4511[60]){self[_$_4511[11]]({'resType':_$_4511[60],'imgDataPart4':_0x24CA7[_$_4511[61]]})}else {if(_0x24CBF=== _$_4511[62]){self[_$_4511[11]]({'resType':_$_4511[62],'imgDataPart5':_0x24CA7[_$_4511[63]]})}else {if(_0x24CBF=== _$_4511[64]){self[_$_4511[11]]({'resType':_$_4511[64],'imgDataPart6':_0x24CA7[_$_4511[65]]})}else {if(_0x24CBF=== _$_4511[66]){self[_$_4511[11]]({'resType':_$_4511[66],'imgDataPart7':_0x24CA7[_$_4511[67]]})}else {if(_0x24CBF=== _$_4511[68]){self[_$_4511[11]]({'resType':_$_4511[68],'imgDataPart8':_0x24CA7[_$_4511[69]],'arrayLength':_0x24CA7[_$_4511[70]],'packetCount':_0x24CA7[_$_4511[51]],'encodedByteCount':_0x24CA7[_$_4511[52]],'decodedByteCount':_0x24CA7[_$_4511[53]]})}else {if(_0x24CBF=== _$_4511[71]){var _0x24C9B=_0x24CA7[_$_4511[72]];self[_$_4511[11]]({'resType':_$_4511[71],'count':_0x24C9B})}else {if(_0x24CBF=== _$_4511[73]){dvcWorkerLog(_0x24CA7[_$_4511[74]])}else {if(_0x24CBF=== _$_4511[75]){self[_$_4511[11]]({'resType':_$_4511[75]})}else {if(_0x24CBF=== _$_4511[76]){self[_$_4511[11]]({'resType':_$_4511[76]})}else {if(_0x24CBF=== _$_4511[9]){self[_$_4511[11]]({'resType':_$_4511[9],'errMsg':_0x24CA7[_$_4511[77]]})}}}}}}}}}}}}}}}}},false)}function addRLEDecoderWorkerListener(){rleDecoderWorker[_$_4511[12]](_$_4511[0],function(_0x24CCB){var _0x24CB3=_0x24CCB[_$_4511[1]];var _0x24D13,_0x24D2B;var _0x24CFB=_0x24CB3[_$_4511[45]];if(_0x24CFB=== _$_4511[46]){var _0x24D07=_0x24CB3[_$_4511[47]];var _0x24D1F=_0x24CB3[_$_4511[48]];setResolution(_0x24D07,_0x24D1F)}else {if(_0x24CFB=== _$_4511[78]){try{self[_$_4511[11]]({'resType':_$_4511[78],'videodata':_0x24CB3[_$_4511[50]],'colorDepth':_0x24CB3[_$_4511[22]],'packetCount':_0x24CB3[_$_4511[51]],'encodedByteCount':_0x24CB3[_$_4511[52]],'decodedByteCount':_0x24CB3[_$_4511[53]]})}catch(evt){}}else {if(_0x24CFB=== _$_4511[79]){var _0x24CE3=_0x24CB3[_$_4511[33]];var _0x24CEF=_0x24CB3[_$_4511[51]];var _0x24CD7=_0x24CB3[_$_4511[52]];var _0x24CBF=_0x24CB3[_$_4511[53]];updateUI(_0x24CE3,_0x24CEF,_0x24CD7,_0x24CBF)}else {if(_0x24CFB=== _$_4511[80]){self[_$_4511[11]]({'resType':_$_4511[80],'imgDataPart1':_0x24CB3[_$_4511[55]]})}else {if(_0x24CFB=== _$_4511[81]){self[_$_4511[11]]({'resType':_$_4511[81],'imgDataPart2':_0x24CB3[_$_4511[57]]})}else {if(_0x24CFB=== _$_4511[82]){self[_$_4511[11]]({'resType':_$_4511[82],'imgDataPart3':_0x24CB3[_$_4511[59]]})}else {if(_0x24CFB=== _$_4511[83]){self[_$_4511[11]]({'resType':_$_4511[83],'imgDataPart4':_0x24CB3[_$_4511[61]]})}else {if(_0x24CFB=== _$_4511[84]){self[_$_4511[11]]({'resType':_$_4511[84],'imgDataPart5':_0x24CB3[_$_4511[63]]})}else {if(_0x24CFB=== _$_4511[85]){self[_$_4511[11]]({'resType':_$_4511[85],'imgDataPart6':_0x24CB3[_$_4511[65]]})}else {if(_0x24CFB=== _$_4511[86]){self[_$_4511[11]]({'resType':_$_4511[86],'imgDataPart7':_0x24CB3[_$_4511[67]]})}else {if(_0x24CFB=== _$_4511[87]){self[_$_4511[11]]({'resType':_$_4511[87],'imgDataPart8':_0x24CB3[_$_4511[69]],'arrayLength':_0x24CB3[_$_4511[70]],'packetCount':_0x24CB3[_$_4511[51]],'encodedByteCount':_0x24CB3[_$_4511[52]],'decodedByteCount':_0x24CB3[_$_4511[53]]})}else {if(_0x24CFB=== _$_4511[88]){_0x24D13= _0x24CB3[_$_4511[89]];_0x24D2B= _0x24CB3[_$_4511[90]];self[_$_4511[11]]({'resType':_$_4511[88],'cursorX':_0x24D13,'cursorY':_0x24D2B})}else {if(_0x24CFB=== _$_4511[91]){var _0x24CA7=_0x24CB3[_$_4511[92]];_0x24D13= _0x24CB3[_$_4511[89]];_0x24D2B= _0x24CB3[_$_4511[90]];self[_$_4511[11]]({'resType':_$_4511[91],'cursorData':_0x24CA7,'cursorX':_0x24D13,'cursorY':_0x24D2B})}else {if(_0x24CFB=== _$_4511[71]){var _0x24C9B=_0x24CB3[_$_4511[72]];self[_$_4511[11]]({'resType':_$_4511[71],'count':_0x24C9B})}else {if(_0x24CFB=== _$_4511[93]){self[_$_4511[11]]({'resType':_$_4511[93]})}else {if(_0x24CFB=== _$_4511[73]){dvcWorkerLog(_0x24CB3[_$_4511[74]])}else {if(_0x24CFB=== _$_4511[75]){self[_$_4511[11]]({'resType':_$_4511[75]})}else {if(_0x24CFB=== _$_4511[76]){self[_$_4511[11]]({'resType':_$_4511[76]})}else {if(_0x24CFB=== _$_4511[9]){self[_$_4511[11]]({'resType':_$_4511[9],'errMsg':_0x24CB3[_$_4511[77]]})}}}}}}}}}}}}}}}}}}}},false)}function addASTDecoderWorkerListener(){astDecoderWorker[_$_4511[12]](_$_4511[0],function(_0x24CB3){var _0x24CA7=_0x24CB3[_$_4511[1]];var _0x24CCB=_0x24CA7[_$_4511[45]];if(_0x24CCB=== _$_4511[46]){var _0x24CE3=_0x24CA7[_$_4511[47]];var _0x24CEF=_0x24CA7[_$_4511[48]];setResolution(_0x24CE3,_0x24CEF)}else {if(_0x24CCB=== _$_4511[94]){var _0x24CD7=_0x24CA7[_$_4511[50]];try{self[_$_4511[11]]({'resType':_$_4511[94],'videodata':_0x24CD7,'packetCount':_0x24CA7[_$_4511[51]],'encodedByteCount':_0x24CA7[_$_4511[52]],'decodedByteCount':_0x24CA7[_$_4511[53]]})}catch(evt){}}else {if(_0x24CCB=== _$_4511[32]){var _0x24CBF=_0x24CA7[_$_4511[33]];self[_$_4511[11]]({'resType':_$_4511[32],'imgData':_0x24CBF,'packetCount':_0x24CA7[_$_4511[51]],'encodedByteCount':_0x24CA7[_$_4511[52]],'decodedByteCount':_0x24CA7[_$_4511[53]]})}else {if(_0x24CCB=== _$_4511[54]){self[_$_4511[11]]({'resType':_$_4511[54],'imgDataPart1':_0x24CA7[_$_4511[55]]})}else {if(_0x24CCB=== _$_4511[56]){self[_$_4511[11]]({'resType':_$_4511[56],'imgDataPart2':_0x24CA7[_$_4511[57]]})}else {if(_0x24CCB=== _$_4511[58]){self[_$_4511[11]]({'resType':_$_4511[58],'imgDataPart3':_0x24CA7[_$_4511[59]]})}else {if(_0x24CCB=== _$_4511[60]){self[_$_4511[11]]({'resType':_$_4511[60],'imgDataPart4':_0x24CA7[_$_4511[61]]})}else {if(_0x24CCB=== _$_4511[62]){self[_$_4511[11]]({'resType':_$_4511[62],'imgDataPart5':_0x24CA7[_$_4511[63]]})}else {if(_0x24CCB=== _$_4511[64]){self[_$_4511[11]]({'resType':_$_4511[64],'imgDataPart6':_0x24CA7[_$_4511[65]]})}else {if(_0x24CCB=== _$_4511[66]){self[_$_4511[11]]({'resType':_$_4511[66],'imgDataPart7':_0x24CA7[_$_4511[67]]})}else {if(_0x24CCB=== _$_4511[68]){self[_$_4511[11]]({'resType':_$_4511[68],'imgDataPart8':_0x24CA7[_$_4511[69]],'arrayLength':_0x24CA7[_$_4511[70]],'packetCount':_0x24CA7[_$_4511[51]],'encodedByteCount':_0x24CA7[_$_4511[52]],'decodedByteCount':_0x24CA7[_$_4511[53]]})}else {if(_0x24CCB=== _$_4511[95]){self[_$_4511[11]]({'resType':_$_4511[95],'cursorX':_0x24CA7[_$_4511[89]],'cursorY':_0x24CA7[_$_4511[90]],'xOffset':_0x24CA7[_$_4511[96]],'yOffset':_0x24CA7[_$_4511[97]]})}else {if(_0x24CCB=== _$_4511[98]){self[_$_4511[11]]({'resType':_$_4511[98],'cursorData':_0x24CA7[_$_4511[92]],'width':_0x24CA7[_$_4511[99]],'height':_0x24CA7[_$_4511[100]],'cursorX':_0x24CA7[_$_4511[89]],'cursorY':_0x24CA7[_$_4511[90]],'xOffset':_0x24CA7[_$_4511[96]],'yOffset':_0x24CA7[_$_4511[97]],'ignoreAlpha':_0x24CA7[_$_4511[101]]})}else {if(_0x24CCB=== _$_4511[102]){self[_$_4511[11]]({'resType':_$_4511[102],'compressionMode':_0x24CA7[_$_4511[103]],'ySelector':_0x24CA7[_$_4511[104]],'uvSelector':_0x24CA7[_$_4511[105]]})}else {if(_0x24CCB=== _$_4511[71]){var _0x24C9B=_0x24CA7[_$_4511[72]];self[_$_4511[11]]({'resType':_$_4511[71],'count':_0x24C9B})}else {if(_0x24CCB=== _$_4511[73]){dvcWorkerLog(_0x24CA7[_$_4511[74]])}else {if(_0x24CCB=== _$_4511[75]){self[_$_4511[11]]({'resType':_$_4511[75]})}else {if(_0x24CCB=== _$_4511[76]){self[_$_4511[11]]({'resType':_$_4511[76]})}else {if(_0x24CCB=== _$_4511[9]){self[_$_4511[11]]({'resType':_$_4511[9],'errMsg':_0x24CA7[_$_4511[77]]})}}}}}}}}}}}}}}}}}}}},false)}function dvcWorkerLog(_0x24C9B){self[_$_4511[11]]({'resType':_$_4511[73],'logMsg':_0x24C9B})}function throwException(_0x24C9B){self[_$_4511[11]]({'resType':_$_4511[9],'errMsg':_0x24C9B})}function setResolution(_0x24CA7,_0x24C9B){x_resolution= _0x24CA7;y_resolution= _0x24C9B;self[_$_4511[11]]({'resType':_$_4511[46],'x_resolution':x_resolution,'y_resolution':y_resolution})}function updateUI(_0x24CD7,_0x24D4F,_0x24CCB,_0x24CBF){var _0x24CB3= new Date()[_$_4511[106]]();var _0x24D67=0;if(prevUIUpdateTime!== null){_0x24D67= (_0x24CB3- prevUIUpdateTime);if(_0x24D67< uiUpdateInterval){return}};prevUIUpdateTime= _0x24CB3;try{if(_0x24CD7!== null){self[_$_4511[11]]({'resType':_$_4511[79],'imgData':_0x24CD7,'packetCount':_0x24D4F,'encodedByteCount':_0x24CCB,'decodedByteCount':_0x24CBF})}}catch(evt){}}