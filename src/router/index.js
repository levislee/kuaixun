import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import shop from '../components/pages/shop.vue'
import { resolve } from 'url';
const shop=resolve=>require(['@/components/pages/shop'],resolve);
<<<<<<< HEAD
const Home=resolve=>require(['@/components/Home'],resolve);
=======
const Home=resolve=>require(['@/components/HelloWorld'],resolve);
>>>>>>> 207a23ef61342ae14d444d68a53046d2ac7849cf
// const HelloWorld=resolve=require(['@/components/HelloWorld'],resolve)
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Home
    },
    {
      path:'/shop',
      name:'shop',
      component:shop
    }
  ]
})
