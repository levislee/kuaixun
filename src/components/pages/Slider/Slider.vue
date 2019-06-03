<template>
    <div id="navslider" >
        <ul class="slider" :style="{'top':time*86+'px'}" id="slider">
            <li v-for="(item,index) in sliderdata" :key="index"  id="sliderli">
                <ul class="slideritem" v-for="(items,indexs) in sliderli" :key="indexs">
                    <li class="slidername">{{item.name}}</li>
                    <li class="sliderimg"><img :src="item.img" alt=""></li>
                    <li>{{item.percent}}</li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<style scoped>
#navslider{
    height: 86px;
    position: relative;
    overflow: hidden;
}
.slider>li{
    height: 86px;
}
.slider{
    position: absolute;
    height: 344px;
    top: 0px;
}
#sliderli{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.slideritem{
    height: 68px;
    width: 97px;
    border-right: 1px solid #f5f5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
     border-left: none;
}
.slidername{
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #2d2d35;
    line-height: 17px;
}
.sliderimg{
    width: 34px;
    height: 34px;
}
</style>
<script>
export default {
    data(){
        return{
            slidertime:null,
            time:0,
            sliderdata:[{name:'BTC',img:'https://resource.jinse.com/www/img/cslogo/BTC.png?v=1810_image105.png',percent:"+3.61%"},
            {name:'ETH',img:'https://resource.jinse.com/www/img/cslogo/BTC.png?v=1810_image105.png',percent:"+3.61%"}],
            sliderli:[1,2,3,4,5,6,7,8,9,0,11,12]
        }
    },
    methods:{
        autoplay(){
            let that=this
            this.slidertime=setInterval(function(){   
                that.time--
              if(that.time<=-2){
                  that.time=0
              }  
            },3000)                            
        }
    },
   mounted(){
       this.autoplay()
   },
    beforeDestroy(){
        clearInterval(this.slidertime)
    }
}
</script>
