<template>
  <div class="contanier">
    <div class="title">
      <div class="left-box">
        <span class="line"></span>
        <span class="text">{{title}}</span>
      </div>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  }
};
</script>
<style scoped>
.contanier {
  width: 100%;
  padding: 0 35px;
  box-sizing: border-box;
}
.title {
  width: 100%;
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
}
.line {
  display: inline-block;
  height: 36px;
  width: 6px;
  background-color: rgba(22, 101, 192, 1);
  vertical-align: middle;
  margin-right: 10px;
  margin-top: 12px;
}
.text {
  font-size: 18px;
  font-weight: bold;
  vertical-align: middle;
}
.right-box {
  padding-right: 40px;
  font-size: 18px;
  vertical-align: middle;
}
.content {
  padding: 20px 40px;
  overflow: hidden;
  box-sizing: border-box;
}
</style>
