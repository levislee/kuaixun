<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" class="btmnav" >
    <el-tab-pane label="头条" name="first">
      <div class="btnavlist" v-for="(item,index) in firstdata" :key="index" @click="getData()">
        <div class="btnavimg">
          <img v-lazy="item.extra.thumbnail_pic" alt />
        </div>
        <div class="btnavlistartical">
          <ul>
            <li>
              <h3> <span class="only" v-if="item.extra.attribute_exclusive">独家</span>{{item.short_title}}</h3>
            </li>
            <li class="artical">{{item.title}}</li>
            <li class="articalbottom">
              <span class="articalmsg">
                <span class="placement" v-if="item.is_top">置顶</span>{{item.extra.author}} · {{item.extra.published_at|formatDate}}分钟前</span>
              </span>
              <div class="visited"> {{item.extra.read_number_yuan}}</div>
            </li>
          </ul>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane v-for="(item,index) in nav" :key="index" :label="item.name">
      <div class="btnavlist" v-for="(item,index) in firstdata" :key="index" @click="getData()">
        <div class="btnavimg">
          <img v-lazy="item.extra.thumbnail_pic" alt />
        </div>
        <div class="btnavlistartical">
          <ul>
            <li>
              <h3>{{item.short_title}}</h3>
            </li>
            <li class="artical">{{item.title}}</li>
            <li class="articalbottom">
              <span class="articalmsg">{{item.extra.author}} · {{item.extra.published_at|formatDate}}小时前</span>
              <div class="visited">
                <svg
                  width="17px"
                  height="13px"
                  viewBox="0 0 17 13"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <!-- Generator: Sketch 49.1 (51147) - http://www.bohemiancoding.com/sketch -->
                  <title>Page 1</title>
                  <desc>Created with Sketch.</desc>
                  <defs />
                  <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="图标/阅读" transform="translate(0.000000, -2.000000)" fill="#9B9B9B">
                      <path
                        d="M16.0472441,8.10236321 C16.015748,8.03936907 15.8162757,7.70341443 15.4488189,7.0944892 C15.0813621,6.48556195 14.5590576,5.82677518 13.8818893,5.11811074 C13.2047209,4.40944428 12.3779578,3.76640655 11.4015738,3.18897739 C10.4251918,2.6115462 9.30709266,2.32283465 8.04724409,2.32283465 C6.78739553,2.32283465 5.66929638,2.6115462 4.69291439,3.18897739 C3.71653039,3.76640655 2.88976731,4.40944428 2.21259893,5.11811074 C1.53542974,5.82677518 1.01312524,6.48556195 0.645669291,7.0944892 C0.278213342,7.70341443 0.0787403187,8.03936907 0.0472440945,8.10236321 C0.0157478702,8.20734942 0,8.30971112 0,8.40944831 C0,8.50918753 0.0157478702,8.61154721 0.0472440945,8.71653543 C0.0787403187,8.75852951 0.278213342,9.08398614 0.645669291,9.69291339 C1.01312524,10.2913406 1.53542974,10.9422539 2.21259893,11.6456693 C2.88976731,12.3490847 3.71653039,12.9842491 4.69291439,13.5511811 C5.66929638,14.1286119 6.78739553,14.4173228 8.04724409,14.4173228 C9.30709266,14.4173228 10.4251918,14.1286119 11.4015738,13.5511811 C12.3779578,12.9737503 13.2047209,12.3333377 13.8818893,11.6299223 C14.5590576,10.9265048 15.0813621,10.2703446 15.4488189,9.66141732 C15.8162757,9.05249008 16.015748,8.71128643 16.0472441,8.63779427 C16.0787402,8.57480214 16.0944892,8.48818948 16.0944892,8.37795225 C16.0944892,8.26771502 16.0787402,8.17585335 16.0472441,8.10236321 Z M8.04724409,13.0787402 C7.14435225,13.0787402 6.32021367,12.8845164 5.57480416,12.496063 C4.82939263,12.1076102 4.17585487,11.6535468 3.61417272,11.1338588 C3.05249058,10.6141707 2.58267817,10.0918662 2.2047234,9.56692913 C1.83726846,9.04199206 1.56955475,8.64304529 1.4015748,8.37007874 C1.5485571,8.1076102 1.8057724,7.71391244 2.17322935,7.18897537 C2.55118211,6.66404031 3.02361902,6.14173581 3.59055017,5.62204775 C4.15748334,5.10235969 4.81364359,4.64829631 5.55905512,4.25984353 C6.31496466,3.87138872 7.14435225,3.67716535 8.04724409,3.67716535 C8.95013594,3.67716535 9.77427452,3.87138872 10.519684,4.25984353 C11.2650956,4.64829631 11.9186333,5.10235969 12.4803155,5.62204775 C13.0419976,6.14173581 13.51181,6.66404031 13.8897648,7.18897537 C14.2572195,7.71391244 14.524933,8.1076102 14.6929134,8.37007874 C14.524933,8.64304529 14.2572195,9.04199206 13.8897648,9.56692913 C13.51181,10.0918662 13.0419976,10.6141707 12.4803155,11.1338588 C11.9186333,11.6535468 11.2650956,12.1076102 10.519684,12.496063 C9.77427452,12.8845164 8.95013594,13.0787402 8.04724409,13.0787402 Z M8.04724409,5.69291339 C7.3123326,5.69291339 6.67979288,5.95537789 6.1496068,6.48031496 C5.61942072,7.00525203 5.3543297,7.63516724 5.3543297,8.37007874 C5.3543297,9.11549027 5.61942072,9.75065449 6.1496068,10.2755895 C6.67979288,10.8005266 7.3123326,11.0629931 8.04724409,11.0629931 C8.78215559,11.0629931 9.41469531,10.8005266 9.94488139,10.2755895 C10.4750675,9.75065449 10.7401585,9.11549027 10.7401585,8.37007874 C10.7401585,7.63516724 10.4750675,7.00525203 9.94488139,6.48031496 C9.41469531,5.95537789 8.78215559,5.69291339 8.04724409,5.69291339 Z M8.04724409,9.72440945 C7.67978734,9.72440945 7.36483074,9.59317619 7.1023622,9.33070765 C6.83989367,9.06824113 6.70866243,8.74803351 6.70866243,8.37007874 C6.70866243,8.00262198 6.83989367,7.68766539 7.1023622,7.42519685 C7.36483074,7.16272831 7.67978734,7.03149707 8.04724409,7.03149707 C8.41470085,7.03149707 8.72965745,7.16272831 8.99212598,7.42519685 C9.25459452,7.68766539 9.38582576,8.00262198 9.38582576,8.37007874 C9.38582576,8.74803351 9.25459452,9.06824113 8.99212598,9.33070765 C8.72965745,9.59317619 8.41470085,9.72440945 8.04724409,9.72440945 Z"
                        id="Page-1"
                      />
                    </g>
                  </g>
                </svg>
                {{item.extra.read_number_yuan}}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>
