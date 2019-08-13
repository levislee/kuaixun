
import App from './App'
import Vue from 'vue'
import VueRouter from 'vue-router';
import VueLazyload from 'vue-lazyload'
import elementUI from 'element-ui'
import './config/rem';
import '../node_modules/element-ui/lib/theme-chalk/index.css'
Vue.use(VueLazyload)
Vue.use(elementUI);
Vue.use(VueRouter);
import 'babel-polyfill'
import './css/media.css'
import './css/base.css'

import router from './router'
import axios from './js/axios_config.js';
import api from './js/api_config.js';
Vue.prototype.$http = axios;
Vue.prototype.$api = api;
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
