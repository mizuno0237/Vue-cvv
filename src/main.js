import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import moment from 'moment';
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$moment = moment;
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store
})
