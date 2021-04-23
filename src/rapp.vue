<template>
	<div id="app">
        <el-container id="appContainer" v-if="loginStatus && routePath !== '/remote'">
            <el-aside width="210px">
                <div id="XCCLogo">
                    <img src="./assets/XCC-logo.png" alt="">
                </div>
                <leftMenu></leftMenu>
            </el-aside>
            <el-container id="imm3Content">
                <el-header>
                    <topMenu></topMenu>
                </el-header>
                <el-main id="appMain">
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
        <router-view v-else/>
	</div>
</template>

<script>
import leftMenu from './components/leftMenu.vue';
import topMenu from './components/topMenu.vue';
import API from '../../api';
export default {
    name: 'App',
    data () {
        return {
            heartbeat_count: 0
        };
    },
    // mounted() {
    //     setInterval(() => {
    //         if(this.loginStatus && sessionStorage.token) {
    //             API.Providers.heartbeatTimer().then(() => {
    //                 this.heartbeat_count = 0;
    //             }, () => {
    //                 this.heartbeat_count++;
    //                 this.heartbeat_count = this.heartbeat_count > 27 ? 0 : this.heartbeat_count++;
    //                 this.$store.commit('changeUserInfo', '');
    //                 console.log('clear token after continuous heart beat failure');
    //             })
    //         }
    //     }, 10000);
    // },
    computed:{
        loginStatus() {
            return this.$store.state.loginStatus;
        },
        routePath() {
            return this.$route.path;
        }
    },
    components:{
        leftMenu,
        topMenu
    }
}
</script>

<style lang="scss">
body,html,#app,#appContainer,#appMain{
    height: 100%;
    margin: 0;
    padding: 0;
    #imm3Content{
        background-color: #F3F3F6;
        padding: 0 30px 0 40px;
    }
}
.el-aside{
    #XCCLogo{
        width: 190px;
        margin: 0 auto;
        img{
            width:190px;
            height:48px;
        }
    }
    background-color: #333F4B;
}
.el-header{
    height: 48px!important;
    padding: 0!important;
}
a{
    text-decoration:none;
}
</style>
