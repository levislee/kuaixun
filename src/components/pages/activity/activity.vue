<template>
  <div id="activity">
    <div class="activity">
      <div class="activityimg">
        <img src="data/attachment/portal/201901/18/174223v115k6kqoroq5zqm.jpg.thumb.jpg" alt />
      </div>
      <div class="activity_msg">
        <div class="ac_title"></div>
        <div class="ac_bottom"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#activity {
  width: 1170px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 60px;
}
.activity {
  width: 380px;
  height: 330px;
  margin-bottom: 25px;
  background-color: #fff;
  position: relative;
}
.activityimg {
  width: 100%;
  height: 255px;
}
.activityimg img {
  width: 100%;
  height: 255px;
}
.activity_msg {
  width: 380px;
  height: 94px;
  position: absolute;
  bottom: 0;
  padding: 12px 28px;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}
</style>
