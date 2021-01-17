export default {
    setToken(state, data) {
        state['token'] = data;
    },
    changeLoginStatus(state, data) {
        state['loginStatus'] = data;
    },
    changeTier(state, data) {
        state['tier'] = data;
    },
    changePowerState(state, data) {
        state['powerState'] = data;
    }
}