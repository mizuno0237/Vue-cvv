<template>
	<div id="app">
        <el-container id="appContainer" v-if="loginStatus">
            <el-aside width="210px">
                <img src="./assets/XCC-logo.png" alt="">
                <leftMenu></leftMenu>
            </el-aside>
            <el-container id="imm3Content">
                <el-header>
                    header
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
export default {
	name: 'App',
	data () {
		return {
		};
	},
    computed:{
        loginStatus() {
            return this.$store.state.loginStatus
        }
    },
    components:{
        leftMenu
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
        padding-left: 40px;
    }
}
.el-aside{
    background-color: #333F4B;
    img{
        width:190px;
        height:48px;
        margin-left: 10px;
    }
}
.el-header{
    height: 48px;
}
a{
    text-decoration:none;
}
</style>
