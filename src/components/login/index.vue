<template>
    <div style="height: 100%;">
        <el-container style="height:100%">
            <el-aside width="58.6%">login left</el-aside>
            <el-container width="41.4%;">
                <el-main>
                    <div class="loginUsername">
                        <el-input v-model="username" placeholder="User name"></el-input>
                    </div>
                    <div class="loginPwd">
                        <el-input placeholder="Password" v-model="password" show-password></el-input>
                    </div>
                    <div class="loginErrMsg">
                        <el-alert :title="errMsg" type="info" effect="dark" v-show="errMsg !== ''" :closable="false"></el-alert>
                    </div>
                    <div>
                        <el-button type="info" @click="signin()">Login</el-button>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import API from '../../api'
export default {
    data() {
        return {
            username: '',
            password: '',
            loginData: {},
            errMsg: ''
        }
    },
    methods: {
        signin: function(){
            console.log(this.$store.state.loginStatus)
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
                        API.Login.restGetTire().then(res => {
                            console.log(res.data);
                            this.$store.commit('changeTier', res.data.tier);
                            localStorage.setItem('tier', res.data.tier);
                            console.log("tier is :" + this.$store.state.tier);
                        })
                        this.$router.push({ path:'/home'})
                    }
                }else{
                    // $scope.hideErrMsg();
                    // $scope.loginSysDetailInfo.loginErr = true;
                }
            });
        }
    }
}
</script>

<style scoped lang="scss">
.el-aside {
    background-color: rgba(51, 63, 75, 1);
    color: #fff;
    text-align: center;
    line-height: 200px;
}
  
.el-main {
    background-image: url(../../assets/login_right_bg.png);
    color: #fff;
    text-align: center;
    line-height: 160px;
}
.loginPwd, .loginUsername {
    height: 40px;
    margin-bottom: 20px;
    .el-input {
        height: 40px;
        position: relative;
        .el-input__inner {
            position: absolute;
            top: 0;
            left: 0;
        }
    }
}
.loginErrMsg {
    width: 100%;
    height: 40px;
    position: relative;
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
</style>