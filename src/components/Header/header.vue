<template>
  <div>
    <header id="head">
      <div id="head_main">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          id="headleft"
        >
                  <div class="logo">
            </div>
          <el-menu-item index="Home" class="navcontent">
           <router-link :to="{name:'Home'}">首页</router-link>
          </el-menu-item>
          <el-menu-item index="flash" class="navcontent">
            <router-link :to="{name:'flash'}">7*24快讯</router-link>
          </el-menu-item>
          <el-menu-item index="market" class="navcontent">
            <router-link :to="{name:'market'}">行情</router-link>
          </el-menu-item>
        </el-menu>
        
        <div id="headerright">
          <div class="headerright">搜索</div>
          <div class="headerright">APP</div>
          <div class="headerright">金色专栏</div>
          <div class="headerright">user</div>
        </div>
      </div>
    </header>
  </div>
</template>
<style scoped>
#head {
  width: 100%;
  height: 60px;
  line-height: 60px;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #eaeaef;
  z-index: 10;
  background-color: #fff;
}
#head_main {
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#headleft {
  width: 60%;
  height: 60px;
  display: flex;
  font-size: 16px;
  justify-content: space-between;
  align-items: center;
}
#headleft 
.logo {
  width: 60px;
  height: 60px;
  background: url("https://resource.jinse.com/www/v3/img/logo.svg?v=1810")
    no-repeat;
  background-size: 60px 60px;
}
.navcontent {
  color: #000;
}
.navcontent:hover {
  color: red;
  border-bottom: 2px solid red;
}
.navcontent:active {
  border-bottom: 2px solid red;
}
#headerright {
  display: flex;
  margin-right: 15px;
}
.headerright {
  margin-right: 20px;
  color: #999;
}
.shadown{
    width: 100%;
    height: 100%;
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    position: absolute;
}
</style>

<script>
export default {
  data() {
    return {
      title: [
          {name:"首页",routename:"Home"},
          {name:"7*24快讯",routename:"flash"},
          {name:"行情",routename:"market"}
          ],
      list: [1, 2, 3],
      activeIndex: "Home"
    };
  },
  mounted() {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    //   this.activeIndex=keyPath
    },
  },

};
</script>