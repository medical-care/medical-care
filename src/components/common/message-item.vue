<template>
  <div class="item-box">
    <img src="../../assets/images/0008.jpg" />
    <div class="right-box">
      <div class="item-title">
        中国牙科的前景及趋势分析
      </div>
      <div class="item-desc">
        牙齿的健康程度影响着我们的生活质量，俗话说“牙疼不是病，疼起来要人命”，李教授从事牙科检查已有25年，拥有丰富的经验。牙口不好，不仅仅影响食欲，还会发炎，引起一系列口腔疾病等。 牙齿的健康程度影响着我们的生活质量，俗话说“牙疼不是病，疼起来要人命”，李教授从事牙科检查已有25年，拥有丰富的经验。牙口不好，不仅仅影响食欲，还会发炎，引起一系列口腔疾病等。
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
  padding: 20px 40px;
  overflow: hidden;
  border-bottom: 1px solid #e5e5e5;
}
.item-box img {
  width: 124px;
  height: 111px;
  flex: 0 0 124px;
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
</style>
