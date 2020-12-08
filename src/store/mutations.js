export default {
    setToken(state, data) {
        state['token'] = data;
    },
    changeLoginStatus(state, data) {
        state['loginStatus'] = data;
    },
}