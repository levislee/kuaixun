<template>
  <div id="market">
    <div class="market_head">数字货币TOP100</div>
    <div class="market_main market_mainhead">
      <div class="market_item small">名称</div>
      <div class="market_item txtleft">排名</div>
      <div class="market_item">流通市值</div>
      <div class="market_item">价值</div>
      <div class="market_item">流通数量</div>
      <div class="market_item">成交额(24h)</div>
      <div class="market_item">涨幅(24h)</div>
    </div>
    <div class="market_main">
      <div class="market_item small">名称</div>
      <div class="market_item txtleft blue">排名</div>
      <div class="market_item">流通市值</div>
      <div class="market_item blue">价值</div>
      <div class="market_item">流通数量</div>
      <div class="market_item blue">成交额(24h)</div>
      <div class="market_item red">涨幅(24h)</div>
    </div>
  </div>
</template>
<style scoped>
#market {
  width: 1170px;
  margin: 0 auto;
}
.market_head {
  height: 60px;
  line-height: 60px;
  font-weight: 900;
  text-align: left;
}
.market_main {
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-around;
  align-items: center;
  padding-right: 1rem;
}
.market_item {
  flex: 3
}
.small{
  flex: 2
}
.txtleft{
  text-align: left;
}
.market_small {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: left;
}
.market_mainhead {
  background-color: black;
  color: white;
}
.blue{
  color: blue;
}
.red{
  color: red
}
</style>
