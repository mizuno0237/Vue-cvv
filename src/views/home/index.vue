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
                                            <img src="../../assets/icons/cpu-dcgg.png" v-if="hardwareGeneralInfo.cpu.hwSlotsInstall > 0">
                                            <img src="../../assets/icons/cpu-inactive.png" v-if="hardwareGeneralInfo.cpu.hwSlotsInstall == 0">
                                            <div><router-link class="hwTypeInfo" :to="{path:'/inventory'}">CPU</router-link></div>
                                            <div class="hwInstallInfo">
                                                {{ hardwareGeneralInfo.cpu.hwSlotsInstall + ' / ' + hardwareGeneralInfo.cpu.hwSlotsCount + ' installed'}}
                                            </div>
                                        </el-col>
                                        <el-col :span="8" v-if="hardwareGeneralInfo.memory.exist">
                                            <img src="../../assets/icons/memory-dcgg.png" v-if="hardwareGeneralInfo.memory.hwSlotsInstall > 0">
                                            <img src="../../assets/icons/memory-inactive.png" v-if="hardwareGeneralInfo.memory.hwSlotsInstall == 0">
                                            <div><router-link class="hwTypeInfo" :to="{path:'/inventory'}">Memory</router-link></div>
                                            <div class="hwInstallInfo">
                                                {{ hardwareGeneralInfo.memory.hwSlotsInstall + ' / ' + hardwareGeneralInfo.memory.hwSlotsCount + ' installed'}}
                                            </div>
                                        </el-col>
                                        <el-col :span="8" v-if="hardwareGeneralInfo.storage.exist">
                                            <img src="../../assets/icons/storage-dcgg.png" v-if="hardwareGeneralInfo.storage.hwSlotsInstall > 0">
                                            <img src="../../assets/icons/storage-inactive.png" v-if="hardwareGeneralInfo.storage.hwSlotsInstall == 0">
                                            <div><router-link class="hwTypeInfo" :to="{path:'/inventory'}">Local Storage</router-link></div>
                                            <div class="hwInstallInfo">
                                                {{ hardwareGeneralInfo.storage.hwSlotsInstall + ' / ' + hardwareGeneralInfo.storage.hwSlotsCount + ' installed'}}
                                            </div>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="8" v-if="hardwareGeneralInfo.pci.exist">
                                            <img src="../../assets/icons/pci-dcgg.png" v-if="hardwareGeneralInfo.pci.hwSlotsInstall > 0">
                                            <img src="../../assets/icons/pci-inactive.png" v-if="hardwareGeneralInfo.pci.hwSlotsInstall == 0">
                                            <div><router-link class="hwTypeInfo" :to="{path:'/inventory'}">PCI</router-link></div>
                                            <div class="hwInstallInfo">
                                                {{ hardwareGeneralInfo.pci.hwSlotsInstall + ' / ' + hardwareGeneralInfo.pci.hwSlotsCount + ' installed'}}
                                            </div>
                                        </el-col>
                                        <el-col :span="8" v-if="hardwareGeneralInfo.powerSupply.exist">
                                            <img src="../../assets/icons/power-supply-dcgg.png" v-if="hardwareGeneralInfo.powerSupply.hwSlotsInstall > 0">
                                            <img src="../../assets/icons/power-supply-gray.png" v-if="hardwareGeneralInfo.powerSupply.hwSlotsInstall == 0">
                                            <div><router-link class="hwTypeInfo" :to="{path:'/inventory'}">Power Supply</router-link></div>
                                            <div class="hwInstallInfo">
                                                {{ hardwareGeneralInfo.powerSupply.hwSlotsInstall + ' / ' + hardwareGeneralInfo.powerSupply.hwSlotsCount + ' installed'}}
                                            </div>
                                        </el-col>
                                        <el-col :span="8" v-if="hardwareGeneralInfo.fan.exist">
                                            <img src="../../assets/icons/fan-dcgg.png" v-if="hardwareGeneralInfo.fan.hwSlotsInstall > 0">
                                            <img src="../../assets/icons/fan-inactive.png" v-if="hardwareGeneralInfo.fan.hwSlotsInstall == 0">
                                            <div><router-link class="hwTypeInfo" :to="{path:'/inventory'}">Fan</router-link></div>
                                            <div class="hwInstallInfo">
                                                {{ hardwareGeneralInfo.fan.hwSlotsInstall + ' / ' + hardwareGeneralInfo.fan.hwSlotsCount + ' installed'}}
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
                                <el-tab-pane :label="'Active System Events('+activeEvent+')'" name="second">Active System Events ({{activeEvent}})</el-tab-pane>
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
                            <div><img src="" alt="" id="lastScreenSnapshot"></div>
                            <div id="remoteSetting">
                                
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-col>
            <el-col :span="12" id="utilizationInfo"></el-col>
        </el-row>
    </div>
</template>

<script>
import API from '../../api'
export default {
    name: 'home',
    data () {
        return {
            activeName: 'first',
            userinfo: this.$store.state.userinfo,
            activeEvent: 0,
            machineName: '',
            machineTypeModel: '',
            serialNumber: '',
            systemName: '',
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
        this.restGeneralSysInventoryInfo();
        this.restSysDetailInfo();
        this.restGetTire();
        this.restRemoteConsoleCaptureScreen();
    },
    methods: {
        restGeneralSysInventoryInfo() {
            API.Dataset.restGeneralSysInventoryInfo({'params':'Sys_GetInvGeneral'}).then(res => {
                res.data.items.forEach((item) => {
                    let type = item.type;
                    if(type === 'CPU'){
                        type = 'cpu';
                        console.log(item)
                    } else if(type === 'ps') {
                        type = 'powerSupply';
                    }
                    this.hardwareGeneralInfo[type].exist = true;
                    this.hardwareGeneralInfo[type].hwSlotsInstall = item.install;
                    this.hardwareGeneralInfo[type].hwSlotsCount = item.max;
                })
                this.hardwareGeneralInfo['systemBoard'].exist = true;
                this.hardwareGeneralInfo['other'].exist = true;
            })
        },
        restSysDetailInfo() {
            API.Dataset.restSysDetailInfo().then(res => {
                this.machineName = res.data.machine_name;
                this.machineTypeModel = res.data.machine_typemodel;
                this.serialNumber = res.data.serial_number;
                this.systemName = res.data.system_name;
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
                    console.log(res.data.name)
                    API.DownloadFile.remoteConsoleCaptureScreen().then((res) => {
                        console.log(res.data)
                    })
                }
            })
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
</style>
  