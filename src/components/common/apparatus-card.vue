<template>
  <div class="card-box">
    <img src="../../assets/images/00017.png" />
    <div class="card-desc">轮椅</div>
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
  height: 374px;
  text-align: center;
  background-color: #fff;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 4px;
}
.card-box img {
  height: 225px;
  width: 100%;
}
.card-desc {
  font-size: 26.14px;
  color: #333333;
  margin-top: 36px;
}
</style>
