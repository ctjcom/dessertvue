import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入全局css样式
import './assets/css/normalize.css'
import './assets/css/base.css'
//配置axios
import axios from 'axios'
axios.defaults.baseURL="http://127.0.0.1:8080";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.axios=axios;
//引入Mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
//引入vant的icon图标
import { Icon } from 'vant';
import 'vant/lib/icon/local.css';
Vue.use(Icon);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
