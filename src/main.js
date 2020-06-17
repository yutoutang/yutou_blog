import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import axios from 'axios';
import Suivue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css'

Vue.config.productionTip = false;
Vue.use(Suivue);
Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
