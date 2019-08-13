<template>
  <div>
    <div class="shadown" v-if="isshare" @click="removeshare()">
      <div class="shadown_main"></div>
    </div>
  </div>
</template>
<style scoped>
.shadown_main {
  width: 400px;
  height: 700px;
  margin: 100px auto;
  background: linear-gradient(red, blue, yellow);
  z-index: 9999;
  box-sizing: border-box;
  justify-content: space-around
  /* animation: sliderdown 0.3s linear; */
}
/* @keyframes sliderdown {
  0% {
    margin-top: -700px;
  }
  100% {
    margin-top: 100px;
  }
} */
</style>
<script>
export default {
  data() {
    return {
    };
  },
  props: ["isshare"],
  methods: {
    removeshare() {
      // this.isshare=false

        let shadown = document.querySelector(".shadown");
        html2canvas(shadown, {
          width: window.screen.availWidth,
          height: window.screen.availHeight,
          windowWidth: document.body.scrollWidth,
          windowHeight: document.body.scrollHeight,
          x: 0,
          y: window.pageYOffset,
          backgroundColor:"black",
          margin:"auto"
        }).then(canvas => {
          var imgUri = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream"); // 获取生成的图片的url
          var saveLink = document.createElement("a");
          saveLink.href = imgUri;
          saveLink.download = "downLoad.png";
          saveLink.click();
        });
        this.$parent.isshare = false;

    }
  },
  beforeDestroy(){
  }
};
</script>
