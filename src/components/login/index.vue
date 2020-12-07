<template>
    <div style="height: 100%;">
        <el-container style="height:100%">
            <el-aside width="58.6%">login left</el-aside>
            <el-container width="41.4%;">
                <el-main>
                    <el-input v-model="username" placeholder="User name"></el-input>
                    <el-input placeholder="Password" v-model="password" show-password></el-input>
                    <el-button type="info" @click="signin()">Login</el-button>
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
            loginData: {}
        }
    },
    methods: {
        signin: function(){
            API.Login.signIn({'username':this.username,'password':this.password}).then(res => {
                console.log(res.data);
                // 如果有toekn
                if(undefined != res.data.access_token){
                    this.loginData["loginStatus"] = true;
                    this.loginData["userName"] = this.username;
                    this.loginData["token"] = res.data.access_token;
                    if(undefined != data.reason){
                        localStorage.setItem('tmpToken', res.data.access_token;);
                        $localStorage.tmpTokenInUse = true;
                        var restImmUserGlobal = loginService.restImmUserGlobal();
                        restImmUserGlobal.get(function(data){
                            $scope.minPwdLength = data['items'][0].pass_min_length;
                            if($scope.minPwdLength == 0){
                                $scope.minPwdLength = 10;
                            }
                            $localStorage.tmpTokenInUse = false;
                        });
                        if(data.reason == 1){
                            //password expired
                            $scope.hideErrMsg();
                            $scope.loginMode = 2;
                            $scope.loginSysDetailInfo.loginPwdExpireErr = true;
                        }
                        else if(data.reason == 2){
                            //first time login need change password
                            $scope.hideErrMsg();
                            $scope.loginMode = 2;
                            $scope.loginSysDetailInfo.loginChangePwdErr = true;
                        }
                        else if(data.reason == 3){
                            //sha256 type password expired
                            $scope.hideErrMsg();
                            $scope.loginSysDetailInfo.sha256PwdChangeErr = true;
                            return;
                        }
                        else if(data.reason == 4){
                            //NULL-PASSWORD user need to create the password. 
                            $scope.hideErrMsg();
                            $scope.loginSysDetailInfo.nullPwdChangeErr = true;
                            return;
                        }
                        else if(data.reason == 5){
                            // user sessions has reached its maximum. 
                            $scope.hideErrMsg();
                            $scope.loginSysDetailInfo.loginMaxSessionErr = true;
                            return;
                        }
                        $scope.loginTmpInfo = angular.copy(loginData);						
                        return;
                    }
                    else{
                        //login succeed
                        $("#loginPage").hide();
                        $("#homeView").show();
                        $localStorage.tmpToken = {};
                        delete $localStorage.tmpToken;
                        $localStorage.tmpTokenInUse = false;
                        delete $localStorage.tmpTokenInUse;
                        tokenCacheService.setTokenCache(loginData);
                        $localStorage.tier = 1;
                        //clear cusomize table
                        delete $localStorage.cusTable;
                        delete $localStorage.cusTableAd;
                        restGetTire.get(function(data){
                            if(data['return'] == 0){
                                $rootScope.tier = data.tier;
                                $localStorage.tier = data.tier;
                                console.log("tier is :"+$rootScope.tier);
                            }
                        });
                        $location.path("/home");
                    }
                }else{
                    $scope.hideErrMsg();
                    $scope.loginSysDetailInfo.loginErr = true;
                }
            });
        }
    }
}
</script>

<style scoped>
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
</style>