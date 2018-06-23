<template>
  <div :class="{'drug-card-box': true,'drug-card-box-selected':showDesc}">
    <img src="../../assets/images/drug1.jpg" class="drug-image" />
    <div class="drug-name">香雪 硝苯地平片</div>
    <div class="drug-price">¥<span style="font-size: 26px;">3</span>/瓶</div>
    <div class="drug-desc" v-show="showDesc">
      <div class="desc-title">
        <span>适应症</span>
      </div>
      <div class="desc-content">
        <span>补充多种维生素，每天只需1粒，健康营养吃出来，聚会、玩乐、上班、休闲时刻刻随身携带</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    showDesc: Boolean
  }
};
</script>
<style scoped>
.drug-card-box {
  width: 100%;
  padding: 40px 30px;
  text-align: center;
  box-sizing: border-box;
  background-color: #fff;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  cursor: pointer;
  position: relative;
  border: 1px solid #538fd3;
}
.drug-card-box-selected {
  border: 0;
  border-top: 4px solid #538fd3;
  box-shadow: 0px 1px 20px #ccc;
}
.drug-image {
  height: 280px;
  width: 100%;
}
.drug-name {
  font-size: 16px;
  margin-top: 28px;
}
.drug-price {
  color: #f05f5f;
  margin-top: 4px;
}
.drug-desc {
  background-color: #2873c8;
  text-align: left;
  padding: 0 10px;
  padding-bottom: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.desc-title {
  color: #fff;
  line-height: 48px;
}
.desc-content {
  color: #fff;
  line-height: 24px;
}
.desc-footer {
  text-align: right;
  padding: 4px 8px;
}
.icon-info {
  display: inline-block;
  text-align: center;
  line-height: 16px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #fff;
  color: #fff;
  vertical-align: middle;
  font-weight: bold;
}
</style>

