// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import Element from 'element-ui'
import VueRouter from 'vue-router'
import './css/media.css'
import './css/base.css'
Vue.use(VueRouter)
Vue.use(Vuex) 
Vue.use(Element)
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
