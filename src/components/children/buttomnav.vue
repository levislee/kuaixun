<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" class="btmnav">
    <el-tab-pane label="头条" name="first">
        <div class="btnavlist" v-for="item in 8" :key="item">
            <div class="btnavimg"><img src="https://img.jinse.com/1898851_small.png" alt=""></div>
            <div class="btnavlistartical">
                <ul>
                    <li><h3>一文读懂block.one发布会：社交媒体Voice、EOS 2.0、硬钱包和Earn EOS</h3></li>
                    <li class="artical">block.one此次发布了三款新产品和一项更新，分别为：教育项目Earn EOS、硬钱包YubiKey、社交媒体应用Voice和EOS 2.0</li>
                    <li class="articalbottom"><span class="articalmsg"><span class="placement">置顶</span> Maxwell · 21小时前</span> <div class="visited">12345</div></li>
                </ul>
            </div>
        </div>
    </el-tab-pane>
    <el-tab-pane label="直播"  name="second">a22</el-tab-pane>
    <el-tab-pane label="新闻"   name="third">33</el-tab-pane>
    <el-tab-pane label="政策"   name="fourth">44</el-tab-pane>
        <el-tab-pane label="直播"  name="fifth ">22</el-tab-pane>
    <el-tab-pane label="新闻"   name="sixth">33</el-tab-pane>
    <el-tab-pane label="政策" name="seventh">44</el-tab-pane>
        <el-tab-pane label="直播" name="eighth">22</el-tab-pane>
    <el-tab-pane label="新闻" name="tenth">33</el-tab-pane>
    <el-tab-pane label="政策" name="eleventh ">44</el-tab-pane>
  </el-tabs>
</template>
<style>
.btmnav .el-tabs__item{
    font-size: 22px;
    color: #999;
}
.btmnav .el-tabs__item:hover{
    color: red;
}
.btmnav .el-tabs__item.is-active{
    color: black
}
.btmnav .el-tabs__active-bar{
    background-color: red ;
    width: 28px ;
}

.btnavlist{
    display: flex;
    justify-content: flex-start;
    margin-top: 20px;
}
.btnavimg{
    width: 270px;
    height: 170px;
    margin-right: 20px;
    overflow: hidden;
}
.btnavimg img{
    width: 270px;
    height: 170px;
    transition: transform 1s;
    }
.btnavimg img:hover{ 
     transform: scale(1.1)
}
.btnavlistartical{
    width: 467px;
    text-align: left;
    position: relative;
}
.btnavlistartical h3{
        line-height: 28px;
    margin-bottom: 6px;
    overflow: hidden;
    display: -webkit-box;
    display: -moz-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    box-orient: vertical;
    -webkit-line-clamp: 2
}
.artical{
    height: 66px;
        overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3
}
.articalbottom{
        position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
}
.placement{
    font-size: 14px;
    color: #e0051e;
    margin-right: 8px;
    border: 1px solid #e0051e;
    border-radius: 2px;
    width: 44px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    display: inline-block
}
</style>

<script>
  export default {
    data() {
      return {
        activeName: 'first',
      };
    },
    methods: {
      handleClick(tab, event) {
          console.log(tab);
          console.log(event);
          
      }
    }
  };
</script>