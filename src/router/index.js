import Vue from 'vue'
import Router from 'vue-router'
import { resolve } from 'url';
import { log } from 'util';
// const Home=resolve=>require(['@/components/Home'],resolve);
// const Flash=resolve=>require(['@/components/pages/flash/flash'],resolve);
// const Market=resolve=>require(['@/components/pages/market/market.vue'],resolve);
import Home from '@/components/Home'
import Flash from '@/components/pages/flash/flash'
import Market from '@/components/pages/market/market.vue'
Vue.use(Router)
const router= new Router({
  routes: [
    {
      path:'/',redirect:'home'
    },
    {
      path: '/home',
      name: 'Home', 
      component: Home
    },
    {
      path:'/flash',
      name:'flash',
      component:Flash
    },
    {
      path:'/market',
      name:'market',
      component:Market
    }
  ],
  mode:'history',
});
router.beforeEach((to,from,next)=>{
next()
})
export default router