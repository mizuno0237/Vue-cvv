<template>
    <div>
        <el-row>
            <el-col :span="12" id="mainInfo">
                <el-row>
                    <el-col :span="24">
                        <div class="grid-content bg-purple-white">
                            <el-tabs v-model="activeName">
                                <el-tab-pane label="Health Summary" name="first">
                                    <el-row>
                                        <el-col :span="8" v-if="hardwareGeneralInfo.cpu.exist">
                                            <img src="../../assets/icons/cpu-dcgg.png" v-if="hardwareGeneralInfo.cpu.hwSlotsInstall > 0 && hardwareGeneralInfo.cpu.hwSlotsCount > 0">
                                            <img src="../../assets/icons/cpu-inactive.png" v-else>
                                            <div><router-link class="hwTypeInfo" :to="{path:'/inventory'}" :style="{color: (hardwareGeneralInfo.cpu.hwSlotsCount > 0 && hardwareGeneralInfo.cpu.hwSlotsInstall > 0 ? '#0096E7' : '#AEAEAE')}">CPU</router-link></div>
                                            <div class="hwInstallInfo">
                                                <span v-if="hardwareGeneralInfo.cpu.hwSlotsCount > 0 && hardwareGeneralInfo.cpu.hwSlotsInstall > 0">
                                                    {{ hardwareGeneralInfo.cpu.hwSlotsInstall + ' / ' + hardwareGeneralInfo.cpu.hwSlotsCount + ' installed'}}
                                                </span>
                                                <span v-else class="hwInstallInfoInactive">Not found</span>
                                            </div>
                                        </el-col>
                                        <el-col :span="8" v-if="hardwareGeneralInfo.memory.exist">
                                            <img src="../../assets/icons/memory-dcgg.png" v-if="hardwareGeneralInfo.memory.hwSlotsInstall > 0 && hardwareGeneralInfo.memory.hwSlotsCount > 0">
                                            <img src="../../assets/icons/memory-inactive.png" v-else>
                                            <div><router-link class="hwTypeInfo" :to="{path:'/inventory'}" :style="{color: (hardwareGeneralInfo.memory.hwSlotsCount > 0 && hardwareGeneralInfo.memory.hwSlotsInstall > 0 ? '#0096E7' : '#AEAEAE')}">Memory</router-link></div>
                                            <div class="hwInstallInfo">
                                                <span v-if="hardwareGeneralInfo.memory.hwSlotsCount > 0 && hardwareGeneralInfo.memory.hwSlotsInstall > 0">
                                                    {{ hardwareGeneralInfo.memory.hwSlotsInstall + ' / ' + hardwareGeneralInfo.memory.hwSlotsCount + ' installed'}}
                                                </span>
                                                <span v-else class="hwInstallInfoInactive">Not found</span>
                                            </div>
                                        </el-col>
                                        <el-col :span="8" v-if="hardwareGeneralInfo.storage.exist">
                                            <img src="../../assets/icons/storage-dcgg.png" v-if="hardwareGeneralInfo.storage.hwSlotsInstall > 0 && hardwareGeneralInfo.storage.hwSlotsCount > 0">
                                            <img src="../../assets/icons/storage-inactive.png" v-else>
                                            <div><router-link class="hwTypeInfo" :to="{path:'/inventory'}" :style="{color: (hardwareGeneralInfo.storage.hwSlotsCount > 0 && hardwareGeneralInfo.storage.hwSlotsInstall > 0 ? '#0096E7' : '#AEAEAE')}">Local Storage</router-link></div>
                                            <div class="hwInstallInfo">
                                                <span v-if="hardwareGeneralInfo.storage.hwSlotsCount > 0 && hardwareGeneralInfo.storage.hwSlotsInstall > 0">
                                                    {{ hardwareGeneralInfo.storage.hwSlotsInstall + ' / ' + hardwareGeneralInfo.storage.hwSlotsCount + ' installed'}}
                                                </span>
                                                <span v-else class="hwInstallInfoInactive">Not found</span>
                                            </div>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="8" v-if="hardwareGeneralInfo.pci.exist">
                                            <img src="../../assets/icons/pci-dcgg.png" v-if="hardwareGeneralInfo.pci.hwSlotsInstall > 0 && hardwareGeneralInfo.pci.hwSlotsCount > 0">
                                            <img src="../../assets/icons/pci-inactive.png" v-else>
                                            <div><router-link class="hwTypeInfo" :to="{path:'/inventory'}" :style="{color: (hardwareGeneralInfo.pci.hwSlotsCount > 0 && hardwareGeneralInfo.pci.hwSlotsInstall > 0 ? '#0096E7' : '#AEAEAE')}">PCI</router-link></div>
                                            <div class="hwInstallInfo">
                                                <span v-if="hardwareGeneralInfo.pci.hwSlotsCount > 0 && hardwareGeneralInfo.pci.hwSlotsInstall > 0">
                                                    {{ hardwareGeneralInfo.pci.hwSlotsInstall + ' / ' + hardwareGeneralInfo.pci.hwSlotsCount + ' installed'}}
                                                </span>
                                                <span v-else class="hwInstallInfoInactive">Not found</span>
                                            </div>
                                        </el-col>
                                        <el-col :span="8" v-if="hardwareGeneralInfo.powerSupply.exist">
                                            <img src="../../assets/icons/power-supply-dcgg.png" v-if="hardwareGeneralInfo.powerSupply.hwSlotsInstall > 0 && hardwareGeneralInfo.powerSupply.hwSlotsCount > 0">
                                            <img src="../../assets/icons/power-supply-gray.png" v-else>
                                            <div><router-link class="hwTypeInfo" :to="{path:'/inventory'}" :style="{color: (hardwareGeneralInfo.powerSupply.hwSlotsCount > 0 && hardwareGeneralInfo.powerSupply.hwSlotsInstall > 0 ? '#0096E7' : '#AEAEAE')}">Power Supply</router-link></div>
                                            <div class="hwInstallInfo">
                                                <span v-if="hardwareGeneralInfo.powerSupply.hwSlotsCount > 0 && hardwareGeneralInfo.powerSupply.hwSlotsInstall > 0">
                                                    {{ hardwareGeneralInfo.powerSupply.hwSlotsInstall + ' / ' + hardwareGeneralInfo.powerSupply.hwSlotsCount + ' installed'}}
                                                </span>
                                                <span v-else class="hwInstallInfoInactive">Not found</span>
                                            </div>
                                        </el-col>
                                        <el-col :span="8" v-if="hardwareGeneralInfo.fan.exist">
                                            <img src="../../assets/icons/fan-dcgg.png" v-if="hardwareGeneralInfo.fan.hwSlotsInstall > 0 && hardwareGeneralInfo.fan.hwSlotsCount > 0">
                                            <img src="../../assets/icons/fan-inactive.png" v-else>
                                            <div><router-link class="hwTypeInfo" :to="{path:'/inventory'}" :style="{color: (hardwareGeneralInfo.fan.hwSlotsCount > 0 && hardwareGeneralInfo.fan.hwSlotsInstall > 0 ? '#0096E7' : '#AEAEAE')}">Fan</router-link></div>
                                            <div class="hwInstallInfo">
                                                <span v-if="hardwareGeneralInfo.fan.hwSlotsCount > 0 && hardwareGeneralInfo.fan.hwSlotsInstall > 0">
                                                    {{ hardwareGeneralInfo.fan.hwSlotsInstall + ' / ' + hardwareGeneralInfo.fan.hwSlotsCount + ' installed'}}
                                                </span>
                                                <span v-else class="hwInstallInfoInactive">Not found</span>
                                            </div>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="8" v-if="hardwareGeneralInfo.systemBoard.exist">
                                            <img src="../../assets/icons/system-board-dcgg.png">
                                            <div><router-link class="hwTypeInfo" :to="{path:'/inventory'}">System Board</router-link></div>
                                        </el-col>
                                        <el-col :span="8" v-if="hardwareGeneralInfo.other.exist">
                                            <img src="../../assets/icons/other-dcgg.png">
                                            <div><router-link class="hwTypeInfo" :to="{path:'/inventory'}">Others</router-link></div>
                                        </el-col>
                                    </el-row>
                                </el-tab-pane>
                                <el-tab-pane :label="'Active System Events('+activeEventCount+')'" name="second">
                                    <ul id="activeEventList">
                                        <li v-for="item in activeEventList" :key="item.cmnid">
                                            <i class="activeEventListIcon" v-if="item.severity === 'E'">
                                                <img src="../../assets/icons/error.png" alt=""/>
                                            </i>
                                            <i class="activeEventListIcon" v-if="item.severity === 'W'">
                                                <img src="../../assets/icons/warning.png" alt=""/>
                                            </i>
                                            <span class="activeEventSource">{{ item.source }}</span>
                                            <div class="activeEventInfo">
                                                <div class="activeEventInfoTop">{{ item.message }}</div>
                                                <div class="activeEventInfoBottom">
                                                    <span class="activeEventCmnid">{{ item.cmnid }}</span>
                                                    <span class="activeEventFru">FRU: </span>
                                                    <span class="activeEventDate">{{ item.date }}</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </el-tab-pane>
                            </el-tabs>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="12" id="sysDetailInfo">
                <el-col :span="24">
                    <div class="grid-content bg-purple-white">
                        <div id="sysDetailInfoTitle">System Information and Settings</div>
                        <ul>
                            <li class="machineName"><div class="sysDetailInfoLeft">{{ machineName }}</div><div class="sysDetailInfoRight">{{ powerState }}<span></span></div></li>
                            <li class="machineType"><div class="sysDetailInfoLeft">Machine Type/Model</div><div class="sysDetailInfoRight">{{ machineTypeModel }}</div></li>
                            <li class="serialNo"><div class="sysDetailInfoLeft">Serial No.</div><div class="sysDetailInfoRight">{{ serialNumber }}</div></li>
                            <li class="systemName"><div class="sysDetailInfoLeft">System Name</div><div class="sysDetailInfoRight">{{ systemName }}</div></li>
                            <li class="frontUSBOwnership"><div class="sysDetailInfoLeft">Front USB Ownership</div><div class="sysDetailInfoRight"></div></li>
                            <li class="BMCLicense"><div class="sysDetailInfoLeft">BMC License</div><div class="sysDetailInfoRight"></div></li>
                            <li class="BMCIPAddress"><div class="sysDetailInfoLeft">BMC IP Address</div><div class="sysDetailInfoRight"></div></li>
                            <li class="BMCHostname"><div class="sysDetailInfoLeft">BMC Hostname</div><div class="sysDetailInfoRight"></div></li>
                            <li class="UEFIVersion"><div class="sysDetailInfoLeft">UEFI Version</div><div class="sysDetailInfoRight"></div></li>
                            <li class="LXPMVersion"><div class="sysDetailInfoLeft">LXPM Version</div><div class="sysDetailInfoRight"></div></li>
                            <li class="location"><div class="sysDetailInfoLeft">Location</div><div class="sysDetailInfoRight"></div></li>
                        </ul>
                    </div>
                </el-col>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12" id="quickActionAndRP" v-if="tierInHome > 1">
                <el-col :span="24">
                    <div class="grid-content bg-purple-white">
                        <div id="quickActionAndRPTitle">Remote Console Preview</div>
                        <div id="privilegeRemoteConsole">
                            <div id="remoteConsoleImg">
                                <img src="../../assets/remote_screen_shutdown.png" alt="" id="lastScreenSnapshot" ref="lastScreenSnapshot">
                                <div id="clickAndRunIcon" title="Launch Remote Console" @click="ifShowLanuchRP = true; showLanuchRP()"></div>
                            </div>
                            <div id="remoteSetting">
                                <ul>
                                    <li>
                                        <div class="commonIconBlueBorder"><img src="../../assets/icons/capture-screen-black.png" alt=""><span>Capture Screen</span></div>
                                    </li>
                                    <li>
                                        <div class="commonIconBlueBorder"><img src="../../assets/icons/settings-black.png" alt=""><span>Settings</span></div>
                                    </li>
                                    <li>
                                        <div class="commonIconBlueBorder"><img src="../../assets/icons/last-boot-videos-black.png" alt=""><span>Recorded Videos</span></div>
                                    </li>
                                    <li>
                                        <div class="commonIconBlueBorder"><img src="../../assets/icons/latest-failure-screen-black.png" alt=""><span>Latest Failure Screen</span></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-col>
            <el-col :span="12" id="utilizationInfo"></el-col>
        </el-row>
        <el-dialog
            id="lanuchRPDialog"
            title="Remote Console Settings"
            :visible.sync="ifShowLanuchRP"
            width="35%"
            center>
            <span>Select the access mode:</span>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="ifShowLanuchRP = false; startLaunch();">Launch Remote Console</el-button>
                <el-button @click="ifShowLanuchRP = false">Cancel</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import API from '../../api';
