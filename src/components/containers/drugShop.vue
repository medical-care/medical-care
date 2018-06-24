<template>
  <div>
    <Header1>hello</Header1>
   <div class="content" style="padding:0">
    <div class="clearfix" style="padding:30px 0 0 260px">
        <div class="logo fl">
          <img src="../../assets/images/logo.png" class="logo" />
          <a href="#">药品商城</a>
      </div>
      <div class="fl logo_r">
        <div class="search">
          <input type="text" placeholder="请输入药品名称，如 白加黑" />
          <button>搜索</button>
        </div>
        <div class="hotwords">
          <span>常见状态：</span>
          <a href="#">冠心病</a>
          <a href="#">感冒</a>
          <a href="#">发烧</a>
          <a href="#">头晕</a>
          <a href="#">眼干</a>
          <a href="#">鼻炎</a>
        </div>
      </div>
    </div>
    
  </div>
  <div class="nav-box">
      <ul class="nav">
        <li>首页</li>
        <li>新人专区</li>
        <li>新特效</li>
        <li>送礼送健康</li>
        <li>男性健康</li>
        <li>全球购</li>
        <li>一小时购药</li>
        <li>网络医院</li>
      </ul>
    </div>
    <div class="banner w">
      <el-carousel height="550px">
          <el-carousel-item v-for="item in 4" :key="item">
            <img width="100%" height="100%" src="../../assets/images/00026.png">
          </el-carousel-item>
      </el-carousel>
      <div class='allShops'>
        <h3>全部商品分类</h3>
        <ul>
          <li><label>热卖专区</label><span>血压计 / 茅台药酒</span></li>
          <li><label>儿童用药</label><span>血压计 / 茅台药酒</span></li>
          <li><label>感冒发烧</label><span>血压计 / 茅台药酒</span></li>
          <li><label>肠胃用药</label><span>血压计 / 茅台药酒</span></li>
          <li><label>减肥瘦身</label><span>血压计 / 茅台药酒</span></li>
          <li><label>儿童用药</label><span>血压计 / 茅台药酒</span></li>
          <li><label>感冒发烧</label><span>血压计 / 茅台药酒</span></li>
          <li><label>肠胃用药</label><span>血压计 / 茅台药酒</span></li>
          <li><label>减肥瘦身</label><span>血压计 / 茅台药酒</span></li>
        </ul>
      </div>
      </Card>
    <Card title="热卖专区">
      <div slot="content">
        <div class="drug-list">
          <el-row :gutter="20">
            <el-col :span="6">
              <DrugCard :showDesc="true"></DrugCard>
            </el-col>
            <el-col :span="6">
              <DrugCard></DrugCard>
            </el-col>
            <el-col :span="6">
              <DrugCard></DrugCard>
            </el-col>
            <el-col :span="6">
              <DrugCard></DrugCard>
            </el-col>
          </el-row>
        </div>
      </div>
    </Card>
    </div>
    <Footer> </Footer>
  </div>
</template>
<script>
import Header1 from "../common/header1";
import Card from "../common/card";
import Search from "../common/search";
import Footer from "../common//footer";
import DrugCard from "../common/drug-card";
export default {
  components: {
    Header1,
    Card,
    Search,
    DrugCard,
    Footer
  },
  data() {
    return {
      currentTab: 1,
      currentIndex: 2,
     
    };
  }
};
</script>
<style>
.content{
  background-color: #fff;
}
.logo {
  vertical-align: middle;

}
.logo a{
  font-family: PingFangSC-Regular;
  color: #3271C0;
}
.logo_r{
  margin-left:153px;
}
.search{
  position: relative;
}
.search input{
  width: 809px;
  height: 47px;
  outline: none;
  border: 3px solid #FA344D;
  border-radius: 30px;
  font-size: 22px;
  text-indent: 2em;
}
.search button{
  width: 99px;
  height: 47px;
  background: #FA344D;
  border-radius: 34px;
  color: #fff;
  font-size: 22px;
  outline-style: none;
  list-style-type:none;
  border: none;
  position: absolute;
  top: 3px;
  right: 2px;
}
.hotwords{
  margin-top: 6px;
  margin-left: 2em;
  color: #999;
}
.hotwords a{
  color: #999;
}
.nav-box{
 height: 47px;
  background: #FA344D;
  line-height: 47px;
  width: 100%;
  margin-top: 30px;
}
.nav {
  margin-left: 650px;
}
.nav li {
  float: left;
  font-size: 22px;
  text-align: center;
  cursor: pointer;
  margin-right: 30px;
  color: #fff;
}
.banner{
    position: relative;
}
.allShops{
  width: 309px;
  opacity: 0.7;
  background: #05314A;
  position: absolute;
  top: -47px;
  left:0; 
  z-index: 99999;
}
.allShops h3{
  background: #CD0F25;
  width: 309px;
  height: 47px;
  line-height: 47px;
  text-align: center;
  color: #fff;
  font-weight: 700;
}
.allShops ul {
  padding: 10px 0 0 45px;
}
.allShops ul li{
  height: 60px;
}
.allShops ul li label{
  font-size: 20px;
  color: #fff;
  margin-right: 15px;
}
.allShops ul li span{
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}
.contanier[data-v-39d49e21] {
  padding: 0 !important;
}

</style>

