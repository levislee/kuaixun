import Vue from 'vue'
import Router from 'vue-router'
import { resolve } from 'url';
const Home=resolve=>require(['@/components/Home'],resolve);
const Flash=resolve=>require(['@/components/pages/flash/flash'],resolve);

Vue.use(Router)
export default new Router({
  routes: [
    {
      path:'/',redirect:'/home'
    },
    {
      path: '/',
      name: 'Home', 
      component: Home
    },
    {
      path:'/flash',
      name:'flash',
      component:Flash
    }
  ]
})