import {
    getCookie,
    setCookie
} from '../../util/cookie.js';
export default {
    name: 'home',
    data () {
        return {
            activeName: 'first',
            remoteConsoleSessionMode: '',
            ifEncrypt: '',
            activeEventCount: 0,
            activeEventList: 0,
            machineName: '',
            machineTypeModel: '',
            serialNumber: '',
            systemName: '',
            ifShowLanuchRP: false,
            ifAllowDisconnect: true,
            ifAllowPreempt: 1,
            sessionNoActionTimeout: 5,
            hardwareGeneralInfo: {
                "criticalCount": 0,
                "warningCount": 0,
                "cpu": {
                    "msgWarningCount": 0,
                    "msgCriticalCount": 0,
                    "hwSlotsCount": 0,
                    "hwSlotsInstall": 0,
                    "msgType":0,
                    "msgCount":0,
                    "hwMsgList": [],
                    'exist': false
                },
                "memory": {
                    "msgWarningCount": 0,
                    "msgCriticalCount": 0,
                    "hwSlotsCount": 0,
                    "hwSlotsInstall": 0,
                    "msgType":0,
                    "msgCount":0,
                    "hwMsgList": [],
                    'exist': false
                },
                "storage": {
                    "msgWarningCount": 0,
                    "msgCriticalCount": 0,
                    "hwSlotsCount": 0,
                    "hwSlotsInstall": 0,
                    "msgType":0,
                    "msgCount":0,
                    "hwMsgList": [],
                    'exist': false
                },
                "pci": {
                    "msgWarningCount": 0,
                    "msgCriticalCount": 0,
                    "hwSlotsCount": 0,
                    "hwSlotsInstall": 0,
                    "msgType":0,
                    "msgCount":0,
                    "hwMsgList": [],
                    'exist': false
                },
                "powerSupply": {
                    "msgWarningCount": 0,
                    "msgCriticalCount": 0,
                    "hwSlotsCount": 0,
                    "hwSlotsInstall": 0,
                    "msgType":0,
                    "msgCount":0,
                    "hwMsgList": [],
                    'exist': false
                },
                "fan": {
                    "msgWarningCount": 0,
                    "msgCriticalCount": 0,
                    "hwSlotsCount": 0,
                    "hwSlotsInstall": 0,
                    "msgType":0,
                    "msgCount":0,
                    "hwMsgList": [],
                    'exist': false
                },
                "systemBoard": {
                    "msgWarningCount": 0,
                    "msgCriticalCount": 0,
                    "hwMsgList": [],
                    'exist': false
                },
                "other": {
                    "msgWarningCount": 0,
                    "msgCriticalCount": 0,
                    "hwMsgList": [],
                    'exist': false
                }
            }
        }
    },
    mounted() {
        this.restActiveEvents();
        this.restGeneralSysInventoryInfo();
        this.restSysDetailInfo();
        this.restGetTire();
        this.restRemoteConsoleCaptureScreen();
    },
    methods: {
        restActiveEvents() {
            API.Providers.restActiveEvents().then(res => {
                this.activeEventCount = res.data.items.length;
                console.log(res.data.items);
                this.activeEventList = res.data.items;
            })
        },
        initRemoteConsoleSettingCtrl() {
            if(undefined !== getCookie('remoteConsoleSessionMode')) {
                this.remoteConsoleSessionMode = this.$store.state.loginInfo.userName + getCookie('remoteConsoleSessionMode');
            } else if(this.tierInHome ===  2) {
                this.remoteConsoleSessionMode = 'single';
            } else if(this.tierInHome ===  3) {
                this.remoteConsoleSessionMode = 'multi';
            }
            if(undefined !== getCookie('remoteConsoleEncrypt')) {
                this.ifEncrypt = getCookie('remoteConsoleEncrypt')
            } else {
                this.ifEncrypt = false;
            }
        },
        restGeneralSysInventoryInfo() {
            API.Dataset.restGeneralSysInventoryInfo({'params':'Sys_GetInvGeneral'}).then(res => {
                res.data.items.forEach((item) => {
                    let type = item.type;
                    if(type === 'CPU'){
                        type = 'cpu';
                    } else if(type === 'ps') {
                        type = 'powerSupply';
                    }
                    this.hardwareGeneralInfo[type].exist = true;
                    this.hardwareGeneralInfo[type].hwSlotsInstall = item.install === 'N/A' ? 0 : item.install;
                    this.hardwareGeneralInfo[type].hwSlotsCount = item.max === 'N/A' ? 0 : item.max;
                })
                this.hardwareGeneralInfo['systemBoard'].exist = true;
                this.hardwareGeneralInfo['other'].exist = true;
            })
        },
        restSysDetailInfo() {
            API.Dataset.restSysDetailInfo().then(res => {
                this.machineName = res.data.items[0].machine_name;
                this.machineTypeModel = res.data.items[0].machine_typemodel;
                this.serialNumber = res.data.items[0].serial_number;
                this.systemName = res.data.items[0].system_name;
            })
        },
        restGetTire() {
            API.Providers.restGetTire().then(res => {
                this.$store.commit('changeTier', res.data.tier);
                localStorage.setItem('tier', res.data.tier);
                console.log("tier is :" + this.$store.state.tier);
            })
        },
        restRemoteConsoleCaptureScreen() {
            API.Providers.restRemoteConsoleCaptureScreen().then(res => {
                if(res.data.return === 0) {
                    const lastScreenSnapshot= this.$refs.lastScreenSnapshot;
                    const date = (new Date()).valueOf();
                    this.getImageBlob("/download/Mini_ScreenShot.png?t=" + date, res => {
                        const reader = new FileReader();
                        reader.readAsDataURL(res);
                        reader.onload = function(e) {
                            var data = e.target.result.split(';');
                            lastScreenSnapshot.src = "data:application/octet-stream;"+data[1];
                        }
                    }, () => {
                        lastScreenSnapshot.src = "../../assets/remote_screen_shutdown.png";
                    })
                }
            })
        },
        getImageBlob(url, cb, errFunc) {
            const xhr  = new XMLHttpRequest();
            xhr.open("get", url, true);
            xhr.responseType = "blob";
            xhr.setRequestHeader("Content-type", "application/octet-stream");
            xhr.setRequestHeader("Authorization", 'Bearer ' + this.$store.state.token);
            xhr.onload = function() {
                if (this.status === 200) {
                    if(cb) {
                        cb(this.response);
                    }
                }
            };
            xhr.onerror = function(){
                if(errFunc){
                    errFunc();
                }
            };
            xhr.send();
        },
        getRpSession() {
            API.Providers.getRpSession().then(res => {
                this.ifAllowPreempt = res.data.enabled;
                this.sessionNoActionTimeout = res.data.timeout;
                this.ifAllowDisconnect = res.data.enabled === 1 ? true:false;
            })
        },
        postRpSession() {
            API.Providers.restRpSession({'Preempt': this.ifAllowDisconnect ? 1 : 0,"Timeout": this.sessionNoActionTimeout}).then(res => {
                if(res.data.return === 0) {
                    console.log("Config Remote session data success");
                } else{
                    this.$message({
                        showClose: true,
                        message: 'Failed to configure Remote console session data!',
                        type: 'warning'
                    });
                }
            })
        },
        restRemoteConsoleKvmStatusPreempt() {
            API.Providers.restRemoteConsoleKvmStatusPreempt().then(res => {
                console.log(res.data);
            })
        },
        // open Launch Remote Console dialog
        showLanuchRP() {
            this.getRpSession();
            this.initRemoteConsoleSettingCtrl();
        },
        // click Launch Remote Console button
        startLaunch() {
            if(this.tierInHome === 1) {
                this.$message({
                    showClose: true,
                    message: 'Remote console cannot be enabled due to low level certificate.',
                    type: 'warning'
                });
                return;
            }
            this.postRpSession();
            console.log(this.userInfo);
            setCookie(this.userInfo.username + 'remoteConsoleSessionMode', this.remoteConsoleSessionMode);
            setCookie(this.userInfo.username + 'remoteConsoleEncrypt', this.ifEncrypt);
            this.tryLaunchingRemoteConsole();
        },
        tryLaunchingRemoteConsole() {
            this.doLaunchRemoteConsole();
        },
        doLaunchRemoteConsole() {
            console.log('do Launch Remote Console');
            let routeData = this.$router.resolve({ path: '/remote'});
            window.open(routeData.href, '_blank');
        }
    },
    computed: {
        powerState() {
            if(this.$store.state.powerState === 0) {
                return 'Power Off';
            }else{
                return 'Power On';
            }
        },
        tierInHome() {
            return this.$store.state.tier;
        },
        userInfo() {
            return this.$store.state.userInfo;
        }
    }
}
</script>

