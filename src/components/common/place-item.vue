<template>
  <div class="item-box">
    <img src="../../assets/images/0009.jpg" />
    <div class="right-box">
      <div class="item-title">
        国大控股国大药房（深圳）连锁有限公司蛇口新街分店
      </div>
      <div class="item-desc">
        <div class="item-place">
          <i class="el-icon-location-outline"></i>
          <span>南山区蛇口新街曙光花园19-20号</span>
        </div>
        <div class="item-place">
          <i class="el-icon-phone-outline"></i>
          <span>236584</span>
        </div>
        <div class="item-place">
          <i class="el-icon-bell"></i>
          <span>热卖药品：白加黑 | 感冒药 | 社保卡可购买</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.item-box {
  display: flex;
  padding: 20px 0px;
  overflow: hidden;
  border-bottom: 1px solid #e5e5e5;
}
.item-box img {
  width: 311px;
  height: 215px;
  flex: 0 0 311px;
}
.right-box {
  flex: 1;
  position: relative;
  padding: 0 20px;
}
.item-title {
  font-size: 26px;
  color: #333333;
  position: absolute;
  top: 10px;
}
.item-desc {
  position: absolute;
  bottom: 0;
  line-height: 26px;
  font-size: 20px;
  color: #333333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.item-place {
  font-family: PingFangSC-Regular;
  line-height: 50px;
}
i {
  color: #2873c8;
}
</style>
