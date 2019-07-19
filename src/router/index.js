
import Router from 'vue-router'
const Home=resolve=>require(['@/components/Home'],resolve);
const Flash=resolve=>require(['@/components/pages/flash/flash'],resolve);
const Market=resolve=>require(['@/components/pages/market/market.vue'],resolve);
const router= new Router({
  mode:'history',
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
});
router.beforeEach((to,from,next)=>{
next()
})
export default router