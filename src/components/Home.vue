<template>
  <div id="home">
    <!--顶部走马灯-->
    <app-slider></app-slider>
    <div id="bijiasuo">
         <div class="bijiasuoitem" v-for="(item,index) in bijiasuo" :key="index">
           <img src="https://img.jinse.com/1404375" alt="">
           <ul>
             <li>毕加索</li>
             <li>新锐交易所 资产对标</li>
           </ul>
         </div>
    </div>

     <div id="middle">
           <!---中部走马灯-->
           <caroucel></caroucel>
           <ul id="middlecenter">
             <li class="middlecentertop">
              <img src="https://img.jinse.com/1897675_image32.png" alt="" width="200px" height="127px">
             </li>
             <li>
               <img src="https://img.jinse.com/1600997_image32.png" alt="" width="200px" height="127px">
             </li>
           </ul>
            <ul id="middleright">
              <li class="middlerighttop">
                <p>风险提示：防范以“虚拟货币”“区块链”名义进行非法集资的风险——银保监会等五部门</p>
              </li>
              <li class="middlerightcenter">
                <p>据国家互联网信息办公室《区块链信息服务管理规定》要求，“区块链信息服务提供者”应积极在区块链信息服务备案管理系统备案。</p>
              </li>
            </ul>
    </div>
    <!--中下部分导航-->
     <div id="bottomnav">
          <div id="bottomnavleft">
             <bottom-nav></bottom-nav>
          </div>
          <div id="bottomnavright"></div>
     </div>
  </div>
</template>

<script>
import appSlider from './pages/Slider/Slider'
import caroucel from './pages/Slider/caroucel'
import bottomNav from './pages/commen/Bttomnav'
export default {
  data () {
    return {
      bijiasuo:[1,2,3,4,1,1,1,1,1,1,1,1]
    } 
  },
  components:{
    appSlider,
    caroucel,
    bottomNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home{
      margin: 0 auto;
    width: 1170px;
}
#bijiasuo{
  display: flex;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  background: #fafafa;
  padding-top: 20px;
  padding-bottom: 20px;
}
.bijiasuoitem{
  width: 160px;
  height: 52px;
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  margin-right: 28px;
  text-align: left;
}
.bijiasuoitem img{
  width: 32px;
  height: 32px;
}
/**中间middle**/
#middle{
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
#middlecenter{
  width: 200px;
  margin-left: 10px;
  margin-right: 20px;
}
.middlecentertop{
  margin-bottom: 20px;
}
#middleright{
  width: 370px;
  font-size: 14px
}
.middlerighttop{
  border: #DCDCDC 1px solid;
    border-radius: 4px 4px 0 0;
    padding: 12px 16px;
    margin-bottom: 0px;
    border-bottom: none
}
.middlerightcenter{
   border: #DCDCDC 1px solid;
    border-radius: 4px 4px 0 0;
    height: 113px;
    padding: 12px 16px;
    margin-bottom: 0px;
}
#bottomnav{
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}
#bottomnavleft{
  width: 770px;
}
</style>
