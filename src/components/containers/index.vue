<template>
  <div>
    <Header>hello</Header>
    <el-carousel height="550px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="../../assets/images/01.jpg">
      </el-carousel-item>
    </el-carousel>
    <Card></Card>
  </div>
</template>
<script>
import Header from "../common/header";
import Card from "../common/card"
export default {
  components: {
    Header,
    Card
  }
};
</script>
<style>
.el-carousel__item img {
  width: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

