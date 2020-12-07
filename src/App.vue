<template>
	<div id="app" v-if="loginState">
		<router-view />
	</div>
	<div v-else id="login">
		<router-view />
	</div>
</template>

<script>
export default {
	name: 'App',
	data () {
		return {
		};
	},
	computed: {
		loginState: function () {
			return this.$store.state.loginState;
		}
	}
}
</script>

<style>
    body,html,#app,#login{
        height: 100%;
        margin: 0;
        bottom: 0;
    }
</style>
