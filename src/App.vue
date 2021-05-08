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
import API from './api';
export default {
    name: 'App',
    data () {
        return {
            heartbeat_count: 0
        };
    },
    mounted() {
        setInterval(() => {
            if(this.loginStatus && sessionStorage.token) {
                API.Providers.heartbeatTimer().then(() => {
                    this.heartbeat_count = 0;
                }, () => {
                    this.heartbeat_count++;
                    if(this.heartbeat_count > 27) {
                        this.heartbeat_count = 0;
                        this.$store.commit('changeUserInfo', '');
                        this.$store.commit('setToken', '');
                        sessionStorage.token = '';
                        this.$store.commit('changeLoginStatus', false);
                        this.$message({
                            message: 'Disconnected from BMC. Please check BMC status.',
                            type: 'error'
                        })
                        console.log('clear token after continuous heart beat failure');
                        this.$router.push('/login');
                    }
                })
            }
        }, 10000);
    },
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

</style>
