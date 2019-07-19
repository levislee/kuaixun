<template>
  <div>
    <header id="head">
      <div id="head_main">
            <div class="head_left">
                      <div class="logo">
          <img src="https://resource.jinse.com/www/v3/img/logo.svg?v=1810" alt />
        </div>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          id="head_name"
        >
          <el-menu-item index="Home" class="navcontent">
          <span>  <router-link :to="{name:'Home'}">首页</router-link></span>
          </el-menu-item>
          <el-menu-item index="flash" class="navcontent">
          <span>  <router-link :to="{name:'flash'}">7*24快讯</router-link></span>
          </el-menu-item>
          <el-menu-item index="market" class="navcontent">
          <span>  <router-link :to="{name:'market'}">行情</router-link></span>
          </el-menu-item>
        </el-menu>
            </div>
        <div id="headerright">
          <div class="headerright">搜索</div>
          <div class="headerright">APP</div>
          <div class="headerright">金色专栏</div>
          <div class="headerright" @click="login()">user</div>
        </div>
      </div>
    </header>
    <!--登录-->
    <app-login :islogin="islogin"></app-login>
  </div>
</template>
<script>
const appLogin = resolve => require(["../children/login"], resolve);
export default {
  components: {
    appLogin
  },
  data() {
    return {
      title: [
        { name: "首页", routename: "Home" },
        { name: "7*24快讯", routename: "flash" },
        { name: "行情", routename: "market" }
      ],
      list: [1, 2, 3],
      activeIndex: "Home",
      islogin: [false]
    };
  },
  mounted() {},
  methods: {
    handleSelect(key, keyPath) {},
    login() {
      this.$set(this.islogin, 0, true);
    }
  },
  created() {},
  watch: {
    $route: function() {
      console.log(this.$route.path);
      if (this.$route.path == "/home") {
        this.activeIndex = "Home";
      } else if (this.$route.path == "/flash") {
        this.activeIndex = "flash";
      } else if (this.$route.path == "/market") {
        this.activeIndex = "market";
      }
    }
  }
};
</script>
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
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.head_left{
    width: 60%;
  height: 60px;
  display: flex;
  justify-content:flex-start;
}
#head_name {
  width: 70%;
  height: 60px;
  display: flex;
  justify-content:space-between;
}
 .logo {
  width: 90px;
  height: 60px;
}
.logo img {
  width: 90px;
  height: 60px;
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
  align-self: flex-end;
  width: 20%;
  display: flex;
  justify-content: space-around
}
.headerright {
  color: #999;
}
</style>