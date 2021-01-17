<template>
    <div style="height: 100%;">
        <el-container style="height:100%">
            <el-aside width="58.6%">
                <img src="../../assets/login/Lenovo-logo.png" alt="" id="LenovoLogo">
                <div id="login_left_content">
                    <h1>{{ system_name }}</h1>
                    <h2>{{ machine_name }}</h2>
                    <ul>
                        <li><div class="infoContentLeft">System Events</div><div class="infoContentRight"></div></li>
                        <li><div class="infoContentLeft">Machine Type</div><div class="infoContentRight">{{ machine_typemodel }}</div></li>
                        <li><div class="infoContentLeft">Serial Number</div><div class="infoContentRight">{{ serial_number }}</div></li>
                        <li><div class="infoContentLeft">Power State</div><div class="infoContentRight">{{ powerState }}</div></li>
                        <li><div class="infoContentLeft">BMC IP</div><div class="infoContentRight">{{ ipv4_address }}</div></li>
                        <li><div class="infoContentLeft">Location</div><div class="infoContentRight">{{ location }}</div></li>
                    </ul>
                </div>
                <div id="login_left_bottom_info">
                    <div>
                        <img src="../../assets/login/ThinkSystem-logo.png" alt="">
                        <p></p>
                    </div>
                </div>
            </el-aside>
            <el-container width="41.4%;">
                <el-main>
                    <div id="login_right_logo_div">
                        <img src="../../assets/XCC-logo.png" alt="">
                    </div>
                        <BaseInput :disabled="false" :value.sync="username" placeholder="User name"></BaseInput>
                        <BaseInput :disabled="false" :value.sync="password" placeholder="Password" type="password"></BaseInput>
                    <div class="loginErrMsg">
                        <el-alert :title="errMsg" type="info" effect="dark" v-show="errMsg !== ''" :closable="false"></el-alert>
                    </div>
                    <div class="loginBtn">
                        <el-button type="info" @click="signin()">Login</el-button>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import API from '../../api';
import BaseInput from '../../components/base/base-input/BaseInput.vue'
export default {
    data() {
        return {
            username: '',
            password: '',
            loginData: {},
            errMsg: '',
            system_name: '',
            machine_name: '',
            serial_number: '',
            machine_typemodel: '',
            ipv4_address: '',
            location: ''
        }
    },
    components: {
        BaseInput
    },
    computed: {
        powerState() {
            if(this.$store.state.powerState === 0) {
                return 'On';
            } else if(this.$store.state.powerState === 1) {
                return 'Off';
            } else {
                return '';
            }
        }
    },
    methods: {
        signin(){
            API.Login.signIn({'username':this.username,'password':this.password}).then(res => {
                console.log(res.data);
                // 如果有toekn
                if(undefined != res.data.access_token){
                    this.loginData["loginStatus"] = true;
                    this.loginData["userName"] = this.username;
                    this.loginData["token"] = res.data.access_token;
                    if(undefined !== res.data.reason){
                        if(res.data.reason == 1){
                            //password expired
                            this.errMsg = 'Password expired';
                        }
                        else if(res.data.reason == 2){
                            //first time login need change password
                            this.errMsg = 'First time login need change password';
                        }
                        else if(res.data.reason == 3){
                            //sha256 type password expired
                            this.errMsg = 'sha256 type password expired';
                        }
                        else if(res.data.reason == 4){
                            //NULL-PASSWORD user need to create the password. 
                            this.errMsg = 'NULL-PASSWORD user need to create the password.';
                        }
                        else if(res.data.reason == 5){
                            // user sessions has reached its maximum. 
                            this.errMsg = 'User sessions has reached its maximum. ';
                        }
                    }
                    else{
                        //login succeed
                        localStorage.setItem('usrInfo', JSON.stringify(this.loginData));
                        sessionStorage.setItem('usrInfo', JSON.stringify(this.loginData));
                        sessionStorage.setItem('token', this.loginData['token']);
                        this.$store.commit('changeLoginStatus', true);
                        localStorage.setItem('tier', 1);
                        API.Providers.restGetTire().then(res => {
                            console.log(res.data);
                            this.$store.commit('changeTier', res.data.tier);
                            localStorage.setItem('tier', res.data.tier);
                            console.log("tier is :" + this.$store.state.tier);
                        })
                        this.$router.push({ path:'/home'})
                    }
                }else{
                    console.log('wrong username or password')
                }
            });
        },
        restLoginSysDetailInfo() {
            API.Providers.restHeader().then(res => {
                this.system_name = res.data.items[0].system_name;
                this.machine_name = res.data.items[0].machine_name;
                this.serial_number = res.data.items[0].serial_number;
                this.machine_typemodel = res.data.items[0].machine_typemodel;
                this.ipv4_address = res.data.items[0].ipv4_address;
                this.location = res.data.items[0].location;
            })
        },
        restPowerActionList() {
            API.Dataset.restPowerActionList().then(res => {
                this.$store.commit('changePowerState', res.data['items'][0]['power_state']);
            })
        }
    },
    mounted() {
        this.restLoginSysDetailInfo();
        this.restPowerActionList();
    }
}
</script>

<style scoped lang="scss">
.el-aside {
    background-color: rgba(51, 63, 75, 1);
    color: #fff;
    text-align: center;
    line-height: 200px;
    position: relative;
    text-align: left;
    #LenovoLogo{
        width: 50px;
        height: 150px;
        position: absolute;
        left: 0;
    }
    #login_left_content{
        width: 70%;
        min-height: 350px;
        position: absolute;
        top: 140px;
        left: 15%;
    }
    #login_left_bottom_info{
        position: absolute;
        bottom: 30px;
        width: 100%;
        height: 100px;
        div{
            
        }
    }
    h1{
        line-height: 1.3;
        height: 60px;
        font-size: 28px;
        margin: 0;
    }
    h2{
        margin: 0;
        line-height: 1;
        height: 30px;
        font-size: 20px;
    }
    ul{
        margin-top: 20px;
        position: relative;
        li{
            font-size: 16px;
            line-height: 40px;
            height: 40px;
            display: flex;
            .infoContentLeft{
                flex: 4;
            }
            .infoContentRight{
                flex: 3;
            }
        }
    }
}
.el-main {
    background-image: url(../../assets/login_right_bg.png);
    color: #fff;
    text-align: center;
    line-height: 160px;
}
#login_right_logo_div{
    img{
        height:96px;
        width:400px;
    }
}
.base-input{
    line-height: 60px;
    /deep/.el-input__inner{
        height: 40px;
        width: 300px;
    }
}
.loginErrMsg {
    width: 100%;
    height: 40px;
    margin-top: 10px;
    position: relative;
    .el-alert--info.is-dark{
        background-color:#f8d7da;
        color: #721c24;
    }
    .el-alert {
        width: 300px;
        height: 40px;
        position: absolute;
        height: 40px;
        left: 50%;
        margin-left: -150px;
        text-align: center;
    }
}
.loginBtn{
    margin-top: 20px;
    height: 40px;
    position: relative;
    .el-button.el-button--info{
        width: 300px;
        position: absolute;
        left: 50%;
        margin-left: -150px;
    }
}
</style>