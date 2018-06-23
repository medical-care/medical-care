<template>
  <div class="search-box">
    <input placeholder="请输入搜素内容" />
    <i class="icon el-icon-search"></i>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.search-box {
  width: 100%;
  height: 40px;
  position: relative;
  vertical-align: middle;
}
.search-box input {
  height: 40px;
  width: 240px;
  outline: none;
  padding-left: 40px;
  border-radius: 20px;
  border: solid 1px #409eff;
  position: absolute;
  top: 0px;
  left: 0;
}
.icon {
  color: #ccc;
  font-size: 20px;
  vertical-align: middle;
  position: absolute;
  top: 12px;
  left: 14px;
  cursor: pointer;
}
</style>
