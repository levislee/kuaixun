<template>
  <div v-if="islogin[0]">
    <div class="shadown"></div>
    <div id="login">
      <img src="//resource.jinse.com/www/v3/img/login.png?v=1858" alt />
      <div class="loginmain">
        <i class="el-icon-close" @click="loginout()"></i>
        <div class="logintitle">
          <div :class="selectway?'rll-login':''" @click="select('login')">登录</div>
          <div :class="selectway?'':'rll-login'" @click="select('register')">注册</div>
        </div>
        <div class="formitem formtell">
          <div class="photo_left">
            +86
            <span class="el-icon-caret-bottom"></span>
          </div>
          <input
            type="text"
            placeholder="请输入手机号码"
            v-model="tell"
            class="forminput"
            @blur="testtell()"
          />
        </div>
        <!--密码登录-->
        <div class="formitem" v-if="testway">
          <input type="password" class="forminput" placeholder="请输入密码" v-model="password" />
          <span class="el-icon-view"></span>
        </div>
        <!--验证码登录-->
        <div class="formitem" v-if="!testway">
          <input type="password" class="forminput" placeholder="请输入图形验证码" v-model="code" />
          <span class="el-icon-view"></span>
        </div>
        <div class="formitem" v-if="!testway">
          <input type="password" class="forminput" placeholder="请输入6位数短信验证码" v-model="idcode" />
          <div class="getcode">获取验证码</div>
        </div>
        <!--注册-->
        <div class="formitem" v-if="!selectway">
          <input type="password" class="forminput" placeholder="请输入密码" v-model="password" />
          <span class="el-icon-view"></span>
        </div>
        <div class="formitem" v-if="!selectway">
          <input type="password" class="forminput" placeholder="请输入密码" v-model="confirmpassword" />
          <span class="el-icon-view"></span>
        </div>
        <!--selectway-->
        <div class="way">
          <span v-if="testway" @click="istestway()">手机验证码登录</span>
          <span v-else @click="istestway()">账号密码登录</span>
          <span>忘记密码?</span>
        </div>
        <div class="submit" :class="tell&&password||code&&idcode?'issubmit':'nosubmit'" v-if="selectway">登录</div>
         <div class="submit" :class="tell&&code&&idcode&&password&&confirmpassword?'issubmit':'nosubmit'" v-if="!selectway">注册</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectway: true,
      testway: true,
      tell: null,
      password: null,
      code: null,
      idcode: null,
      confirmpassword:null
    };
  },
  props: ["islogin"],
  methods: {
    loginout() {
      this.$set(this.islogin, 0, false);
    },
    select(option) {
      this.testway=false
      if (option == "login") {
        this.selectway = true;
      } else {
        this.selectway = false;
      }
    },
    /**验证手机号码**/
    testtell() {
      if (!/^1[3456789]\d{9}$/.test(this.tell)) {
        alert("手机号码有误，请重填");
        return false;
      }
    },
    /**验证方式**/
    istestway() {
      this.testway = !this.testway;
      if (this.password) {
        this.password = null;
      } else {
        this.code = null;
      }
    }
  }
};
</script>
<style scoped>
#login {
  width: 740px;
  height: 540px;
  background: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000000;
  display: flex;
  justify-content: flex-start;
}
#login img {
  width: 340px;
  height: 540px;
}
.loginmain {
  width: 360px;
  height: 500px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.el-icon-close {
  font-size: 30px;
  align-self: flex-end;
}
.logintitle {
  width: 60%;
  height: 45px;
  margin: 0 auto;
  line-height: 45px;
  display: flex;
  justify-content: space-around;
  font-size: 24px;
  cursor: pointer;
}
.rll-login {
  font-weight: 600;
  border-bottom: 2px solid #333;
}
.formitem {
  width: 80%;
  height: 59px;
  border-bottom: 1px solid #e1e1e1;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.formtell {
  justify-content: flex-start;
}
.photo_left {
  height: 30px;
  line-height: 30px;
  margin-right: 20px;
}
.forminput {
  width: 60%;
  height: 30px;
  outline: none;
  border: none;
}
.way {
  width: 80%;
  height: 59px;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.submit {
  width: 344px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  margin: 7px auto;
  border-radius: 4px;
  font-size: 16px;
}
.issubmit {
  background: #f29700;
  color: #fff;
}
.nosubmit {
  background: #edf0f2;
  color: #b2bac2;
}
</style>
