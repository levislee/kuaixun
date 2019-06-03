<template>
  <div id="caroucel">
    <el-carousel indicator-position="none" arrow="always">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style>
#caroucel{
    width: 548px;
    height: 275px;
}
.el-carousel__container{
    height: 275px;
}
.el-carousel{
       height: 275px;
}
.el-carousel__item{
    height: 275px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 275px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
<script>
import "element-ui/lib/theme-chalk/index.css";
export default {};
</script>
