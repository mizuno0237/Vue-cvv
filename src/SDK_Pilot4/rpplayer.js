/*! Copyright ©2020 Avocent Corporation and its affiliates.
*  All Rights Reserved.
*/
/**
 * RPPlayer for DVR Playback
 */
/**
 * @copyright &copy;2020 Avocent Corporation and its affiliates.  All Rights Reserved.
 * @description The RPPlayer constructs a Remote Presence Player (RPPlayer) instance.
 * @param {rppAPIErrorCallback} callbackError API Error callback to report any issue in RPPlayer APIs.
 * @public
 * @namespace RPPlayer
 * @export  RPPlayer
 * @constructor
 * @since 1.4.0
 */
var _$_1e41=["Green","Yellow","black","sans-serif","1.10.27","Invalid apiErrorCallback specified during Instantiation of RPPlayer.","logDebug","Invalid apiErrorCallback. Player session exiting.","initialized","RPPlayer","MULTIPLE_INSTANCE_NOT_ALLOWED","RPP_API_ERROR","RPP_SPEED_FACTOR","RPP_STATUS","RPP_VIDEO_STOPPED_REASON","isOffscreenCanvasSupport","setRPViewer offscreenCanvasSupport::","getViewerMediaRecorder","isRecordingInProgress","Live session is in recording. You can\'t play the file now.","logInfo","getCanvasId","stopInputSupport","stopWorker","getViewerScriptPath","dvrworker.js","getVideoResponseHandler","setFile","set File..","LIVE_SESSION_IS_IN_RECORDING","close","postMessage","closeSessionForPlayer","CLOSING","size","readHeader","setRPEmbeddedViewerSize","setRPMaintainAspectRatio","setRPVideoStoppedBackgroundColor","setRPVideoStoppedMessageColor","setRPMessageFont","setRPAspectRatioBackgroundColor","registerRPVideoStoppedCallback","registerRPFullScreenCallbacks","setInitForPlayer","setLiveMode","startSession","setRPPlayer","playpause","playPause m_bPlayback::"," m_bPause::"," m_bAPIHasError:: "," m_FileError:: ","start from beigining....","pause","PLAYING","PAUSED","playPause","FILE_NOT_ACCESSIBLE_OR_READING_ERROR","FILE_NOT_SET","Stop DVR session:","gotobegin","goToBeginning","goback","goBack","goToTime","INVALID_PARAMETER_TYPE","gototime","speedFactor::","setSpeed","number","isInt","isNullorEmpty","PARAMETER_IS_NULL_OR_EMPTY","REGULAR","FORWARD_10X","FORWARD_20X","FORWARD_30X","FORWARD_60X","goForward::m_xFactor::","goforward","getElementById","setPlayerCanvas","background","style","setPlayerDebugMode","boolean","setDebugMode","setEmbeddedPlayerSize","setPlayerAspectRatioBackgroundColor","isValidColor","setPlayerMaintainAspectRatio","setPlayerVideoStoppedBackgroundColor","setPlayerVideoStoppedMessageColor","setPlayerVideoStoppedMessageFont","_fontName","_fontSize","goToEnd","ALREADY_REACHED_END_OF_FILE","gotoend","setPlayerDragDropSupportCanvas ","setPlayerDragDropSupportCanvas","showRPFullScreen","registerRPPlayerFileInfoCallback","isFunction","CALLBACK_FUNCTION_NOT_EXIST","registerRPPlayerFrameUpdateTimeCallback","registerRPPlayerVideoStoppedCallback","registerRPPlayerFullScreenCallbacks","width","height","this","rpViewerAPIErrorCallback::functionName::"," errorCode::","message","data","reqType","log","DVR Worker:","logMsg","invalidheader","fileHeaderError","fileError","ERROR_ON_FILE_READING","header","platformID","startTime","duration","name","DVCColorDepth","getActiveDecoderWorker","getCommonWorker","getDVCWorker","colorDepth","colorMode","isDVC23xColor","BLOCKDVC","BLOCK DVC compression...","getRVASWorker","frameStartTime","recStartTime","FONTMSG","eof","speedFactor","absTime","skipPacket","fontTableA","fontTableB","noCharSets","buffer","NOSIGNAL","STOPTHREAD","getASTWorker","reasonCode","addlInfo","hRes","vRes","updateVideoStoppedMessage","COLORPALETTE","colorPalette","timeDelay","video","videoData","RVAS","binaryData","DVC","true","AST","addEventListener","round","nextPacket","END_OF_FILE_REACHED","notifyWorkerLoadError...","notifyWorkerLoadError","INVALID_PLAYBACK_FILE","stopPropagation","preventDefault","dropEffect","dataTransfer","copy","items","length","kind","file","getAsFile","webkitGetAsEntry","isFile","handlePlaybackFile..... file[0].name = ","handlePlaybackFile..... is not a file..","not a valid file entry...","more than one entry...","files","notifyError","FEATURE_NOT_SUPPORTED_BY_BROWSER","not a valid data transfer item...","loadDragDropListeners...","dragenter","dragover","dragleave","drop","removeDragDropListeners...","removeEventListener","setRPViewer","getPlaybackCurrentTime","getPlaybackOffset","isPlayerRunning","showPlayerFullScreen","getRPPlayerVersion","closePlayerSession","stop","registerRPPlayerStatusInfoCallback","isPlayerSessionAvailable","notifyPlayerStopped"];function RPPlayer(_0x24CB3){var _0x25097={};var _0x24F17;var _0x24F47;var _0x24F53;var _0x24F23=null;var _0x24F0B=-1;var _0x24EFF=null;var _0x24FBF=0;var _0x24E93=0;var _0x24F8F=0;var _0x24E4B=false;var _0x24E3F=true;var _0x24EC3=false;var _0x24F2F=false;var _0x24F83=false;var _0x24EF3=false;var _0x24F3B=null;var _0x24F5F=0;var _0x24E7B=null;var _0x24E87=null;var _0x24E6F=null;var _0x24E57=null;var _0x24E63=null;var _0x24FA7=_$_1e41[0];var _0x24FB3=_$_1e41[1];var _0x24E27=_$_1e41[2];var _0x24ECF=_$_1e41[3];var _0x24EDB=16;var _0x24EE7=true;var _0x24EB7=false;var _0x24F6B=false;var _0x24F77=0;var _0x24F9B=_$_1e41[4];var _0x24E9F=false;var _0x24EAB=false;var _0x250C7=null;var _0x24D1F=null;var _0x2504F=null;var _0x24CE3=null;var _0x24CCB=null;var _0x24CA7=null;var _0x251AB=null;var _0x24CEF=null;var _0x24CFB=null;var _0x24D07=null;var _0x24D13=null;var _0x24D2B=null;var _0x24D37=null;var _0x24C9B=_0x24CB3;var _0x24E33=false;var _0x24E0F=0;var _0x24E1B=null;if(!_0x24C9B){Logger[_$_1e41[6]](_$_1e41[5]);alert(_$_1e41[7]);return};if(RPPlayer[_$_1e41[8]]=== true){_0x250DF(_$_1e41[9],RPPlayer[_$_1e41[11]][_$_1e41[10]]);return};RPPlayer[_$_1e41[11]]= {"INVALID_CANVAS_ID":501,"PARAMETER_IS_NULL_OR_EMPTY":502,"INVALID_PARAMETER_TYPE":503,"CALLBACK_FUNCTION_NOT_EXIST":504,"INVALID_PLAYBACK_FILE":505,"FILE_NOT_SET":506,"FILE_NOT_ACCESSIBLE_OR_READING_ERROR":507,"MULTIPLE_INSTANCE_NOT_ALLOWED":508,"ALREADY_REACHED_END_OF_FILE":509,"LIVE_SESSION_IS_IN_RECORDING":510,"FEATURE_NOT_SUPPORTED_BY_BROWSER":511};RPPlayer[_$_1e41[12]]= {"REGULAR":0,"FORWARD_10X":10,"FORWARD_20X":20,"FORWARD_30X":30,"FORWARD_60X":60};RPPlayer[_$_1e41[13]]= {"PLAYING":0,"PLAYING_FORWARD_10X":1,"PLAYING_FORWARD_20X":2,"PLAYING_FORWARD_30X":3,"PLAYING_FORWARD_60X":4,"PAUSED":5,"END_OF_FILE_REACHED":6,"ERROR_ON_FILE_READING":7,"CLOSING":8};RPPlayer[_$_1e41[14]]= {"VIDEO_NO_SIGNAL":0,"VIDEO_OUT_OF_RANGE":1,"VIDEO_RESOLUTION_NOT_SUPPORTED":2,"VIDEO_CAPTURE_FAILED":2,"VIDEO_PERMISSION_DENIED":4,"VIDEO_CALIBRATING":5,"VIDEO_BLOCKED":6,"VIDEO_STOPPED":7};RPPlayer[_$_1e41[8]]= false;function _0x24DC7(){_0x24F17= null;_0x24F47= null;_0x24F53= 0;_0x24D1F= null;_0x2504F= null;_0x24CE3= null;_0x24CCB= null;_0x24CA7= null;_0x251AB= null;_0x24F0B=  -1;_0x24E4B= false;_0x24E3F= true;_0x24EFF= null;_0x24FBF= 0;_0x24E33= false;_0x24EC3= false;_0x24EB7= false;_0x24F5F= 0;_0x24E93= 0;_0x24F8F= 0;_0x24F23= null}function _0x2505B(_0x24CB3,_0x24CA7,_0x24C9B){}function _0x2516F(_0x24C9B){if(_0x24C9B){_0x250C7= _0x24C9B;_0x24EF3= _0x250C7[_$_1e41[15]]();Logger[_$_1e41[6]](_$_1e41[16]+ _0x24EF3);if(_0x24D1F=== null&& _0x250C7!== null){if(_0x250C7!== null&& _0x250C7[_$_1e41[17]]()&& _0x250C7[_$_1e41[17]]()[_$_1e41[18]]()){Logger[_$_1e41[20]](_$_1e41[19])}else {_0x24E7B= _0x250C7[_$_1e41[21]]();_0x250C7[_$_1e41[22]]();_0x250C7[_$_1e41[23]]();_0x24D1F=  new Worker(_0x250C7[_$_1e41[24]]()+ _$_1e41[25]);_0x251AB= _0x250C7[_$_1e41[26]]();_0x24DF7();_0x24E03()}}}}function _0x250F7(_0x24C9B){var _0x24CA7=_$_1e41[27];Logger[_$_1e41[6]](_$_1e41[28]);if(_0x250C7!== null&& _0x250C7[_$_1e41[17]]()&& _0x250C7[_$_1e41[17]]()[_$_1e41[18]]()){_0x250DF(_0x24CA7,RPPlayer[_$_1e41[11]][_$_1e41[29]]);return};_0x24E4B= false;_0x24F2F= false;if(_0x24D1F!== null){_0x24D1F[_$_1e41[31]]({reqType:_$_1e41[30]})};if(_0x24F83&& _0x250C7!== null){_0x250C7[_$_1e41[32]]();_0x250C7= null}else {if(_0x250C7!== null){_0x250C7[_$_1e41[23]]()}};if(_0x24E4B&& _0x24D07!== null){_0x24D07(RPPlayer[_$_1e41[13]][_$_1e41[33]],_0x24E7B)};_0x24DC7();_0x24F17= _0x24C9B;if(_0x24F17&& _0x24F17[_$_1e41[34]]< 48){_0x25103(_0x24CA7);return}else {_0x24DD3();_0x24D1F[_$_1e41[31]]({reqType:_$_1e41[35],file:_0x24F17})}}function _0x24DD3(){if(_0x250C7=== null){_0x24F83= true;_0x250C7=  new RPViewer(_0x24E7B,_0x250BB)};_0x250C7[_$_1e41[36]](_0x24E87,_0x24E6F);_0x250C7[_$_1e41[37]](_0x24EE7);_0x250C7[_$_1e41[38]](_0x24FA7);_0x250C7[_$_1e41[39]](_0x24FB3);_0x250C7[_$_1e41[40]](_0x24ECF,_0x24EDB);_0x250C7[_$_1e41[41]](_0x24E27);if(_0x24D13!== null){_0x250C7[_$_1e41[42]](_0x24D13)};if(_0x24D2B!== null|| _0x24D37!== null){_0x250C7[_$_1e41[43]](_0x24D2B,_0x24D37)};_0x2516F(_0x250C7);_0x250C7[_$_1e41[44]]()}function _0x25193(){if(_0x24F17&& _0x24F17[_$_1e41[34]]> 48&& _0x250C7!== null){_0x24E93= 0;_0x24F8F= 0;_0x250C7[_$_1e41[45]](false);_0x24E4B= true;_0x24F2F= true;_0x24EFF= null;_0x24D1F[_$_1e41[31]]({reqType:_$_1e41[46]});_0x250C7[_$_1e41[47]](_0x25097)}else {if(_0x24F17=== null){_0x25103(_$_1e41[48])}}}function _0x24FEF(){Logger[_$_1e41[6]](_$_1e41[49]+ _0x24E4B+ _$_1e41[50]+ _0x24E3F+ _$_1e41[51]+ _0x24E33+ _$_1e41[52]+ _0x24EC3);if(_0x24E4B=== false|| _0x24EB7){Logger[_$_1e41[6]](_$_1e41[53]);_0x24EB7= false;_0x25193()};if(_0x24E33){return};if(_0x24E4B&& _0x24EC3=== false){_0x24D1F[_$_1e41[31]]({reqType:_$_1e41[54],bPause:!_0x24E3F});if(_0x24E3F){_0x24E3F= false;_0x24F2F= true;if(_0x24D07!== null){_0x24D07(RPPlayer[_$_1e41[13]][_$_1e41[55]],_0x24E7B)}}else {_0x24E3F= true;_0x24F2F= false;if(_0x24D07!== null){_0x24D07(RPPlayer[_$_1e41[13]][_$_1e41[56]],_0x24E7B)}}}else {if(_0x24EC3){_0x24FCB(_$_1e41[57],RPPlayer[_$_1e41[11]][_$_1e41[58]])}else {_0x24FCB(_$_1e41[57],RPPlayer[_$_1e41[11]][_$_1e41[59]])}}}function _0x2519F(){if(_0x24E4B){Logger[_$_1e41[6]](_$_1e41[60]);_0x24E4B= false;_0x24F2F= false};if(_0x24D1F!== null){_0x24D1F[_$_1e41[31]]({reqType:_$_1e41[30]})}}function _0x24D73(){if(_0x24E4B=== false&& _0x24EB7){Logger[_$_1e41[6]](_$_1e41[53]);_0x24EB7= false;_0x24F2F= true;_0x24E4B= true;_0x24E3F= false;if(_0x24D07!== null){_0x24D07(RPPlayer[_$_1e41[13]][_$_1e41[55]],_0x24E7B)}};if(_0x24E4B&& _0x24EC3=== false){if(_0x24E3F){_0x24F6B= true};_0x24EFF= null;_0x24E93= 0;_0x24F8F= 0;_0x24FBF= 0;_0x24D1F[_$_1e41[31]]({reqType:_$_1e41[61]})}else {if(_0x24EC3){_0x24FCB(_$_1e41[62],RPPlayer[_$_1e41[11]][_$_1e41[58]])}else {_0x24FCB(_$_1e41[62],RPPlayer[_$_1e41[11]][_$_1e41[59]])}}}function _0x24D67(){if(_0x24E4B=== false&& _0x24EB7){_0x24EB7= false;_0x24E4B= true;_0x24E3F= false;_0x24F2F= true;if(_0x24D07!== null){_0x24D07(RPPlayer[_$_1e41[13]][_$_1e41[55]],_0x24E7B)}};if(_0x24E4B&& _0x24EC3=== false){if(_0x24E3F){_0x24F6B= true};_0x24FBF= 0;_0x24D1F[_$_1e41[31]]({reqType:_$_1e41[63]})}else {if(_0x24EC3){_0x24FCB(_$_1e41[64],RPPlayer[_$_1e41[11]][_$_1e41[58]])}else {_0x24FCB(_$_1e41[64],RPPlayer[_$_1e41[11]][_$_1e41[59]])}}}function _0x24D8B(_0x24C9B){if(_0x24C9B< 0|| _0x24C9B> _0x24F53){_0x24FCB(_$_1e41[65],RPPlayer[_$_1e41[11]][_$_1e41[66]]);return};if(_0x24E4B=== false&& _0x24EB7){_0x24EB7= false;_0x24E4B= true;_0x24E3F= false;if(_0x24F2F=== false){_0x24F2F= true;if(_0x24D07!== null){_0x24D07(RPPlayer[_$_1e41[13]][_$_1e41[55]],_0x24E7B)}}};if(_0x24E4B&& _0x24EC3=== false){_0x24F5F= parseInt(_0x24C9B,10);_0x24D1F[_$_1e41[31]]({reqType:_$_1e41[67],time:_0x24F5F})}else {if(_0x24EC3){_0x24FCB(_$_1e41[65],RPPlayer[_$_1e41[11]][_$_1e41[58]])}else {_0x24FCB(_$_1e41[65],RPPlayer[_$_1e41[11]][_$_1e41[59]])}}}function _0x2517B(_0x24CA7){Logger[_$_1e41[6]](_$_1e41[68]+ _0x24CA7);var _0x24C9B=_$_1e41[69];if(_0x24E4B=== false){_0x24FCB(_$_1e41[69],RPPlayer[_$_1e41[11]][_$_1e41[59]]);return};if(_0x24EC3){_0x24FCB(_$_1e41[69],RPPlayer[_$_1e41[11]][_$_1e41[58]])};if(( typeof _0x24CA7!== _$_1e41[70])&&  !Util[_$_1e41[71]](_0x24CA7)){_0x250DF(_0x24C9B,RPPlayer[_$_1e41[11]][_$_1e41[66]]);return};if(Util[_$_1e41[72]](_0x24CA7)|| isNaN(parseInt(_0x24CA7,10))){_0x250DF(_0x24C9B,RPPlayer[_$_1e41[11]][_$_1e41[73]]);return};if(_0x24CA7!== RPPlayer[_$_1e41[12]][_$_1e41[74]]&& _0x24CA7!== RPPlayer[_$_1e41[12]][_$_1e41[75]]&& _0x24CA7!== RPPlayer[_$_1e41[12]][_$_1e41[76]]&& _0x24CA7!== RPPlayer[_$_1e41[12]][_$_1e41[77]]&& _0x24CA7!== RPPlayer[_$_1e41[12]][_$_1e41[78]]){_0x250DF(_0x24C9B,RPPlayer[_$_1e41[11]][_$_1e41[66]]);return};_0x24FBF= _0x24CA7/ 10;if(_0x24D07!== null){_0x24D07(_0x24CA7,_0x24E7B)};Logger[_$_1e41[6]](_$_1e41[79]+ _0x24FBF);_0x24D1F[_$_1e41[31]]({reqType:_$_1e41[80],xFactor:_0x24FBF})}function _0x2511B(_0x24C9B){_0x24E57= document[_$_1e41[81]](_0x24C9B);if(Util[_$_1e41[72]](_0x24E57)){_0x250DF(_$_1e41[82],RPPlayer[_$_1e41[11]][_$_1e41[73]]);return};_0x24E7B= _0x24C9B;if(_0x24E57){_0x24E63= _0x24E57[_$_1e41[84]][_$_1e41[83]]}}function _0x25127(_0x24C9B){var _0x24CA7=_$_1e41[85];if( typeof _0x24C9B!== _$_1e41[86]){_0x24FCB(_0x24CA7,RPPlayer[_$_1e41[11]][_$_1e41[66]]);return};_0x24E9F= _0x24C9B;Logger[_$_1e41[87]](_0x24E9F)}function _0x250EB(_0x24CB3,_0x24C9B){var _0x24CA7=_$_1e41[88];if(( typeof _0x24CB3!== _$_1e41[70])|| ( typeof _0x24C9B!== _$_1e41[70])){_0x24FCB(_0x24CA7,RPPlayer[_$_1e41[11]][_$_1e41[66]]);return};_0x24E87= _0x24CB3;_0x24E6F= _0x24C9B;if(_0x250C7!== null){_0x250C7[_$_1e41[36]](_0x24E87,_0x24E6F)}}function _0x2510F(_0x24C9B){var _0x24CA7=_$_1e41[89];if(Util[_$_1e41[72]](_0x24C9B)||  !Util[_$_1e41[90]](_0x24C9B)){_0x24FCB(_0x24CA7,RPPlayer[_$_1e41[11]][_$_1e41[66]]);return};if(_0x24E33=== false){_0x24E27= _0x24C9B}}function _0x2513F(_0x24C9B){var _0x24CA7=_$_1e41[91];if( typeof _0x24C9B!== _$_1e41[86]){_0x24FCB(_0x24CA7,RPPlayer[_$_1e41[11]][_$_1e41[66]]);return};_0x24EE7= _0x24C9B;if(_0x250C7!== null){_0x250C7[_$_1e41[37]](_0x24EE7)}}function _0x2514B(_0x24C9B){var _0x24CA7=_$_1e41[92];if(Util[_$_1e41[72]](_0x24C9B)||  !Util[_$_1e41[90]](_0x24C9B)){_0x24FCB(_0x24CA7,RPPlayer[_$_1e41[11]][_$_1e41[66]]);return};if(_0x24E33=== false){_0x24FA7= _0x24C9B}}function _0x25157(_0x24C9B){var _0x24CA7=_$_1e41[93];if(Util[_$_1e41[72]](_0x24C9B)||  !Util[_$_1e41[90]](_0x24C9B)){_0x24FCB(_0x24CA7,RPPlayer[_$_1e41[11]][_$_1e41[66]]);return};if(_0x24E33=== false){_0x24FB3= _0x24C9B}}function _0x25163(_0x24C9B,_0x24CA7){var _0x24CB3=_$_1e41[94];if(Util[_$_1e41[72]](_0x24C9B)){_0x24FCB(_0x24CB3+ _$_1e41[95],RPPlayer[_$_1e41[11]][_$_1e41[73]]);return};if(Util[_$_1e41[72]](_0x24CA7)|| (_0x24CA7<= 0)){_0x24FCB(_0x24CB3+ _$_1e41[96],RPPlayer[_$_1e41[11]][_$_1e41[73]]);return};if(_0x24E33=== false){_0x24ECF= _0x24C9B;_0x24EDB= _0x24CA7}}function _0x24D7F(){if(_0x24EB7){_0x24FCB(_$_1e41[97],RPPlayer[_$_1e41[11]][_$_1e41[98]])};if(_0x24E4B&& _0x24EC3=== false){if(_0x24E3F){_0x24E3F= false};_0x24D1F[_$_1e41[31]]({reqType:_$_1e41[99]})}else {if(_0x24EC3){_0x24FCB(_$_1e41[97],RPPlayer[_$_1e41[11]][_$_1e41[58]])}else {_0x24FCB(_$_1e41[97],RPPlayer[_$_1e41[11]][_$_1e41[59]])}}}function _0x25133(_0x24C9B){Logger[_$_1e41[6]](_$_1e41[100]+ _0x24C9B);if( typeof _0x24C9B!== _$_1e41[86]){_0x24FCB(_$_1e41[101],RPPlayer[_$_1e41[11]][_$_1e41[66]]);return};if(_0x24C9B){_0x24EAB= _0x24C9B;_0x24DF7()}else {if(_0x24EAB){_0x25037()};_0x24EAB= _0x24C9B}}function _0x24D43(){if(_0x24E4B&& _0x24EC3=== false){return _0x24EFF}else {return null}}function _0x24D4F(){if(_0x24F17!== null){return _0x24E93}else {return null}}function _0x25187(){if(_0x250C7!== null){return _0x250C7[_$_1e41[102]]()}else {return false}}function _0x24FFB(_0x24C9B){var _0x24CA7=_$_1e41[103];if(!Util[_$_1e41[104]](_0x24C9B)){_0x250DF(_0x24CA7,RPPlayer[_$_1e41[11]][_$_1e41[105]]);return};_0x24CEF= _0x24C9B}function _0x25067(_0x24CBF,_0x24CA7,_0x24CB3,_0x24C9B){}function _0x25007(_0x24C9B){var _0x24CA7=_$_1e41[106];if(!Util[_$_1e41[104]](_0x24C9B)){_0x250DF(_0x24CA7,RPPlayer[_$_1e41[11]][_$_1e41[105]]);return};_0x24CFB= _0x24C9B}function _0x25073(_0x24CB3,_0x24CA7,_0x24C9B){}function _0x2501F(_0x24C9B){_0x24D07= _0x24C9B}function _0x250A3(_0x24CA7,_0x24C9B){}function _0x2502B(_0x24C9B){var _0x24CA7=_$_1e41[107];if(!Util[_$_1e41[104]](_0x24C9B)){_0x250DF(_0x24CA7,RPPlayer[_$_1e41[11]][_$_1e41[105]]);return};if(_0x24E33=== false){_0x24D13= _0x24C9B}}function _0x250AF(_0x24CB3,_0x24CBF,_0x24CCB,_0x24CA7,_0x24C9B){}function _0x25013(_0x24CA7,_0x24CB3){var _0x24C9B=_$_1e41[108];if(!Util[_$_1e41[104]](_0x24CA7)||  !Util[_$_1e41[104]](_0x24CB3)){_0x250DF(_0x24C9B,RPPlayer[_$_1e41[11]][_$_1e41[105]]);return};if(_0x24E33=== false){_0x24D2B= _0x24CA7;_0x24D37= _0x24CB3}}function _0x2507F(_0x24C9B){}function _0x2508B(_0x24C9B){}function _0x24CBF(){RPPlayer[_$_1e41[8]]= false;if(_0x24D1F!== null){_0x24D1F[_$_1e41[31]]({reqType:_$_1e41[30]})};if(_0x24F83){if(_0x250C7!== null){_0x250C7[_$_1e41[32]]();_0x250C7= null}};if(_0x24D07!== null){_0x24D07(RPPlayer[_$_1e41[13]][_$_1e41[33]],_0x24E7B)};_0x24DC7();if(_0x24EF3=== false&& _0x24E57!== null&& _0x24F83){_0x24E57[_$_1e41[109]]= _0x24E57[_$_1e41[109]];_0x24E57[_$_1e41[109]]= _0x24E87;_0x24E57[_$_1e41[110]]= _0x24E6F;if(_0x24E63){_0x24E57[_$_1e41[84]][_$_1e41[83]]= _0x24E63}};self[_$_1e41[111]]= null}function _0x24DDF(){return _0x24F2F}function _0x24DEB(){return _0x24E4B}function _0x24D5B(){return _0x24F9B}function _0x250DF(_0x24CB3,_0x24CA7,_0x24C9B){if((_0x24E33=== false)&& (_0x24C9B!== false)){_0x24E33= true;_0x24E0F= _0x24CA7;_0x24E1B= _0x24CB3;_0x24FCB(_0x24CB3,_0x24CA7);return true};_0x24FCB(_0x24CB3,_0x24CA7);return false}function _0x24FCB(_0x24CB3,_0x24CA7){if(_0x24C9B!== null){_0x24C9B(_0x24CB3,_0x24CA7,_0x24E7B)}}function _0x250BB(_0x24CA7,_0x24C9B){alert(_$_1e41[112]+ _0x24CA7+ _$_1e41[113]+ _0x24C9B)}function _0x24E03(){if(_0x24D1F!== null){var _0x24C9B,_0x24CBF,_0x24CB3;_0x24D1F[_$_1e41[168]](_$_1e41[114],function(_0x24D13){var _0x24CD7=_0x24D13[_$_1e41[115]];var _0x24D1F=_0x24CD7[_$_1e41[116]];if(_0x24D1F=== _$_1e41[117]){Logger[_$_1e41[6]](_$_1e41[118]+ _0x24CD7[_$_1e41[119]])}else {if(_0x24D1F=== _$_1e41[120]){if(_0x24E4B){if(_0x24D07!== null){_0x24D07(RPPlayer[_$_1e41[13]][_$_1e41[56]],_0x24E7B);return}}else {_0x24E4B= false;_0x25103(_$_1e41[27]);return}}else {if(_0x24D1F=== _$_1e41[121]){_0x24EB7= true;_0x250D3(_0x24F53,_0x24EB7);_0x24F8F= 0;_0x24E93= 0;_0x24EFF= 0;_0x25103(_$_1e41[121]);return}else {if(_0x24D1F=== _$_1e41[122]){if(_0x24D07!== null&& _0x24EB7=== false){if(_0x24F53> 0&& (_0x24E93>= (_0x24F53- 30))){_0x24EB7= true;_0x250D3(_0x24F53,_0x24EB7);_0x24F8F= 0;_0x24E93= 0;_0x24EFF= 0;_0x24FD7();return};_0x24D07(RPPlayer[_$_1e41[13]][_$_1e41[123]],_0x24E7B)};return}else {if(_0x24D1F=== _$_1e41[124]){_0x24F0B= _0x24CD7[_$_1e41[125]];_0x24F47= _0x24CD7[_$_1e41[126]];_0x24F53= _0x24CD7[_$_1e41[127]];_0x24F23= _0x24F17[_$_1e41[128]];if(_0x24CEF!== null){_0x24CEF(_0x24F47,_0x24F53,_0x24F23,_0x24E7B)}}else {if(_0x24D1F=== _$_1e41[129]){if(_0x24CE3=== null&& _0x250C7[_$_1e41[130]]()!== null){_0x24CE3= _0x250C7[_$_1e41[130]]()};if(_0x24CCB=== null&& _0x24CE3=== null){_0x24CCB= _0x250C7[_$_1e41[131]]();if(_0x24CCB=== null){_0x24CE3= _0x250C7[_$_1e41[132]]()}};_0x24CB3= {reqType:_$_1e41[129],colorDepth:_0x24CD7[_$_1e41[133]],colorMode:_0x24CD7[_$_1e41[134]],isDVC23xColor:_0x24CD7[_$_1e41[135]],dvrData:true};if(_0x24CCB!== null){_0x24CCB[_$_1e41[31]](_0x24CB3)}else {if(_0x24CE3!== null){_0x24CE3[_$_1e41[31]](_0x24CB3)}}}else {if(_0x24D1F=== _$_1e41[136]){Logger[_$_1e41[6]](_$_1e41[137]);if(_0x2504F=== null&& _0x250C7[_$_1e41[130]]()!== null){_0x2504F= _0x250C7[_$_1e41[130]]()};if(_0x24CCB=== null&& _0x2504F=== null){_0x24CCB= _0x250C7[_$_1e41[131]]();if(_0x24CCB=== null){_0x2504F= _0x250C7[_$_1e41[138]]()}};_0x24CB3= {reqType:_$_1e41[136]};if(_0x24CCB!== null){_0x24CCB[_$_1e41[31]](_0x24CB3)}else {if(_0x2504F!== null){_0x2504F[_$_1e41[31]](_0x24CB3)}}}else {if(_0x24D1F=== _$_1e41[139]){if(_0x24EFF=== 0){_0x24EFF= _0x24CD7[_$_1e41[140]]};if(_0x24CFB!== null){_0x24CFB(_0x24CD7[_$_1e41[140]],_0x24CD7[_$_1e41[139]],_0x24E7B)}}else {if(_0x24D1F=== _$_1e41[141]){_0x24EB7= _0x24CD7[_$_1e41[142]];_0x24FBF= _0x24CD7[_$_1e41[143]];_0x24C9B= _0x24CD7[_$_1e41[144]];_0x24CBF= _0x24CD7[_$_1e41[145]];if(_0x2504F=== null&& _0x250C7[_$_1e41[130]]()!== null){_0x2504F= _0x250C7[_$_1e41[130]]()};if(_0x24CCB=== null&& _0x2504F=== null){_0x24CCB= _0x250C7[_$_1e41[131]]();if(_0x24CCB=== null){_0x2504F= _0x250C7[_$_1e41[138]]()}};_0x24CB3= {reqType:_$_1e41[141],'fontTableA':_0x24CD7[_$_1e41[146]],'fontTableB':_0x24CD7[_$_1e41[147]],'noCharSets':_0x24CD7[_$_1e41[148]]};if(_0x24CCB!== null){if(_0x24CB3[_$_1e41[146]]!== null&& _0x24CB3[_$_1e41[147]]!== null){_0x24CCB[_$_1e41[31]](_0x24CB3,[_0x24CB3[_$_1e41[146]][_$_1e41[149]]],[_0x24CB3[_$_1e41[147]][_$_1e41[149]]])}else {if(_0x24CB3[_$_1e41[146]]!== null){_0x24CCB[_$_1e41[31]](_0x24CB3,[_0x24CB3[_$_1e41[146]][_$_1e41[149]]])}else {if(_0x24CB3[_$_1e41[147]]!== null){_0x24CCB[_$_1e41[31]](_0x24CB3,[_0x24CB3[_$_1e41[147]][_$_1e41[149]]])}else {_0x24CCB[_$_1e41[31]](_0x24CB3)}}}}else {if(_0x2504F!== null){if(_0x24CB3[_$_1e41[146]]!== null&& _0x24CB3[_$_1e41[147]]!== null){_0x2504F[_$_1e41[31]](_0x24CB3,[_0x24CB3[_$_1e41[146]][_$_1e41[149]]],[_0x24CB3[_$_1e41[147]][_$_1e41[149]]])}else {if(_0x24CB3[_$_1e41[146]]!== null){_0x2504F[_$_1e41[31]](_0x24CB3,[_0x24CB3[_$_1e41[146]][_$_1e41[149]]])}else {if(_0x24CB3[_$_1e41[147]]!== null){_0x2504F[_$_1e41[31]](_0x24CB3,[_0x24CB3[_$_1e41[147]][_$_1e41[149]]])}else {_0x2504F[_$_1e41[31]](_0x24CB3)}}}}};_0x250D3(_0x24C9B,_0x24EB7);if(_0x24E4B&& _0x24E3F=== false&& _0x24EB7=== false){_0x25043()}}else {if(_0x24D1F=== _$_1e41[150]){_0x24EB7= _0x24CD7[_$_1e41[142]];_0x24FBF= _0x24CD7[_$_1e41[143]];_0x24C9B= _0x24CD7[_$_1e41[144]];_0x24CBF= _0x24CD7[_$_1e41[145]];if(_0x2504F!== null){_0x2504F[_$_1e41[31]]({'reqType':_$_1e41[151]})};if(_0x24F0B=== 3){if(_0x24CCB=== null&& _0x2504F=== null){_0x24CCB= _0x250C7[_$_1e41[131]]();if(_0x24CCB=== null){_0x2504F= _0x250C7[_$_1e41[138]]()}}}else {if(_0x24F0B=== 2){if(_0x24CCB=== null&& _0x24CA7=== null){_0x24CCB= _0x250C7[_$_1e41[131]]();if(_0x24CCB=== null){_0x24CA7= _0x250C7[_$_1e41[152]]()}}}else {if(_0x24CCB=== null&& _0x24CE3=== null){_0x24CCB= _0x250C7[_$_1e41[131]]();if(_0x24CCB=== null){_0x24CE3= _0x250C7[_$_1e41[132]]()}}}};if(_0x250C7!== null){_0x250C7[_$_1e41[157]](_0x24CD7[_$_1e41[153]],_0x24CD7[_$_1e41[154]],_0x24CD7[_$_1e41[155]],_0x24CD7[_$_1e41[156]],_0x24CD7[_$_1e41[133]])};_0x250D3(_0x24C9B,_0x24EB7);if(_0x24E4B&& _0x24E3F=== false&& _0x24EB7=== false){_0x25043()}}else {if(_0x24D1F=== _$_1e41[158]){_0x24EB7= _0x24CD7[_$_1e41[142]];_0x24FBF= _0x24CD7[_$_1e41[143]];_0x24C9B= _0x24CD7[_$_1e41[144]];_0x24CBF= _0x24CD7[_$_1e41[145]];if(_0x2504F=== null&& _0x250C7[_$_1e41[130]]()!== null){_0x2504F= _0x250C7[_$_1e41[130]]()};if(_0x24CCB=== null&& _0x2504F=== null){_0x24CCB= _0x250C7[_$_1e41[131]]();if(_0x24CCB=== null){_0x2504F= _0x250C7[_$_1e41[138]]()}};_0x24CB3= {reqType:_$_1e41[158],colorPalette:_0x24CD7[_$_1e41[159]],speedFactor:_0x24FBF,eof:_0x24EB7,skipPacket:_0x24CBF};if(_0x24CCB!== null){_0x24CCB[_$_1e41[31]](_0x24CB3,[_0x24CB3[_$_1e41[159]][_$_1e41[149]]])}else {if(_0x2504F!== null){_0x2504F[_$_1e41[31]](_0x24CB3,[_0x24CB3[_$_1e41[159]][_$_1e41[149]]])}};_0x250D3(_0x24C9B,_0x24EB7);if(_0x24E4B&& _0x24E3F=== false&& _0x24EB7=== false){_0x25043()}}else {if(_0x24D1F=== _$_1e41[160]){if(_0x24E3F=== false){_0x24C9B= _0x24CD7[_$_1e41[144]];_0x24EB7= _0x24CD7[_$_1e41[142]];if(_0x24E4B&& _0x24E3F=== false){_0x250D3(_0x24C9B,_0x24EB7)}}}else {if(_0x24D1F=== _$_1e41[161]){var _0x24D2B=_0x24CD7[_$_1e41[162]];_0x24EB7= _0x24CD7[_$_1e41[142]];_0x24FBF= _0x24CD7[_$_1e41[143]];if(_0x24F0B=== 3){if(_0x24CCB=== null&& _0x2504F=== null){_0x24CCB= _0x250C7[_$_1e41[131]]();if(_0x24CCB=== null){_0x2504F= _0x250C7[_$_1e41[138]]()}};_0x24C9B= _0x24CD7[_$_1e41[144]];_0x24CBF= _0x24CD7[_$_1e41[145]];_0x24CB3= {reqType:_$_1e41[163],binaryData:_0x24D2B,dvrData:true,speedFactor:_0x24FBF,eof:_0x24EB7,skipPacket:_0x24CBF};if(_0x24CCB!== null){_0x24CCB[_$_1e41[31]](_0x24CB3,[_0x24CB3[_$_1e41[164]][_$_1e41[149]]])}else {if(_0x2504F!== null){_0x2504F[_$_1e41[31]](_0x24CB3,[_0x24CB3[_$_1e41[164]][_$_1e41[149]]])}};_0x250D3(_0x24C9B,_0x24EB7)}else {if(_0x24F0B=== 1){if(_0x24CCB=== null&& _0x24CE3=== null){_0x24CCB= _0x250C7[_$_1e41[131]]();if(_0x24CCB=== null){_0x24CE3= _0x250C7[_$_1e41[132]]()}};_0x24C9B= _0x24CD7[_$_1e41[144]];_0x24CBF= _0x24CD7[_$_1e41[145]];_0x24CB3= {reqType:_$_1e41[165],transSupport:_$_1e41[166],binaryData:_0x24D2B,dvrData:true,speedFactor:_0x24FBF,eof:_0x24EB7,skipPacket:_0x24CBF};if(_0x24CCB!== null){_0x24CCB[_$_1e41[31]](_0x24CB3,[_0x24CB3[_$_1e41[164]][_$_1e41[149]]])}else {if(_0x24CE3!== null){_0x24CE3[_$_1e41[31]](_0x24CB3,[_0x24CB3[_$_1e41[164]][_$_1e41[149]]])}};_0x250D3(_0x24C9B,_0x24EB7)}else {if(_0x24F0B=== 2){if(_0x24CCB=== null&& _0x24CA7=== null){_0x24CCB= _0x250C7[_$_1e41[131]]();if(_0x24CCB=== null){_0x24CA7= _0x250C7[_$_1e41[152]]()}};_0x24C9B= _0x24CD7[_$_1e41[144]];_0x24CBF= _0x24CD7[_$_1e41[145]];_0x24CB3= {reqType:_$_1e41[167],binaryData:_0x24D2B,dvrData:true,speedFactor:_0x24FBF,eof:_0x24EB7,skipPacket:_0x24CBF};if(_0x24CCB!== null){_0x24CCB[_$_1e41[31]](_0x24CB3,[_0x24CB3[_$_1e41[164]][_$_1e41[149]]])}else {if(_0x24CA7!== null){_0x24CA7[_$_1e41[31]](_0x24CB3,[_0x24CB3[_$_1e41[164]][_$_1e41[149]]])}};_0x250D3(_0x24C9B,_0x24EB7)}}};if(_0x24E4B&& _0x24E3F=== false&& _0x24EB7=== false){_0x25043()}else {if(_0x24E3F&& _0x24F6B&& _0x24EB7=== false){_0x24F77++;_0x25043();if(_0x24F77> 20){_0x24F6B= false;_0x24F77= 0}}}}}}}}}}}}}}}}})}}function _0x250D3(_0x24C9B,_0x24CA7){if(_0x24EFF!== _0x24C9B){if(_0x24EFF!== null){_0x24F8F+= Math[_$_1e41[169]]((_0x24C9B- _0x24EFF)/ 1000);if(_0x24F8F< 0){_0x24F8F= 0;_0x24E93= _0x24F8F;_0x24EFF= _0x24C9B;return};if(_0x24F5F> 0&& _0x24F8F<= _0x24F5F){_0x24E93= _0x24F5F;if(_0x24F8F=== _0x24F5F){_0x24F5F= 0}}else {_0x24E93= _0x24F8F}}else {if(_0x24CA7=== false){_0x24E93= 0}};if(_0x24CA7|| (_0x24E93> _0x24F53)){_0x24E93= _0x24F53};_0x24EFF= _0x24C9B}}function _0x25043(){_0x24D1F[_$_1e41[31]]({reqType:_$_1e41[170]})}function _0x24FD7(){if(_0x24EB7){_0x24E93= _0x24F53;_0x24E3F= true;_0x24F2F= false;_0x24E4B= false;if(_0x24D07!== null){_0x24D07(RPPlayer[_$_1e41[13]][_$_1e41[171]],_0x24E7B)}}}function _0x24FE3(){Logger[_$_1e41[6]](_$_1e41[172]);if(_0x24F83){if(_0x250C7!== null){_0x250C7[_$_1e41[32]]();_0x250C7= null}};_0x24FCB(_$_1e41[173],RPPlayer[_$_1e41[11]][_$_1e41[174]])}function _0x25103(_0x24C9B){if(_0x24F83){if(_0x250C7!== null){_0x250C7[_$_1e41[32]]();_0x250C7= null};_0x24DF7()};_0x250DF(_0x24C9B,RPPlayer[_$_1e41[11]][_$_1e41[174]])}function _0x24D97(_0x24C9B){_0x24C9B[_$_1e41[175]]();_0x24C9B[_$_1e41[176]]()}function _0x24DA3(_0x24C9B){_0x24C9B[_$_1e41[175]]();_0x24C9B[_$_1e41[176]]()}function _0x24DAF(_0x24C9B){_0x24C9B[_$_1e41[175]]();_0x24C9B[_$_1e41[176]]();if(_0x24EAB){_0x24C9B[_$_1e41[178]][_$_1e41[177]]= _$_1e41[179];return}}function _0x24DBB(_0x24CA7){_0x24CA7[_$_1e41[175]]();_0x24CA7[_$_1e41[176]]();if(_0x24CA7[_$_1e41[178]][_$_1e41[180]]){if(_0x24CA7[_$_1e41[178]][_$_1e41[180]][_$_1e41[181]]=== 1){if(_0x24CA7[_$_1e41[178]][_$_1e41[180]][0][_$_1e41[182]]=== _$_1e41[183]){const _0x24CB3=_0x24CA7[_$_1e41[178]][_$_1e41[180]][0][_$_1e41[184]]();const _0x24C9B=_0x24CA7[_$_1e41[178]][_$_1e41[180]][0][_$_1e41[185]]();if(_0x24C9B[_$_1e41[186]]){Logger[_$_1e41[6]](_$_1e41[187]+ _0x24CB3[_$_1e41[128]],_0x24CB3,_0x24CA7[_$_1e41[178]][_$_1e41[180]][0]);_0x250F7(_0x24CB3);_0x24FEF();return}else {Logger[_$_1e41[6]](_$_1e41[188]);_0x24FCB(_$_1e41[173],RPPlayer[_$_1e41[11]][_$_1e41[174]])}}else {Logger[_$_1e41[6]](_$_1e41[189]);_0x24FCB(_$_1e41[173],RPPlayer[_$_1e41[11]][_$_1e41[174]])}}else {Logger[_$_1e41[6]](_$_1e41[190],_0x24CA7[_$_1e41[178]][_$_1e41[180]],_0x24CA7[_$_1e41[178]][_$_1e41[191]]);if(_0x24CA7[_$_1e41[178]][_$_1e41[180]][_$_1e41[181]]=== 0){_0x24FCB(_$_1e41[192],RPPlayer[_$_1e41[11]][_$_1e41[193]])}else {_0x24FCB(_$_1e41[192],RPPlayer[_$_1e41[11]][_$_1e41[174]])}}}else {Logger[_$_1e41[6]](_$_1e41[194]);_0x24FCB(_$_1e41[173],RPPlayer[_$_1e41[11]][_$_1e41[174]])}}function _0x24DF7(){if(_0x24EAB&& _0x24E7B!== null){Logger[_$_1e41[6]](_$_1e41[195]);var _0x24C9B=document[_$_1e41[81]](_0x24E7B);_0x24C9B[_$_1e41[168]](_$_1e41[196],_0x24D97,false);_0x24C9B[_$_1e41[168]](_$_1e41[197],_0x24DAF,false);_0x24C9B[_$_1e41[168]](_$_1e41[198],_0x24DA3,false);_0x24C9B[_$_1e41[168]](_$_1e41[199],_0x24DBB,false)}}function _0x25037(){if(_0x24E7B!== null){Logger[_$_1e41[6]](_$_1e41[200]);var _0x24C9B=document[_$_1e41[81]](_0x24E7B);_0x24C9B[_$_1e41[201]](_$_1e41[196],_0x24D97,false);_0x24C9B[_$_1e41[201]](_$_1e41[197],_0x24DAF,false);_0x24C9B[_$_1e41[201]](_$_1e41[198],_0x24DA3,false);_0x24C9B[_$_1e41[201]](_$_1e41[199],_0x24DBB,false)}}function _0x24CD7(){_0x25097[_$_1e41[202]]= _0x2516F;_0x25097[_$_1e41[27]]= _0x250F7;_0x25097[_$_1e41[69]]= _0x2517B;_0x25097[_$_1e41[82]]= _0x2511B;_0x25097[_$_1e41[88]]= _0x250EB;_0x25097[_$_1e41[91]]= _0x2513F;_0x25097[_$_1e41[89]]= _0x2510F;_0x25097[_$_1e41[92]]= _0x2514B;_0x25097[_$_1e41[93]]= _0x25157;_0x25097[_$_1e41[94]]= _0x25163;_0x25097[_$_1e41[85]]= _0x25127;_0x25097[_$_1e41[101]]= _0x25133;_0x25097[_$_1e41[57]]= _0x24FEF;_0x25097[_$_1e41[62]]= _0x24D73;_0x25097[_$_1e41[64]]= _0x24D67;_0x25097[_$_1e41[65]]= _0x24D8B;_0x25097[_$_1e41[97]]= _0x24D7F;_0x25097[_$_1e41[203]]= _0x24D43;_0x25097[_$_1e41[204]]= _0x24D4F;_0x25097[_$_1e41[205]]= _0x24DDF;_0x25097[_$_1e41[206]]= _0x25187;_0x25097[_$_1e41[207]]= _0x24D5B;_0x25097[_$_1e41[208]]= _0x24CBF;_0x25097[_$_1e41[209]]= _0x2519F;_0x25097[_$_1e41[103]]= _0x24FFB;_0x25097[_$_1e41[106]]= _0x25007;_0x25097[_$_1e41[210]]= _0x2501F;_0x25097[_$_1e41[107]]= _0x2502B;_0x25097[_$_1e41[108]]= _0x25013;_0x25097[_$_1e41[211]]= _0x24DEB;_0x25097[_$_1e41[212]]= _0x24FD7;_0x25097[_$_1e41[173]]= _0x24FE3;return _0x25097}RPPlayer[_$_1e41[8]]= true;return _0x24CD7()}