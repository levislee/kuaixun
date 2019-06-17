<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" class="flashmain">
    <el-tab-pane label="快讯" name="first">
      <div class="analyse" v-for="item in type" :key="item">
        <div class="grade"></div>
        <div class="time">18:10</div>
        <div class="analyselist">
          <div class="analysetitle">
            <span class="only">独家</span>
            <span class="istitle">行情|数字货币行情播报</span>
          </div>
          <div class="analysemain">
            <span>据行情显示，BTC当前报价7952美元，针对当前的走势，分析师Potter表示BTC从5月30号大幅拉升至9000美元上方然后掉头回落至目前8000美元下方整体走势结构一直处于下降通道内震荡下行，从盘面上能看出近期BTC在2次下探触及通道下边线获得支撑后迎来了阶段反弹，4小时MACD快慢线0轴下方金叉后并向上发散，币价也快速向上拉起并向通道中轨贴近，但我们发现BTC在尝试突破中轨压制时量能并未持续放大，依旧处于缩量态势，而且4小时多次形成向上插针至布林上边线的形态，说明上方存在一定的空头抛盘，短期内直接向上形成有效突破的可能性不大，近期还将延续弱势震荡走势，后续若能放量突破通道中轨与布林上边线双压制，BTC还将有进一步上攻通道上边线的机会。长期周线级别来看，从4月初至目前的多头趋势并未明确逆转，本周为这轮趋势反弹的首次调整，后续下探寻求支撑后或将还有波段上涨的可能。近期支撑7850美元，压力8100美元</span>
            <img src="https://img.jinse.com/1922429_rate.png" alt v-if="item==1">
            <span v-else-if="item==2">原文链接</span>
            <div class="market-data" v-else-if="item==3">
              <div class="market-data-list" v-for="items in 6" :key="items">
                <div class="market-title">WAX</div>
                <div>游戏币领涨</div>
                <ul class="market-up">
                  <li>$0.12</li>
                  <li>↑</li>
                </ul>
                <div class="market-change">
                  <div class="market-change-list" v-for="item in 3" :key="item">
                    <p>+44.94%</p>
                    <p>24H涨幅</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="analysebottom">
            <ul class="analyseBtmain">
              <li>利好 60</li>
              <li>利空 55</li>
              <li>分享</li>
            </ul>
          </div>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="分析" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="动态" name="third">角色管理</el-tab-pane>
  </el-tabs>
</template>
<style>
.flashmain .el-tabs__nav {
  margin-left: 160px;
}
.flashmain .el-tabs__nav-wrap::after {
  display: none;
}
.flashmain .el-tabs__item {
  font-size: 18px;
  color: #999;
}
.flashmain .el-tabs__item:hover {
  color: #f29700;
}
.flashmain .el-tabs__item.is-active {
  color: black;
}
.flashmain .el-tabs__active-bar {
  color: #f29700;
  background-color: #f29700;
}
.flashmain .el-tabs__content {
  text-align: left;
  margin-top: 60px;
  overflow: visible;
}
.flashmain .el-tabs__content {
  width: 770px;
}
.analyse {
  width: 684px;
  position: relative;
  border-left: 2px solid #ddccdd;
  display: flex;
  justify-content: flex-start;
  padding-bottom: 20px;
}
.grade {
  width: 9px;
  height: 9px;
  background: #f29700;
  border-radius: 50%;
  position: absolute;
  left: -5px;
  top: 8px;
  z-index: 999;
}
.time {
  margin-left: 20px;
  margin-right: 30px;
}
.only {
  width: 42px;
  height: 22px;
  line-height: 22px;
  color: #fff;
  font-weight: 600;
  text-align: center;
  display: inline-block;
  float: left;
  margin-right: 6px;
  margin-top: 1px;
  background-color: #f29700;
}
.istitle {
  font-weight: 700;
  font-size: 16px;
}
.analysemain {
  width: 684px;
  margin-top: 15px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
}
.analysemain img {
  display: block;
  width: 210px;
  height: 85px;
  transition: transform 0.5s;
}
.analysemain img:hover {
  transform: scale(1.05);
}
.market-data {
  width: 770px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.market-data-list{
   width: 210px;
    background-color: #fff;
  padding: 15px;
  box-sizing: border-box;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  margin-bottom: 15px;
  margin-right: 15px;
}
.market-up {
  display: flex;
  justify-content: space-between;
}
.market-up li:nth-child(1) {
  font-size: 24px;
}
.market-up li:nth-child(2) {
  color: #f29700;
  font-weight: 900;
}
.market-change {
  display: flex;
  justify-content: flex-start;
}
.market-change-list {
  margin-top: 10px;
}
.market-change-list p:nth-child(1) {
  color: red;
}
.analysebottom {
  position: absolute;
  bottom: 0;
  right: 0;
}
.analyseBtmain {
  width: 170px;
  height: 26px;
  display: flex;
  justify-content: space-around;
}
</style>

<script>
export default {
  data() {
    return {
      activeName: "first",
      type: [1, 2, 3]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>