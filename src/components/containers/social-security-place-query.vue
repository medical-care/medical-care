<template>
  <div class="container">
    <Header></Header>
    <div class="nav-info">
      <span>常见服务 |
        <span style="color: #2873C8;">社保网点查询</span>
      </span>
    </div>
    <div class="tabel-box">
      <div class="table-header">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="所在城市">
            <el-select>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所在区域">
            <el-select>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="类型">
            <el-select>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <span style="margin: 0 40px;"></span>
          <el-form-item>
            <el-button round type="primary" size="middle" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
        <div style="margin-top: 10px;"></div>
        <div class="result-box">
          <PlaceCard></PlaceCard>
          <PlaceCard></PlaceCard>
          <PlaceCard></PlaceCard>
          <PlaceCard></PlaceCard>
          <PlaceCard></PlaceCard>
          <PlaceCard></PlaceCard>
          <PlaceCard></PlaceCard>
          <PlaceCard></PlaceCard>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../common/header";
import MessageItem from "../common/message-item";
import HealthCard from "../common/health-card";
import PlaceCard from "../common/place-item";
export default {
  components: {
    Header,
    MessageItem,
    HealthCard,
    PlaceCard
  },
  data() {
    return {
      data: [
        {
          id: 1,
          type: "养老保险",
          person: "240.00(8%)",
          company: "420.00(14%)"
        },
        {
          id: 2,
          type: "医疗保险",
          person: "240.00(8%)",
          company: "420.00(14%)"
        },
        {
          id: 3,
          type: "失业保险",
          person: "240.00(8%)",
          company: "420.00(14%)"
        },
        {
          id: 4,
          type: "工伤保险",
          person: "240.00(8%)",
          company: "420.00(14%)"
        },
        {
          id: 5,
          type: "生育保险",
          person: "240.00(8%)",
          company: "420.00(14%)"
        }
      ],
      index: 1
    };
  }
};
</script>
<style scoped>
.container {
  background: #efefef;
  padding-bottom: 40px;
}
.nav-info {
  padding: 0 70px;
  height: 86px;
  line-height: 86px;
  font-size: 22px;
  color: #666;
}
.tabel-box {
  background-color: #fff;
  margin: 0px 70px;
  padding: 40px 40px;
}
.table-footer {
  line-height: 60px;
  text-align: right;
  font-size: 16px;
  color: #333333;
}
.tab-box {
  margin: 20px 70px;
  background-color: #fff;
  padding: 0px 00px;
}
.tab-title {
  height: 60px;
  line-height: 60px;
  color: #333333;
  font-size: 22px;
  padding: 0 30px;
}
.tab-container {
  border-bottom: 1px solid #e5e5e5;
  border-top: 1px solid #e5e5e5;
  line-height: 60px;
  height: 60px;
  list-style: none;
  display: flex;
}
.tab-container li {
  height: 60px;
  line-height: 60px;
  color: #333333;
  flex: 0 0 200px;
  text-align: center;
  cursor: pointer;
}
.tab-container li.selected {
  color: #2873c8;
  border-bottom: 6px solid #2873c8;
}
.pagination-box {
  text-align: center;
  padding: 20px 0;
}
.column {
  color: #333;
  font-size: 16px;
}
</style>
