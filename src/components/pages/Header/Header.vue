<template>
    <div>
        <header id="head">
            <div id="headleft">
                <div class="logo"></div>
                  <el-tabs v-model="activeName">
                    <el-tab-pane label="首页" >
                        首页
                    </el-tab-pane>
                    <el-tab-pane label="24快讯" >
                        7*24快讯
                    </el-tab-pane>
                    <el-tab-pane label="行情">行情</el-tab-pane>
                      <el-tab-pane label="专题" >专题</el-tab-pane>
                    <el-tab-pane label="活动" >活动</el-tab-pane>
                    <el-tab-pane label="学院" >学院</el-tab-pane>
                    <el-tab-pane label="专栏" >专栏</el-tab-pane>
                    <el-tab-pane label="沙龙" >沙龙</el-tab-pane>
                </el-tabs>
            </div>
            <div id="headright">

            </div>
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