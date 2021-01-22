<template>
    <div id="immSysInfo">
        <div id="sysGenInfoLeft">
            <div v-if="powerState === 0"><img src="../assets/icons/power-status-Off.png" alt=""/></div>
            <div v-if="powerState === 1"><img src="../assets/icons/power-status-on.png" alt=""/></div>
            <div v-if="ledStatus === 0"><img src="../assets/icons/led-error-off.png" alt=""/></div>
            <div v-if="ledStatus === 1"><img src="../assets/icons/led-error-on.png" alt=""/></div>
            <div id="immMachine">{{ machineName }}</div>
            <div id="immSystem">System name:{{ systemName }}</div>
        </div>
        <div id="sysGenInfoRight">
            <div id="immExport">
                <div class="sysGenInfoRightImg"></div>
                Export
            </div>
            <div id="immUser">
                <div class="sysGenInfoRightImg"></div>
                {{ username }}
            </div>
            <div id="immTime">
                <div class="sysGenInfoRightImg"></div>
                {{ currentTime }}
            </div>
            <div id="immLanguage">
                <div class="sysGenInfoRightImg"></div>
            </div>
        </div>
    </div>
</template>

<script>
import API from '../api';
export default {
    name: 'topMenu',
    data() {
        return {
            currentTime: null,
            username: '',
            powerState: null,
            ledStatus: null,
            machineName: '',
            systemName: ''
        }
    },
    mounted() {
        this.systemDate();
        this.restPowerActionList();
        this.restHeader();
        this.getCurrentUser();
    },
    methods: {
        getCurrentUser() {
            API.Providers.restGeneralInfo().then(res => {
                this.username = res.data.username;
                this.$store.commit('changeUserInfo', res.data);
            })
        },
        systemDate() {
            API.Dataset.restSysTime().then(res => {
                this.currentTime = this.$moment(res.data.items[0].datetime_current.substring(0,19)).format('LT');
            })
        },
        restPowerActionList() {
            API.Dataset.restPowerActionList().then(res => {
                this.powerState = res.data['items'][0]['power_state'];
                this.$store.commit('changePowerState', this.powerState);
                res.data['items'][0]['LEDs'].forEach(item => {
                    if(item.id === 0)  {
                        this.ledStatus = item.status;
                    }
                })
            })
        },
        restHeader() {
            API.Providers.restHeader().then(res => {
                this.machineName = res.data['items'][0].machine_name;
                this.systemName = res.data['items'][0].system_name;
            })
        }
    }
}
</script>

<style scoped lang="scss">
#immSysInfo{
    height: 100%;
    #sysGenInfoLeft{
        float: left;
        padding-top: 8px;
        display: flex;
        img{
            width: 24px;
            height: 24px;
            margin-right: 10px;
        }
        #immMachine{
            font-size: 16px;
            color: #666;
            font-weight: 700;
            line-height: 28px;
        }
        #immSystem{
            font-size: 14px;
            margin-left: 60px;
            padding-top: 3px;
        }
    }
    #sysGenInfoRight{
        float: right;
        display: flex;
        height: 100%;
        width: 370px;
        img{
            width: 16px;
            height: 16px;
        }
        .sysGenInfoRightImg{
            width: 16px;
            height: 16px;
            background-repeat: no-repeat;
            background-size: cover;
            margin: 4px 10px 0 0;
        }
        #immExport{
            line-height: 24px;
            display: flex;
            .sysGenInfoRightImg{
                background-image: url(../assets/icons/export-dcgg.png)
            }
            padding: 10px 10px 0 10px;
            cursor: pointer;
        }
        #immExport:hover{
            background-color: #0079BA;
            color: #fff;
            .sysGenInfoRightImg{
                background-image: url(../assets/icons/export-white.png)
            }
        }
        #immUser{
            line-height: 24px;
            display: flex;
            .sysGenInfoRightImg{
                background-image: url(../assets/icons/user-dcgg.png)
            }
            padding: 10px 10px 0 10px;
            cursor: pointer;
        }
        #immUser:hover{
            background-color: #0079BA;
            color: #fff;
            .sysGenInfoRightImg{
                background-image: url(../assets/icons/user-white.png)
            }
        }
        #immTime{
            line-height: 24px;
            display: flex;
            .sysGenInfoRightImg{
                background-image: url(../assets/icons/time-dccg.png)
            }
            padding: 10px 10px 0 10px;
            cursor: pointer;
        }
        #immTime:hover{
            background-color: #0079BA;
            color: #fff;
            .sysGenInfoRightImg{
                background-image: url(../assets/icons/time-white.png)
            }
        }
        #immLanguage{
            .sysGenInfoRightImg{
                background-image: url(../assets/icons/more-dg.png)
            }
            padding: 10px 10px 0 10px;
            cursor: pointer;
        }
        #immLanguage:hover{
            background-color: #0079BA;
            .sysGenInfoRightImg{
                background-image: url(../assets/icons/more-white.png)
            }
        }
    }
}
</style>
