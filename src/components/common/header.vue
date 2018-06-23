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
      <ul class="nav">
        <li>首页</li>
        <li>社保服务</li>
        <li>医疗服务</li>
        <li>保障商城</li>
        <li>家庭医生</li>
        <li>医学助手</li>
        <li>关于我们</li>
      </ul>
      <div class="search-box">
        <input />
        <i class="icon el-icon-search"></i>
      </div>
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
.bottom-box {
  display: flex;
  line-height: 80px;
  height: 80px;
  justify-content: center;
}
.logo {
  width: 300px;
  height: 80px;
  flex: 0 0 300px;
}
.nav {
  flex: 1;
  display: flex;
  list-style: none;
}
.nav li {
  flex: 1;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
}
.search-box {
  flex: 0 0 300px;
  width: 300px;
  text-align: left;
  position: relative;
}
.search-box input {
  height: 40px;
  width: 180px;
  outline: none;
  padding: 0 16px;
  border-radius: 20px;
  border: solid 1px #409EFF;
  position: absolute;
  top: 18px;
  left: 0;
}
.icon {
  color: #409EFF;
  font-size: 20px;
  vertical-align: middle;
  position: absolute;
  top: 30px;
  left: 180px;
  cursor: pointer;
}
</style>


