<template>
  <div class="contanier">
    <!-- <div class="logo-box">
      <img class="logo" src="../../assets/images/logo.png" />
    </div> -->
    <div class="right-box">
      <div class="item" style="margin-left:495px">
        <img src="../../assets/images/my.png" />
        <div class="item-right-box">
          <div style="font-size: 24px;color: #666666;margin-bottom: 8px;">关于我们</div>
          <div class="text">公司简介</div>
          <div class="text">联系我们</div>
          <div class="text">人才招聘</div>
        </div>
      </div>
      <div class="item">
        <img src="../../assets/images/help.png" />
        <div class="item-right-box">
          <div style="font-size: 24px;color: #666666;margin-bottom: 8px;">帮助中心</div>
          <div class="text">隐私条款</div>
          <div class="text">法律咨询</div>
          <div class="text">保险资讯</div>
          <div class="text">保险百科</div>
        </div>
      </div>
      <div class="item">
        <img src="../../assets/images/info.png" />
        <div class="item-right-box">
          <div style="font-size: 24px;color: #666666;margin-bottom: 8px;">旗下公司</div>
          <div class="text">财产保险</div>
          <div class="text">人寿保险</div>
          <div class="text">资产管理 </div>
          <div class="text">健康险</div>
        </div>
      </div>
      <div class="item">
        <div class="item-right-box">
          <div style="font-size: 24px;color: #666666;margin-bottom: 40px;"></div>
          <div class="text">安信农保</div>
          <div class="text">养老投资</div>
          <div class="text">长江养老 </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.contanier {
  display: flex;
  margin-top: 100px;
  background-color: #eee;
  padding: 20px;
}
.logo-box {
  flex: 0 0 300px;
  text-align: center;
}
.contanier .logo {
  width: 160px;
  height: 46px;
}
.right-box {
  flex: 1;
  display: flex;
}
.item {
  flex: 0 0 230px;
  width: 230px;
  text-align: left;
  display: flex;
}
.item img {
  width: 32px;
  height: 32px;
}
.text {
  font-size: 18px;
  color: #666666;
  line-height: 36px;
}
.item-right-box {
  margin-left: 18px;
}
</style>
