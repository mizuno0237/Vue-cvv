import * as Static from './mutations_type';

export default {
    [Static.setToken](state, data) {
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
    },
    [Static.changeLoginInfo](state, data) {
        state['loginInfo'] = data;
    },
    [Static.changeUserInfo](state, data) {
        state['userInfo'] = data;
    }
}