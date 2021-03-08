/* MIT License:
*
* Copyright (c) 2010-2012, Joe Walnes
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/
/**
* This behaves like a WebSocket in every way, except if it fails to connect,
* or it gets disconnected, it will repeatedly poll until it succesfully connects
* again.
*
* It is API compatible, so when you have:
*   ws = new WebSocket('ws://....');
* you can replace with:
*   ws = new ReconnectingWebSocket('ws://....');
*
* The event stream will typically look like:
*  onconnecting
*  onopen
*  onmessage
*  onmessage
*  onclose // lost connection
*  onconnecting
*  onopen  // sometime later...
*  onmessage
*  onmessage
*  etc... 
*
* It is API compatible with the standard WebSocket API.
*
* Latest version: https://github.com/joewalnes/reconnecting-websocket/
* - Joe Walnes
*/
//Web socket for VMedia
/**
* 
* @param {type} ipAddress
* @param {type} port
* @param {type} viewerObject
* @param {type} bSecure
* @returns {AvctVMWebSocket}
*/
var _$_e063=["debug","reconnectInterval","timeoutInterval","loginSuccess","SOCK_CONNECTING","SOCK_OPEN","SOCK_CLOSING","SOCK_CLOSED","forcedClose","url","protocols","readyState","URL","binaryType","","mMediaWorkerObj","getServerPath","/","getQueryString","?","protocol.. "," url::","logDebug","onopen","VMedia web socket opened  binaryType::","arraybuffer","sendVMFirstMessage","onclose","isVMSecure","isReconnectSupport","VMedia notify socket exception for reconnect...","PRIMARY_SOCKET_EXCEPTION","notifySocketException","VMedia connection is closed....","notifyVMediaConnectionState","onconnecting","onmessage","getVMResponseHandler","data","handleResponse","onerror","timeoutInterval.. ","exception while creating new websocket ","possible security issue, switching to secure mode","ws:","wss:","replace","new URL","debugAll","AvctVMWebSocket","attempt-connect","getSessionStatus","connection-timeout","close","AvctVMWebSocket::onClose......."," self.readyState::"," forcedClose::"," Reason::","code","Certificate verification may failed.","setVMWebSocketException","Server error of unknown nature 1006: restarting","VMedia","call connect function again","Exception on connect..","exception at connect","sendData","send","INVALID_STATE_ERR  WS(2): Pausing to reconnect websocket","getState","stopReconnect","closeConnection","refresh"];function AvctVMWebSocket(_0x24D07,_0x24CBF,_0x24CA7,_0x24CFB){var _0x24D1F=_0x24D07;this[_$_e063[0]]= false;this[_$_e063[1]]= (_0x24CFB* 1000);this[_$_e063[2]]= (_0x24CFB* 1000);this[_$_e063[3]]= false;this[_$_e063[4]]= 0;this[_$_e063[5]]= 1;this[_$_e063[6]]= 2;this[_$_e063[7]]= 3;var _0x24CD7=this;var _0x24D13;this[_$_e063[8]]= false;var _0x24CEF=false;this[_$_e063[9]]= _0x24D07;this[_$_e063[10]]= _0x24CBF;this[_$_e063[11]]= this[_$_e063[4]];this[_$_e063[12]]= _0x24D07;this[_$_e063[13]]= _$_e063[14];this[_$_e063[15]]= _0x24CA7;var _0x24CB3=_0x24CD7[_$_e063[15]][_$_e063[16]]();var _0x24CE3=_0x24CB3?_0x24CB3+ _$_e063[17]:_$_e063[14];_0x24D07+= _0x24CE3;var _0x24CCB=_0x24CD7[_$_e063[15]][_$_e063[18]]();if(_0x24CCB!== null){_0x24D07+= _$_e063[19]+ _0x24CCB};Logger[_$_e063[22]](_$_e063[20]+ _0x24CBF+ _$_e063[21]+ _0x24D07);this[_$_e063[23]]= function(_0x24C9B){Logger[_$_e063[22]](_$_e063[24]+ _0x24D13[_$_e063[13]]);_0x24D13[_$_e063[13]]= _$_e063[25];if(_0x24CD7[_$_e063[15]]!== null){_0x24CD7[_$_e063[15]][_$_e063[26]]()}};this[_$_e063[27]]= function(_0x24C9B){if(_0x24CD7[_$_e063[15]]!== null){if(_0x24CD7[_$_e063[8]]=== false&& _0x24CD7[_$_e063[3]]&& _0x24CD7[_$_e063[15]][_$_e063[28]]()&& _0x24CD7[_$_e063[15]][_$_e063[29]]()){Logger[_$_e063[22]](_$_e063[30]);_0x24CD7[_$_e063[15]][_$_e063[32]](APCPPacket[_$_e063[31]])}else {Logger[_$_e063[22]](_$_e063[33]);_0x24CD7[_$_e063[15]][_$_e063[34]](_0x24CD7[_$_e063[7]])}}};this[_$_e063[35]]= function(_0x24C9B){};this[_$_e063[36]]= function(_0x24C9B){if((_0x24CD7[_$_e063[15]]!== null)&& (_0x24CD7[_$_e063[15]][_$_e063[37]]()!== null)){_0x24CD7[_$_e063[15]][_$_e063[37]]()[_$_e063[39]](_0x24C9B[_$_e063[38]])}};this[_$_e063[40]]= function(_0x24C9B){};function _0x24C9B(_0x24CB3){Logger[_$_e063[22]](_$_e063[41]+ _0x24CD7[_$_e063[2]]+ _$_e063[21]+ _0x24D07);try{try{_0x24D13=  new WebSocket(_0x24D07,_0x24CBF)}catch(e){Logger[_$_e063[22]](_$_e063[42]+ e);Logger[_$_e063[22]](_$_e063[43]);_0x24D07= _0x24D07[_$_e063[46]](_$_e063[44],_$_e063[45]);Logger[_$_e063[22]](_$_e063[47]+ _0x24D07);_0x24D13=  new WebSocket(_0x24D07,_0x24CBF)};_0x24CD7[_$_e063[35]]();if(_0x24CD7[_$_e063[0]]|| AvctVMWebSocket[_$_e063[48]]){Logger[_$_e063[22]](_$_e063[49]+ _$_e063[50]+ _0x24D07)};var _0x24CCB=null;if(_0x24CD7[_$_e063[15]]!== null&& _0x24CD7[_$_e063[15]][_$_e063[51]]()=== 2){var _0x24CA7=_0x24D13;var _0x24CCB=setTimeout(function(){if(_0x24CD7[_$_e063[0]]|| AvctVMWebSocket[_$_e063[48]]){Logger[_$_e063[22]](_$_e063[49]+ _$_e063[52]+ _0x24D07)};_0x24CEF= true;_0x24CA7[_$_e063[53]]();_0x24CEF= false},_0x24CD7[_$_e063[2]])};_0x24D13[_$_e063[23]]= function(_0x24C9B){if(_0x24CCB!== null){clearTimeout(_0x24CCB)};if(_0x24CD7[_$_e063[0]]|| AvctVMWebSocket[_$_e063[48]]){Logger[_$_e063[22]](_$_e063[49]+ _$_e063[23]+ _0x24D07)};_0x24CD7[_$_e063[11]]= _0x24CD7[_$_e063[5]];_0x24CB3= false;_0x24CD7[_$_e063[23]](_0x24C9B)};_0x24D13[_$_e063[27]]= function(_0x24CA7){Logger[_$_e063[22]](_$_e063[54]+ _$_e063[55]+ _0x24CD7[_$_e063[11]]+ _$_e063[56]+ _0x24CD7[_$_e063[8]]+ _$_e063[57]+ _0x24CA7[_$_e063[58]]);if(_0x24CA7[_$_e063[58]]=== 1015){Logger[_$_e063[22]](_$_e063[59]);_0x24CD7[_$_e063[8]]= true;_0x24CD7[_$_e063[15]][_$_e063[60]]()};if((_0x24CA7[_$_e063[58]]=== 1006)&& (_0x24CD7[_$_e063[3]]=== false)){Logger[_$_e063[22]](_$_e063[61]);if(!_0x24CD7[_$_e063[8]]){_0x24CD7[_$_e063[8]]= true}};clearTimeout(_0x24CCB);_0x24D13= null;if(_0x24CD7[_$_e063[8]]){_0x24CD7[_$_e063[11]]= _0x24CD7[_$_e063[7]];_0x24CD7[_$_e063[27]](_0x24CA7)}else {_0x24CD7[_$_e063[11]]= _0x24CD7[_$_e063[4]];_0x24CD7[_$_e063[35]]();if(!_0x24CB3&&  !_0x24CEF){if(_0x24CD7[_$_e063[0]]|| AvctVMWebSocket[_$_e063[48]]){Logger[_$_e063[22]](_$_e063[62]+ _$_e063[27]+ _0x24D07)};_0x24CD7[_$_e063[27]](_0x24CA7)};if(_0x24CD7[_$_e063[8]]=== false){Logger[_$_e063[22]](_$_e063[63]);setTimeout(function(){_0x24C9B(true)},_0x24CD7[_$_e063[1]])}}};_0x24D13[_$_e063[36]]= function(_0x24C9B){if(_0x24CD7[_$_e063[0]]|| AvctVMWebSocket[_$_e063[48]]){Logger[_$_e063[22]](_$_e063[62],_$_e063[36],_0x24D07,_0x24C9B[_$_e063[38]])};_0x24CD7[_$_e063[36]](_0x24C9B)};_0x24D13[_$_e063[40]]= function(_0x24C9B){{Logger[_$_e063[22]](_$_e063[49]+ _$_e063[40]+ _0x24D07,_0x24C9B)}_0x24CD7[_$_e063[40]](_0x24C9B)}}catch(e){Logger[_$_e063[22]](_$_e063[64]+ e)}}try{_0x24C9B(_0x24D07)}catch(e){Logger[_$_e063[22]](_$_e063[65]+ e);_0x24CD7[_$_e063[15]][_$_e063[60]]()};this[_$_e063[66]]= function(_0x24C9B){if(_0x24D13){if(_0x24CD7[_$_e063[0]]|| AvctVMWebSocket[_$_e063[48]]){Logger[_$_e063[22]](_$_e063[49],_$_e063[67],_0x24D07,_0x24C9B)};return _0x24D13[_$_e063[67]](_0x24C9B)}else {throw _$_e063[68]}};this[_$_e063[69]]= function(){return _0x24CD7[_$_e063[11]]};this[_$_e063[70]]= function(){_0x24CD7[_$_e063[8]]= true};this[_$_e063[71]]= function(){_0x24CD7[_$_e063[8]]= true;if(_0x24D13){_0x24D13[_$_e063[53]]()}};this[_$_e063[72]]= function(){if(_0x24D13){_0x24D13[_$_e063[53]]()}}}AvctVMWebSocket[_$_e063[48]]= false