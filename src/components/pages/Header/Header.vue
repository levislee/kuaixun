<template>
    <div>
        <header id="head">
            <div id="headleft">
                <div class="logo"></div>
                  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first"></el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
   <div class="ss"><router-link to="shop">shop</router-link></div>
            </div>
            <!-- <div id="headright">

            </div> -->
        </header>
    </div>
</template>
<style scoped>

</style>

<script>
export default {
    data(){
        return{
             activeName: 'second'
        }
    },
    methods: {
      handleClick(tab, event) {
      }
    }
}
</script>