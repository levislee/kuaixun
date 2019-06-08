<template>
  <div>
    <header id="head">
      <div id="headleft">
        <div class="logo">
            <img src="https://resource.jinse.com/www/v3/img/logo.svg?v=1810" alt="">
        </div>
        <div id="headleftcontent">
                <div class="navcontent">
                    <router-link :to="{name:'Home'}">首页</router-link>
                    </div>              
                <div class="navcontent">
                    <router-link :to="{name:'flash'}">7*24快讯</router-link>
                    </div>                
                <div class="navcontent">首页</div>               
                <div class="navcontent">首页</div>
                <div class="navmore" @mouseenter="show()" @mouseleave="hidden(1)">下拉
                   <ul class="navmorecontent" ref="show">
                       <li>科研下载</li>
                       <li>科研下载</li>
                       <li>科研下载</li>
                       <li>科研下载</li>
                   </ul>
                </div>
        </div>
      </div>
      <div id="headerright">
          <div class="headerright">搜索</div>
           <div class="headerright">APP</div>
          <div class="headerright">金色专栏</div>
           <div class="headerright">user</div>
      </div>
    </header>
  </div>
</template>
<style scoped>
#head{
    height: 60px;
    display: flex;
    position: fixed;
    top: 0;
    justify-content: space-between;
    align-items:center;
    border-bottom: 1px solid #eaeaef;
    width: 100%;
    z-index: 1000;
    background-color: #fff;
}
#headleft{
    display: flex;
    height: 60px;
    justify-content: flex-start;
    align-items: center;
    margin-left: 15px;
}
.logo{
    margin-right: 35px;
}
.logo img{
    width: 140px;
    height: 26px;
}

#headleftcontent{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.navcontent{
    height: 22px;
    margin-left: 25px;
}
.navcontent:hover{
    color: red;
    border-bottom: 2px solid red;
}
.navmore{
    line-height: 18px;
    color: #d8d8d8;
    position: relative;
    top: 12px;
    height: 42px;
    text-align: center;
    width: 82px;
}
.navmorecontent{
    width: 94px;
    position: absolute;
    padding: 15px 20px;
    top: 40px;
    left: -28px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.5);
    border-radius: 3px;
    background: #fff;
    display: none;
    color: black;

}
#headerright{
     display: flex;
     margin-right: 15px;
}
.headerright{
    margin-right:20px;
    color: #999;
}
</style>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      title: ['首页','7*24快讯','行情','专题','活动','学院'],
      list: [1, 2, 3],
    };
  },
  mounted() {
  },
  methods: {
      show(){  
          this.$refs.show.style.display="block" ;       
      },
      hidden(leave){    
             if (leave==1) {
                 this.$refs.show.style.display="none"
             }
      },
  }
};
</script>