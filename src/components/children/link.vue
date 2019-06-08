<template>
  <div>
    <div class="link" ref="linkheight">
      <div class="link-list" v-for="item in linklist" :key="item">
        <div class="link-left">
          <img src="https://img.jinse.com/1854243" alt>
        </div>
        <div class="link-right">
          <span class="link-id">ZT.COM</span>
          <span>邀请好友坐享高鹗</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.link {
  width: 355px;
  padding-left: 15px;
  border: 1px solid #dcdcdc;
  margin-bottom: 20px;
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
  border-top: #dcdcdc 1px solid;
  padding: 13px 20px 12px 0;
  height: 40px;
  line-height: 40px;
  text-align: left;
}
.link-right:nth-child(1){
    border-top: 0px;
}
.link-id {
  width: 87px;
  display: inline-block;
  margin-left: 10px;
  font-weight: bold;
}
</style>
<script>
export default {
    data(){
        return{
            linklist:[1,2,3]
        }
    },
    methods:{
    setlinkheight(){
        this.$refs.linkheight.style.height=this.linklist.length*66+'px'
    }
    },
    mounted(){
        this.setlinkheight()
    }
}
</script>
