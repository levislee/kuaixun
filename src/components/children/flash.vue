<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="快讯" name="first" class="homeflash">
         <div class="flashlogo">           
         </div>
    </el-tab-pane>
    <el-tab-pane label="动态" name="second">动态</el-tab-pane>
  </el-tabs>
</template>
<style scoped>
.el-tabs__item:hover{
    color: red;
}
</style>

<script>
export default {
        data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>