<template>
  <div class="contanier">
    <div class="top-box">
      <div class="left-box">
        太平洋首页 | 太平洋旗下业务
      </div>
      <div class="right-box">
        <a>登录</a>
        <a>注册</a>
        <span style="margin: 0 15px;"></span>
        <img src="../../assets/images/u4.png" />
        <span style="vertical-align: middle;">移动太平洋</span>
      </div>
    </div>
    <div class="bottom-box">
      <img class="logo" />
      <ui>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ui>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style  scoped>
.contanier {
  width: 100%;
}
.top-box {
  background-color: rgba(22, 101, 192, 1);
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
}
.left-box {
  color: #fff;
  padding-left: 50px;
}
.right-box {
  color: #fff;
  padding-right: 50px;
}
.right-box a {
  cursor: pointer;
  vertical-align: middle;
}

.right-box img {
  vertical-align: middle;
}
</style>


