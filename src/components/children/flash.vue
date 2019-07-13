<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane v-for="(item,index) in navs" :key="index" :label="item.name" :name="item.id" class="homeflash">
         <div class="flashlogo">           
         </div>
    </el-tab-pane>
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
        activeName: 'first',
        navs:[
          { name: "热文", id: "second" },
        { name: "新闻", id: "third" },
        { name: "人物", id: "fourth" },
        { name: "行情", id: "fifth" }
        ]
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>