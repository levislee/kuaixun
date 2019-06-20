<template>
    <div>
        <div id="flashmain">
 
            <ul class="flashnav">
                <li  class="flashnavlist" v-for="item in 6" :key='item'>
                    <img src="https://img.jinse.com/1578092" alt="">
                    <div class="flashlistright">
                    <span class="flashnavlisttitle">Chainup</span>
                    <p class="flashnavlistmain">全球区块链技术服务商</p>
                    </div>
                </li>
            </ul>
 
            <div class="flashcontent">
                <div class="flash-left">
                        <ul class="title-left">
                            <li class="date">
                               <p>6月</p>
                               <p>06</p>
                            </li>
                            <li class="week">
                                <p>今天</p>
                                <p>星期四</p>
                            </li>
                        </ul>
                       <flash-main></flash-main>                       
                        <ul class="title-right">
                            <li>
                                <input type="checkbox" name="" id="protocol">
                               <span>解读</span>
                            </li>
                            <li>
                                喇叭
                            </li>
                            <li>
                                设置
                            </li>
                        </ul>
                </div>
                <!--右边-->
                <div class="flashright">
                   <link-list></link-list>
                    <flash-tabs></flash-tabs>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
  #flashmain{
      width: 1170px;
      margin: 0 auto;
  }
  .flashnav{
    background: #fafafa;
    width: 1170px;
    height: 67px;
    margin: 0 auto;
    padding-left: 10px;
    padding-right: 60px;
     box-sizing: border-box;
      display: flex;
      justify-content:space-between;
  }
  .flashnavlist{
      width: 160px;
      height: 67px;
      display: flex;
      align-items: center;
  }
  .flashnavlist img{
      width: 32px;
      height: 35px;
      float: left;
      margin-right: 5px;
  }
 .flashlistright{
     width: 120px;
     height: 32px;
     float: right;
     text-align: left;
 }
   .flashnavlisttitle{
      font-weight: 600;
      line-height: 12px;
  }
 .flashnavlistmain{
     font-size: 12px;
     font-weight: normal;
    color: rgb(102, 102, 102);
    line-height: 12px;
    overflow: hidden;
 }
 .flashcontent{
     width: 1170px;
     display: flex;
     justify-content: space-between;
     margin-top: 40px;
 }
 /**左边**/
 .flash-left{
     width: 770px;
     height: 44px;
     display: flex;
     justify-content: space-between;
     position: relative;
 }
 .title-left{
     width: 130px;
   display: flex;
   justify-content: flex-start;
    position: absolute;
    left: 0;
  border-right: 1px solid #dcdcdc;
 }
 .date{
     width: 40px;
     height: 44px;
     display: block;
     margin-right: 20px;
 }
 .date p:nth-child(1){
     background-color:#c4192d;
     display: block;
     width: 40px;
     height: 20px;
     border-radius: 8px 8px 0 0;
     color: #fff;
 }
 .date p:nth-child(2){
     display: block;
     width: 40px;
     height: 27px;
     font-size: 18px;
     font-weight: 600;
    border-radius: 0 0 6px 6px;
    border-left: 1px solid #dcdcdc;
    border-right: 1px solid #dcdcdc;
    border-bottom: 1px solid #dcdcdc;
 }
 .week{
     width: 44px;
     height: 44px;
 }
 .week p:nth-child(1){
         color: #333;
    font-weight: 700;
    font-size: 18px;
 }
 .week p:nth-child(2){
         color: #999;
    white-space: nowrap;
 }
 .title-right{
     width: 230px;
     height: 44px;
     position: absolute;
     right: 0;
     display: flex;
     justify-content:space-around;
    line-height: 44px;
 }
#protocol{
    vertical-align: middle;
}
/**右边**/
.flashright{
    width: 370px;
}
</style>
<script>
const flashMain=relove=>require(['./chidren/flashcontent.vue'],relove)
const linkList=relove=>require(['../../children/link.vue'],relove);
const flashTabs=relove=>require(['./chidren/flashtabs.vue'],relove)
import {loadMore} from '../../common/mixin.js'
export default {
    components:{
        flashMain,
        linkList,
        flashTabs,
    },
    mixins:[loadMore]
}
</script>