<style>
.btmnav .el-tabs__item {
  font-size: 22px;
  color: #999;
}
.btmnav .el-tabs__item:hover {
  color: red;
}
.btmnav .el-tabs__item.is-active {
  color: black;
}
.btmnav .el-tabs__active-bar {
  background-color: red;
  width: 28px;
}
.only{
  display: inline-block;
    border-radius: 2px;
    margin-right: 4px;
    font-size: 14px;
    color: #fff;
    width: 46px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    padding: 0;
    font-weight: 500;
    background: #f29700;
    transform: translateY(1px);
}
.btnavlist {
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
}
.btnavimg {
  width: 270px;
  height: 170px;
  margin-right: 20px;
  overflow: hidden;
}
.btnavimg img {
  width: 270px;
  height: 170px;
  transition: transform 1s;
}
.btnavimg img:hover {
  transform: scale(1.1);
}
.btnavlistartical {
  width: 467px;
  text-align: left;
  position: relative;
}
.btnavlistartical h3 {
  line-height: 28px;
  margin-bottom: 6px;
  overflow: hidden;
  display: -webkit-box;
  display: -moz-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  box-orient: vertical;
  -webkit-line-clamp: 2;
}
.artical {
  height: 66px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.articalbottom {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
}
.placement {
  font-size: 14px;
  color: #e0051e;
  margin-right: 8px;
  border: 1px solid #e0051e;
  border-radius: 2px;
  width: 44px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  display: inline-block;
}
</style>

<script>
import dateFormat from "../../js/Date";
export default {
  data() {
    return {
      activeName: "first",
      firstdata: [],
      otherdata: [],
      nav: [
        { name: "热文", id: "second" },
        { name: "新闻", id: "third" },
        { name: "人物", id: "fourth" },
        { name: "行情", id: "fifth" },
        { name: "百科", id: "third" }
      ],
      arr:[1,4,2,3,3,2,5,6,7,8,5,10]
    };
  },
  methods: {
    handleClick(tab, event) {
      if(tab.label == "头条"){
        this.getData('/article/info?type=toutiao');
      }
      else if (tab.label == "热文") {
        this.getData('/article/info?type=rewen');
      }else if(tab.label == "新闻"){
          this.getData('/article/info?type=xinwen');
      }else if(tab.label == "人物"){
          this.getData('/article/info?type=renwu');
      }else if(tab.label == "行情"){
           this.getData('/article/info?type=hangqing');
      }else if(tab.label == "百科"){
           this.getData('/article/info?type=baike');
      }
    },
        getData(options) {  
      this.$http.get(options).then(rsp => {
        console.log(rsp);          
        if (rsp.status == 200) {
          this.firstdata = rsp.data.data.list;
          console.log(this.firstdata);
        }else{
            let err=new Error()
            alert(111)
            console.log(err);          
        }
      }).catch(error=>console.log(222))
    }
  },
  mounted() {
    // this.getHomeData();
  },
  created(){
    this.getData('/article/info?type=toutiao')
  },
  filters: {
    formatDate(time) {
      let date = new Date(time);
      return dateFormat.formatDate(date, "ss");
    }
  }
};
</script>