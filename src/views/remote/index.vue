<template>
    <div id="showRemoteConsole">
        <div id="canvasParentDiv" ref="canvasParentDiv">
            <canvas id="kvmCanvas"></canvas>
        </div>
    </div>
</template>

<script>
    import API from '../../api/index.js'
    export default {
        name: 'remote',
        data() {
            return {
                remote: {},
                htmlViewer: null,
                viewerWidth: 0,
                viewerHeight: 0,
                remoteConsoleLoginSuccess: null,
                ifHasCloseSession: null,
                currentUser: {},
                bLaunchVMedia: null,
                lastSendMsg: '',
                chatMsgs: [],
                theOtherUser: {
                    userName: ''
                },
                chatHisData: [],
                ifAlreadyShowPreemptDialog: false,
                powerStatus: null,
            }
        },
        methods: {
            doCreateViewer() {
                API.Dataset.restGetPortAssignment().then(data => {
                    this.remote.port = data.data.items[0].port_remote_control;
                    const RPViewer = window.RPViewer;
                    this.htmlViewer = new RPViewer('kvmCanvas', this.viewerAPIErrorCallback);
                    this.htmlViewer.setRPWebSocketTimeout(8);
                    this.htmlViewer.setRPCertFileName('index.html');
                    this.htmlViewer.setRPServerConfiguration(this.remote.host_addr, this.remote.port);
                    this.htmlViewer.setRPEmbeddedViewerSize(this.viewerWidth, this.viewerHeight);
                    this.htmlViewer.setRPAllowSharingRequests(true);
                    this.htmlViewer.setRPMouseInputSupport(true);
                    this.htmlViewer.setRPKeyboardInputSupport(true);
                    this.htmlViewer.setRPDebugMode(true);
                    this.htmlViewer.setRPDebugLevel(1);
                    this.htmlViewer.setRPMaintainAspectRatio(true);
                    this.htmlViewer.setRPInitialBackgroundColor('burlywood');
                    this.htmlViewer.setRPInitialMessageColor('black');
                    this.htmlViewer.setRPVirtualKeyboardPosition(50, 100);
                    this.htmlViewer.setRPKeyboardLanguage('en');
                    this.htmlViewer.setRPVKIncludeCursorKeypad(true, false);
                    this.htmlViewer.setRPSupportReconnect(true);
                    this.htmlViewer.setRPLinkInterruptMessageColor('red');
                    this.htmlViewer.registerRPSessionStatusCallback(this.sessionStatusCallback);
                    this.htmlViewer.registerRPLoginResponseCallback(this.loginResponseCallback);
                    this.htmlViewer.registerRPExitViewerCallback(this.exitViewerCallback);
                    this.htmlViewer.registerRPUserListChangeCallback(this.userListChangeCallback);
                    this.htmlViewer.registerRPChatMessageCallback(this.chatMessageCallback);
                    this.htmlViewer.registerRPMouseAccelerationChangeCallback(this.mouseAccelerationCallback);
                    this.htmlViewer.registerRPSessionReadOnlyCallback(this.sessionReadonlyCallback);
                    this.htmlViewer.registerRPSessionTerminationCallback(this.sessionTermCallback);
                    this.htmlViewer.registerRPVideoStoppedCallback(this.videoStoppedCallback);
                    this.htmlViewer.registerRPVideoCodecCallback(this.videoCodecCallback);
                    this.htmlViewer.registerRPSessionPrivilegesCallback(this.privCallback);
                    this.htmlViewer.registerRPStatisticsCallback(this.statsInfoCallback);
                    this.htmlViewer.registerRPPlaybackModeCallback(this.playbackModeCallback);
                    this.htmlViewer.registerRPPowerStateCallback(this.powerStatusCallback);
                    this.htmlViewer.registerRPVMLoginResponseCallback(this.loginVMCallback);
                    this.htmlViewer.registerRPVMSessionDisconnectCallback(this.disconnectVMCallback);
                    this.htmlViewer.registerRPVMDeviceInfoUpdateCallback(this.infoVMDevicesCallback);
                    this.htmlViewer.registerRPVMDeviceStatusUpdateCallback(statusVMDeviceCallback);
                    this.htmlViewer.registerRPUIInitCallback(htmlViewerInitCallback);
                    this.htmlViewer.registerRPPreemptionCallback(preemptionCallback);
                    this.htmlViewer.registerRPUserInteractionCallback(sessionTimeoutCallback);
                    this.htmlViewer.registerRPResolutionCallback(rpResolutionCallback);
                    this.htmlViewer.setRPCredential('USERID', 'Passw0rd12');
                })
            },
            viewerAPIErrorCallback(errorFunctionName, errorCode) {
                console.log('viewerAPIErrorCallback:' + errorFunctionName + ' ' + errorCode);
            },
            sessionStatusCallback(status) {
                const RPViewer = window.RPViewer;
                console.log('sessionStatusCallback status::' + status);
                switch (status) {
                    case RPViewer.RP_SESSION_STATE.SESSION_LINK_INTERRUPTED:
                        break;
                    case RPViewer.RP_SESSION_STATE.SESSION_RUNNING:
                    case RPViewer.RP_SESSION_STATE.SESSION_RETURNTONORMAL_FROM_LINK_INTERRUPT:
                        break;
                    case RPViewer.RP_SESSION_STATE.SESSION_RECONNECTING:
                        break;
                    case RPViewer.RP_SESSION_STATE.SESSION_RECONNECTED:
                        break;
                    case RPViewer.RP_SESSION_STATE.RECONNECT_FAILED:
                        break;
                }
            },
            loginResponseCallback(loginStatus, loginInfo) {
                const RPViewer = window.RPViewer;
                console.log('loginResponseCallback::' + loginStatus);
                if (loginStatus === RPViewer.RP_LOGIN_RESULT.LOGIN_SUCCESS) {
                    this.remoteConsoleLoginSuccess = true;
                    console.log('remote console login successfully');
                    return;
                } else if (loginStatus === RPViewer.RP_LOGIN_RESULT.LOGIN_INUSE) {
                    if (loginInfo && loginInfo.isSharingAvailable()) {
                        console.log('another user is using session.');
                    } else {
                        console.log("Viewer can't be connected.");
                    }
                    return;
                } else {
                    this.reportLoginStatus(loginStatus);
                    if (this.ifHasCloseSession == false) {
                        this.ifHasCloseSession = true;
                        this.htmlViewer.closeRPViewerSession();
                        this.htmlViewer = null;
                    }
                }
            },
            reportLoginStatus(loginStatus) {
                console.log('loginStatus::' + loginStatus);
                if (loginStatus == 0) {
                    return;
                }
            },
            exitViewerCallback() {
                //called on page unload, or indirectly from a disconnect button press.
                console.log('exitViewerCallback...');
                this.bLaunchVMedia = false;
                this.currentUser.userName = '';
                this.remote.sessionUserList = {};
                if (this.htmlViewer.isRPVirtualKeyboardPoppedUp()) {
                    this.htmlViewer.closeRPVirtualKeyboard();
                }
            },
            userListChangeCallback(userList) {
                this.remote.sessionUserList = userList;
                for (let i = 0; i < userList.length; i++) {
                    let userRecord = userList[i];
                    if (userRecord.isCurrentUser) {
                        this.currentUser.userName = this.getUserName(userRecord.userName);
                        this.currentUser.sessionID = userRecord.sessionID;
                    }
                    userList[i].userName = this.getUserName(userList[i].userName);
                }
            },
            chatMessageCallback(userName, sessionId, message, bCurrentUser) {
                console.log('chat msg received\t' + userName + '\t' + sessionId + '\t' + message + '\t' + bCurrentUser);
                const msgData = {
                    'senderName': userName,
                    'senderSessionid': sessionId,
                    'message': message
                };
                if (message != this.lastSendMsg) {
                    this.chatMsgs.push(msgData);
                }
                let msgDataArr = message.split('->');
                let receiverId = msgDataArr[2];
                if (receiverId == this.currentUser.sessionID) {
                    this.theOtherUser.sessionID = msgDataArr[0];
                    this.theOtherUser.userName = msgDataArr[1];
                    //get sender's ip addr
                    this.remote.sessionUserList.forEach(user => {
                        if (user.sessionID == this.theOtherUser.sessionID) {
                            this.theOtherUser.userIpAddr = user.ipAddress;
                        }
                    });
                    this.populateChatMsg();
                    this.htmlViewer.setRPFocus(false); //need to setRPFocus as false or you can not type anything into the textarea
                }
            },
            mouseAccelerationCallback(val) {
                console.log("mouseAccelerationCallback:" + val);
                this.remote.mouseConfig = val;
            },
            sessionReadonlyCallback(bReadOnly) {
                console.log('sessionReadonlyCallback:' + bReadOnly);
                if (bReadOnly) {
                    this.$message('Read Only privilege granted.');
                }
            },
            sessionTermCallback(reason) {
                console.log('remote console onSessionTermination...' + reason);
                if (this.ifHasCloseSession == false) {
                    this.ifHasCloseSession = true;
                    this.htmlViewer.closeRPViewerSession();
                    this.htmlViewer = null;
                }
                // if ($scope.preemptAutoAcceptTimeout != undefined) {
                //     $timeout.cancel($scope.preemptAutoAcceptTimeout);
                //     this.preemptAutoAcceptTimeout = undefined;
                // }
                this.reportTerminationReason(reason, true);
            },
            videoCodecCallback(bCompression, ySelector, uvSelector) {
                console.log('videoCodecCallback..bCompression::' + bCompression + ' ySelector::' + ySelector +
                    ' uvSelector::' + uvSelector);
            },
            videoStoppedCallback(reason, xRes, yRes, colorDepth) {
                console.log('videoStoppedCallback:' + reason);
                console.log('colorDepth' + colorDepth)
                const RPViewer = window.RPViewer;
                let videoStoppedMsg = '';
                console.log(videoStoppedMsg)
                switch (reason) {
                    case RPViewer.RP_VIDEO_STOPPED_REASON.VIDEO_CALIBRATING:
                        videoStoppedMsg = 'remoteConsoleViewerVideoStopReason1';
                        break;
                    case RPViewer.RP_VIDEO_STOPPED_REASON.VIDEO_NO_SIGNAL:
                        videoStoppedMsg = 'remoteConsoleViewerVideoStopReason2';
                        break;
                    case RPViewer.RP_VIDEO_STOPPED_REASON.VIDEO_OUT_OF_RANGE:
                        videoStoppedMsg = 'remoteConsoleViewerVideoStopReason3';
                        break;
                    case RPViewer.RP_VIDEO_STOPPED_REASON.VIDEO_PERMISSION_DENIED:
                    case RPViewer.RP_VIDEO_STOPPED_REASON.VIDEO_BLOCKED:
                        videoStoppedMsg = 'remoteConsoleViewerVideoStopReason4';
                        break;
                    case RPViewer.RP_VIDEO_STOPPED_REASON.VIDEO_RESOLUTION_NOT_SUPPORTED:
                        videoStoppedMsg = 'remoteConsoleViewerVideoStopReason5' + xRes + 'x' + yRes;
                        break;
                    case RPViewer.RP_VIDEO_STOPPED_REASON.VIDEO_CAPTURE_FAILED:
                        videoStoppedMsg = 'remoteConsoleViewerVideoStopReason6' + xRes + 'x' + yRes;
                        break;
                    default:
                        videoStoppedMsg = 'remoteConsoleViewerVideoStopReason7';
                        break;
                }
            },
            privCallback(bUserExclusivPriv, bUserVMLaunchPrivAvail) {
                console.log('Privilege callback bUserExclusivPriv:' + bUserExclusivPriv + ', bUserVMLaunchPrivAvail:' +
                    bUserVMLaunchPrivAvail);
            },
            statsInfoCallback(statsInfo) {
                console.log('statsInfoCallback:: Frame rate::' + statsInfo.getFrameRate() + ' Frames/sec, Band width::' +
                    statsInfo.getBandwidth() + ' KB/sec, Compression::' + statsInfo.getCompression() +
                    ' % Reduction, Packet Rate::' + statsInfo.getPacketRate() + ' Packets/sec.');
            },
            playbackModeCallback(playbackMode) {
                console.log('playbackModeCallback Mode::' + playbackMode);
            },
            powerStatusCallback(powerStatus) {
                const RPViewer = window.RPViewer;
                console.log('Host Power Status...' + powerStatus);
                switch (powerStatus) {
                    case RPViewer.RP_HOST_POWER.POWER_OFF:
                        this.powerStatus = 0;
                        console.log('powerStatusCallback\t power off\t' + RPViewer.RP_HOST_POWER.POWER_OFF);
                        break;
                    case RPViewer.RP_HOST_POWER.POWER_ON:
                        this.powerStatus = 1;
                        console.log('powerStatusCallback\t power on\t' + RPViewer.RP_HOST_POWER.POWER_ON);
                        break;
                    default:
                        console.log('powerStatusCallback\t power status not available\t');
                        this.powerStatus = 'remoteConsolePowerStateIsNotAvailable';
                        break;
                }
            },
            loginVMCallback(loginStatus, loggedUserName) {
                console.log('loggedUserName' + loggedUserName)
                const RPViewer = window.RPViewer;
                console.log('loginVMCallback response::' + loginStatus);
                if (loginStatus === RPViewer.RP_LOGIN_RESULT.LOGIN_SUCCESS) {
                    this.$store.changeIfMountLocalMedia(true);
                }
            },
            disconnectVMCallback(reason) {
                const RPViewer = window.RPViewer;
                console.log('disconnectVMCallback response::' + reason);
                //preemption occurred so we are quietly shutting down
                if (reason !== RPViewer.RP_SHUTDOWN_REASON.SHUTDOWN_PREEMPT) {
                    this.reportTerminationReason(reason, false);
                }
            },
            infoVMDevicesCallback(deviceList) {
                console.log('infoVMDevicesCallback No. of devices mounted\t' + deviceList.length);
                console.log('devices - details\t' + JSON.stringify(deviceList));
            },
            statusVMDeviceCallback(deviceId, isMapped, statusRemote, statusLocal) {
                console.log('statusVMDeviceCallback Device::' + deviceId  + ' Status::' + statusRemote  + ' Local::' + statusLocal);
                const RPViewer = window.RPViewer;
                if ((statusRemote !== RPViewer.RP_MEDIA_REMOTE_STATUS.REMOTE_OK) || (statusLocal !== RPViewer.RP_MEDIA_LOCAL_STATUS.LOCAL_OK)) { 
                    if ((statusRemote == -1) && (statusLocal === 0) ) return;
                    let msgError = "xccErrMsg_rp_vm_unspecifiedErr";
                    console.log(msgError);
                    switch ( statusRemote ) {
                        case RPViewer.RP_MEDIA_REMOTE_STATUS.REMOTE_DEVICE_INVALID:
                            msgError = "xccErrMsg_rp_vm_deviceInvalid";
                            break;
                        case RPViewer.RP_MEDIA_REMOTE_STATUS.REMOTE_DEVICE_UNSUPPORTED:
                            msgError = "xccErrMsg_rp_vm_deviceUnsupported";
                            break;
                        case RPViewer.RP_MEDIA_REMOTE_STATUS.REMOTE_DEVICE_DISCONNECTED:
                            msgError = "xccErrMsg_rp_vm_deviceUnconnected";
                            break;
                        case RPViewer.RP_MEDIA_REMOTE_STATUS.REMOTE_DEVICE_DISABLED:
                            msgError = "xccErrMsg_rp_vm_deviceDisabled";
                            break;
                        case RPViewer.RP_MEDIA_REMOTE_STATUS.REMOTE_DEVICE_ATTACHED:
                            msgError = "xccErrMsg_rp_vm_deviceAttached";
                            break;
                        case RPViewer.RP_MEDIA_REMOTE_STATUS.REMOTE_DEVICE_OPTION:
                            msgError = "xccErrMsg_rp_vm_deviceOpt";
                            break;
                        case RPViewer.RP_MEDIA_REMOTE_STATUS.REMOTE_DEVICE_ERROR:
                            msgError = "xccErrMsg_rp_vm_deviceErr";
                            break;
                        case RPViewer.RP_MEDIA_REMOTE_STATUS.REMOTE_FAILED_REQUEST:
                            msgError = "xccErrMsg_rp_vm_RequestFailed";
                            break;
                        case RPViewer.RP_MEDIA_REMOTE_STATUS.REMOTE_FAILED_READ:
                            msgError = "xccErrMsg_rp_vm_ReadFailed";
                            break;
                        case RPViewer.RP_MEDIA_REMOTE_STATUS.REMOTE_FAILED_WRITE:
                            msgError = "xccErrMsg_rp_vm_WriteFailed";
                            break;
                    }
                    switch ( statusLocal ) {
                        case RPViewer.RP_MEDIA_LOCAL_STATUS.LOCAL_DRIVE_INVALID:
                            msgError = "xccErrMsg_rp_vm_localDriveInvalid";
                            break;
                        case RPViewer.RP_MEDIA_LOCAL_STATUS.LOCAL_DRIVE_UNKNOWN:
                            msgError = "xccErrMsg_rp_vm_localDriveUnknown";
                            break;
                        case RPViewer.RP_MEDIA_LOCAL_STATUS.LOCAL_DRIVE_UNSUPPORTED:
                            msgError = "xccErrMsg_rp_vm_localDriveUnsupported";
                            break;
                        case RPViewer.RP_MEDIA_LOCAL_STATUS.LOCAL_DRIVE_ERROR:
                            msgError = "xccErrMsg_rp_vm_localDriveErr";
                            break;
                        case RPViewer.RP_MEDIA_LOCAL_STATUS.LOCAL_FAILED_READ:
                            msgError = "xccErrMsg_rp_vm_LocalReadFailed";
                            break;
                        case RPViewer.RP_MEDIA_LOCAL_STATUS.LOCAL_SIZE_EMPTY:
                            msgError = "xccErrMsg_rp_vm_localSizeEmpty";
                            break;
                        case RPViewer.RP_MEDIA_LOCAL_STATUS.LOCAL_SIZE_BIG:
                            msgError = "xccErrMsg_rp_vm_localSizeBig";
                            break;
                    }
                    this.htmlViewer.unMapRPDevice(deviceId);
                }
            },
            getUserName(userName) {
                let name = '';
                let startIndex = userName.toLowerCase().indexOf('uid=');
                if (startIndex == -1) {
                    startIndex = userName.toLowerCase().indexOf('cn=');
                    if (startIndex == -1) {
                        name = userName;
                    } else {
                        let endindex = userName.indexOf(',', startIndex);
                        name = userName.substring(startIndex + 3, endindex);
                    }
                } else {
                    let endindex = userName.indexOf(',', startIndex);
                    name = userName.substring(startIndex + 4, endindex);
                }
                return name;
            },
            populateChatMsg() {
                this.chatHisData = [];
                this.chatMsgs.forEach(msg => {
                    const msgDataArr = msg.message.split('->');
                    const senderId = msgDataArr[0];
                    const senderName = msgDataArr[1];
                    const receiverId = msgDataArr[2];
                    const receiverName = msgDataArr[3];
                    const msgText = msgDataArr[4];
                    console.log('getData\t' + msgDataArr[0] + '\t' + msgDataArr[1] + '\t' + msgDataArr[2] +
                        '\t' + msgDataArr[3] + '\t' + msgDataArr[4] + '\t');
                    if ((senderId === this.theOtherUser.sessionID && receiverId === this.currentUser.sessionID) ||
                        (receiverId == this.theOtherUser.sessionID && senderId === this.currentUser.sessionID)) {
                        this.chatHisData.push({
                            'senderId': senderId,
                            'senderName': senderName,
                            'receiverId': receiverId,
                            'receiverName': receiverName,
                            'msgText': msgText
                        });
                    }
                });
                const div = document.getElementById('chatDiv');
                div.scrollTop = div.scrollHeight;
            },
            reportTerminationReason(messageNum, isViewer) {
                const RPViewer = window.RPViewer;
                //report termination status caught in notifications.js.  Reported
                //here to allow customized handling. 
                console.log('Termination Reason::' + messageNum);
                const shutdownReason = RPViewer.RP_SHUTDOWN_REASON;
                let reason;
                console.log(reason)
                switch (messageNum) {
                    case shutdownReason.SHUTDOWN_ADMIN:
                        reason = 'Administrator Disconnect';
                        break;
                    case shutdownReason.SHUTDOWN_TIMEOUT:
                        reason = 'Exceeded Idle Time Out';
                        break;
                    case shutdownReason.SHUTDOWN_WEBSOCKET:
                        reason = 'Network Connectivity Dropped';
                        if (this.ifAlreadyShowPreemptDialog == true) {
                            this.ifAlreadyShowPreemptDialog = false;
                        }
                        break;
                    case shutdownReason.SHUTDOWN_REBOOT:
                        reason = "xccErrMsg_rp_shutdown_reboot";
                        break;
                    case shutdownReason.SHUTDOWN_UPGRADE:
                        reason = "xccErrMsg_rp_shutdown_upgrade";
                        break;
                    case shutdownReason.SHUTDOWN_PREEMPT:
                        reason = "xccErrMsg_rp_shutdown_prempt";
                        break;
                    case shutdownReason.SHUTDOWN_UNSHARE:
                        reason = "xccErrMsg_rp_shutdown_unshare";
                        break;
                    case shutdownReason.SHUTDOWN_EXLUSIVE:
                        reason = "xccErrMsg_rp_shutdown_exclusive";
                        break;
                    case shutdownReason.SHUTDOWN_OUT_OF_MEMORY:
                        reason = "xccErrMsg_rp_out_of_memory";
                        break;
                    default:
                        reason = "xccErrMsg_rp_unspecifiedErr";
                        break;
                }
                console.log(isViewer);
            }
        },
        mounted() {
            this.viewerWidth = this.$refs.canvasParentDiv.offsetWidth;
            this.viewerHeight = this.$refs.canvasParentDiv.offsetHeight;
            this.remote.host_addr = window.location.host;
            this.doCreateViewer();
        }
    }
</script>

<style scoped lang="scss">
    #showRemoteConsole {
        height: 100%;
        width: 750px;
        margin-left: auto;
        min-width: 580px;
        margin-right: auto;
        background-color: rgb(255, 255, 255);

        #canvasParentDiv {
            width: 750px;
            height: 563.91px;
            float: left;
            background-color: rgb(0, 0, 0);
            min-width: 580px;
            color: #fff;
        }
    }
</style>