<style scoped lang="scss">
.el-tabs.el-tabs--top{
    padding: 20px 20px 0 20px;
}
.el-tabs__item.is-active {
    font-weight: 700
}
#mainInfo{
    padding-right: 10px;
    .el-col.el-col-24{
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
    }
    .el-col.el-col-8{
        text-align: center;
        margin-top: 22px;
        .hwInstallInfo{
            font-size: 12px;
            line-height: 28px;
            .hwInstallInfoInactive{
                color: #AEAEAE;
            }
        }
        .hwTypeInfo{
            font-size: 12px;
            color: #0096E7;
            a:hover{
                text-decoration: underline
            }
        }
        img{
            height: 32px;
            width: 32px;
        }
    }
}
#sysDetailInfo{
    padding-left: 10px;
    .el-col.el-col-24{
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
    }
    #sysDetailInfoTitle{
        padding: 20px;
        font-size: 14px;
        color: #333;
        font-weight: 700;
    }
    ul{
        padding-inline-start: 20px;
        padding-right: 20px;
        li{
            list-style: none;
            height: 30px;
            font-size: 12px;
            color: #333;
            display: flex;
            .sysDetailInfoLeft{
                flex: 2;
            }
            .sysDetailInfoRight{
                flex: 3;
            }
        }
    }
}
#quickActionAndRP {
    margin-top: 20px;
    padding-right: 10px;
    .el-col.el-col-24{
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
        .grid-content{
            height: 300px;
        }
    }
    #quickActionAndRPTitle{
        padding: 20px;
        font-size: 14px;
        color: #333;
        font-weight: 700;
    }
    #privilegeRemoteConsole{
        height: 160px;
        width: 94%;
        margin-left: 3%;
        padding: 0 10px;
        display: flex;
        #remoteConsoleImg{
            position: relative;
            #clickAndRunIcon{
                position: absolute;
                width: 72px;
                height: 72px;
                background-image: url(../../assets/icons/remote-control-big-dccg.png);
                background-repeat: no-repeat;
                background-size: cover;
                top: 38px;
                left: 66px;
                cursor: pointer;
            }
            #clickAndRunIcon:hover{
                background-image: url(../../assets/icons/remote-control-big-mouseover.png);
            }
            #lastScreenSnapshot{
                height: 150px;
                width: 200px;
            }
        }
        #remoteSetting{
            margin-left: 10px;
            ul{
                height: 160px;
                margin-left: 15px;
                li{
                    list-style: none;
                    height: 25%;
                    font-size: 14px;
                    div{
                        width: 100%;
                        display: flex;
                        img{
                            width: 16px;
                            height: 16px;
                            margin-right: 15px;
                        }
                    }
                }
            }
        }
    }
}
.el-col {
    border-radius: 4px;
    .grid-content {
        border-radius: 4px;
        height: 450px;
    }
    .bg-purple-white {
        background: #fff;
    }
}
#lanuchRPDialog{
    .el-button--primary{
        background: rgb(51,63,75);
    }
}
#activeEventList{
    li{
        display: flex;
        font-size: 13px;
        height: 50px;
        .activeEventListIcon{
            flex: 1;
            img{
                width: 16px;
                height: 16px;
            }
        }
        .activeEventSource{
            flex: 2;
        }
        .activeEventInfo{
            flex: 7;
            .activeEventInfoTop{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .activeEventInfoBottom{
                display: flex;
                color: #999;
                .activeEventCmnid{
                    flex: 3;
                }
                .activeEventFru{
                    flex: 2;
                }
                .activeEventDate{
                    flex: 5;
                }
            }
        }
    }
}
</style>
  