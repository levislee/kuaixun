<template>
  <div id="home">
    <!--顶部走马灯-->
    <app-slider></app-slider>

    <div id="bijiasuo">
      <div class="bijiasuoitem" v-for="(item,index) in bijiasuo" :key="index">
        <img src="https://img.jinse.com/1404375" alt>
        <ul>
          <li>毕加索</li>
          <li>新锐交易所 资产对标</li>
        </ul>
      </div>
    </div>
    <!---中部走马灯-->
    <div id="middle">
      <caroucel></caroucel>
      <ul id="middlecenter">
        <!--走马灯右边-->
        <li class="middlecentertop">
          <img src="https://img.jinse.com/1897675_image32.png" alt width="200px" height="127px">
        </li>
        <li>
          <img src="https://img.jinse.com/1600997_image32.png" alt width="200px" height="127px">
        </li>
      </ul>
      <ul id="middleright">
        <li class="middlerighttop">
          <p>风险提示：防范以“虚拟货币”“区块链”名义进行非法集资的风险——银保监会等五部门</p>
        </li>
        <li class="middlerightcenter">
          <p>据国家互联网信息办公室《区块链信息服务管理规定》要求，“区块链信息服务提供者”应积极在区块链信息服务备案管理系统备案。</p>
        </li>
        <li class="middlerightbootom">111订阅</li>
      </ul>
    </div>
    <!--中下部分导航-->
    <div id="content">
      <div id="content-left">
        <bottom-nav></bottom-nav>
      </div>
      <div id="content-right">
        <div class="link">
          <div class="link-list" v-for="item in 6" :key="item">
            <div class="link-left">
              <img src="https://img.jinse.com/1854243" alt>
            </div>
            <div class="link-right">
              <span class="link-id">ZT.COM</span>
              <span>邀请好友坐享高鹗1</span>
            </div>
          </div>
        </div>
        <!--快讯-->
        <div class="flash">
          <home-flash></home-flash>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const appSlider=resolve=>require(['./pages/Slider/Slider'],resolve);
const caroucel=resolve=>require(['./pages/Slider/caroucel'],resolve); 
const bottomNav=resolve=>require(['./children/buttomnav'],resolve); 
const homeFlash=resolve=>require(['./children/flash'],resolve); 
export default {
  data() {
    return {
      bijiasuo: [1, 2, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1]
    };
  },
  components: {
    appSlider,
    caroucel,
    bottomNav,
    homeFlash
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home {
  margin: 0 auto;
  width: 1170px;
}
#bijiasuo {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  background: #fafafa;
  padding-top: 20px;
  padding-bottom: 20px;
}
.bijiasuoitem {
  width: 160px;
  height: 52px;
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  margin-right: 28px;
  text-align: left;
}
.bijiasuoitem img {
  width: 32px;
  height: 32px;
}
/**中间middle**/
#middle {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
#middlecenter {
  width: 200px;
  margin-left: 10px;
  margin-right: 20px;
}
.middlecentertop {
  margin-bottom: 20px;
}
#middleright {
  width: 370px;
  font-size: 14px;
  position: relative;
}
.middlerighttop {
  border: #dcdcdc 1px solid;
  border-radius: 4px 4px 0 0;
  padding: 12px 16px;
  margin-bottom: 0px;
  border-bottom: none;
}
.middlerightcenter {
  border: #dcdcdc 1px solid;
  border-radius: 4px 4px 0 0;
  height: 113px;
  padding: 12px 16px;
  margin-bottom: 0px;
}
.middlerightbootom {
  position: absolute;
  width: 370px;
  height: 60px;
  border: none;
  padding: 0;
  cursor: pointer;
  background: linear-gradient(
    135deg,
    rgba(255, 196, 98, 1) 0%,
    rgba(243, 124, 0, 1) 100%
  );
  border-radius: 4px;
  bottom: -30px;
  text-align: center;
  line-height: 60px;
}
#content {
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
}
#content-left {
  width: 770px;
}
#content-right {
  width: 370px;
}
.link {
  width: 355px;
  height: 883px;
  padding-left: 15px;
  border: 1px solid #dcdcdc;
  margin-bottom: 50px;
}

.link-left {
  width: 40px;
  height: 40px;
  float: left;
  margin-right: 10px;
  padding: 13px 0;
}
.link-right {
  width: 278px;
  float: left;
  border-bottom: #dcdcdc 1px solid;
  padding: 13px 20px 13px 0;
  height: 40px;
  line-height: 40px;
  text-align: left;
}
.link-id {
  width: 87px;
  display: inline-block;
  margin-left: 10px;
  font-weight: bold;
}
</style>
