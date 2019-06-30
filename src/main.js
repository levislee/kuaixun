
import App from './App'
import Vue from 'vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import elementUI from 'element-ui'
Vue.use(elementUI);
Vue.use(Vuex);
Vue.use(VueRouter);
import './css/media.css'
import './css/base.css'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import router from './router'
Vue.config.productionTip = false
 import api from './js/api_config.js'
 import axios from './js/axios_config' 
 Vue.prototype.$htttp=axios;
 Vue.prototype.$api=api;
 //解决移动端点击300ms延迟问题
 import FastClick from 'fastclick'
if('addEventListener' in document){
   document.addEventListener('DOMContentLoaded',function(){
     FastClick.attach(document.body)
   },false)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
