<template>
  <div class="card-box">
    <img src="../../assets/images/00015.jpg" />
    <div :style="{backgroundColor: color}" class="card-desc">
      <span>健康体检卡B 致优套餐</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    color: {
      default: "#13ba8e",
      type: String
    }
  }
};
</script>
<style scoped>
.card-box {
  width: 100%;
  position: relative;
  height: 255px;
}
.card-box img {
  height: 255px;
  width: 100%;
  border-radius: 4px;
}
.card-desc {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 70px;
  opacity: 0.8;
  font-size: 24.57px;
  color: #ffffff;
  text-align: center;
  line-height: 70px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
</style>
