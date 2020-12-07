<template>
	<div id="app" v-if="loginState">
		<router-view />
	</div>
	<div v-else class="login">
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
</style>
