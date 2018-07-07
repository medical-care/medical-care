<template>
  <div>
    <Header>hello</Header>
   <div class="content" >
      <div class="capacity-title">
        <a href="#">常见服务</a> | <a class="active" href="#">报销药品查询</a> 
      </div>
      <div class="expense">
        <div class="expense-form">
          <el-form :inline="true"  class="demo-form-inline">
              <el-form-item label="报销城市">
                <el-select  placeholder="请选择报销城市">
                  <el-option label="安庆市" value="shanghai"></el-option>
                  <el-option label="上海市" value="beijing"></el-option>
                  <el-option label="深圳市" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="药品名称">
                <el-input  placeholder="请输入药品名称，如 白加黑"></el-input>
              </el-form-item>
              
              <el-form-item>
                <el-button type="primary">查询</el-button>
              </el-form-item>
          </el-form>
        </div>
        <div class="clearfix">
          <el-table
            stripe
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="drugType"
              label="药品类型"
              align='center'
              min-width='25%'>
            </el-table-column>
            <el-table-column
              prop="drugName"
              label="药品名称"
              align='center'
              min-width='25%'>
            </el-table-column>
            <el-table-column
              prop="drugJx"
              label="药品剂型"
              align='center'
              min-width='25%'>
            </el-table-column>
            <el-table-column
              prop="drugNumber"
              label="药品编号"
              align='center'
              min-width='25%'>
            </el-table-column>
          </el-table>
          
          </div>
          <div class="pagination">
            <el-pagination
            :page-sizes="[10, 20, 30, 40]"
            :page-size="10"
            layout=" prev, pager,next,sizes,total"
              background
              :total="100">
            </el-pagination>
          </div>

          <div class="card-box">
          <div class="capacity-title">
            <a style="margin-left:calc(30/1920*100vw)" class='hot-pic' href="#">类似药品</a>
          </div>
          <el-row style="padding-left:calc(100/1920*100vw)">
              <el-col :offset="1" :span="8" class='hot-box'><div class="grid-content bg-purple">
                <img  src="../../assets/images/00012.jpeg"/>
                <span>上海市长江医院</span>
                <i>推荐</i>
              </div></el-col>
              <el-col :offset="1" :span="8" class='hot-box'><div class="grid-content bg-purple-light">
                <img  src="../../assets/images/00013.jpeg"/>
                 <span>上海市新华医院（祟明）</span>
                 <i>可报销</i>
              </div></el-col>
              <el-col :offset="1" :span="8" class='hot-box'><div class="grid-content bg-purple">
                <img  src="../../assets/images/00010.jpeg"/>
                 <span>上海市新华医院（祟明）</span>
              </div></el-col>
            </el-row>
        </div>
      </div>
   </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../common/header";
import Card from "../common/card";
import Search from "../common/search";
import Footer from "../common//footer";
export default {
  components: {
    Header,
    Card,
    Search,
    Footer
  },
  data() {
    return {
      currentTab: 1,
      currentIndex: 2,
      tableData: [{
          drugType: '西药处方',
          drugName: '酮替芬',
          drugJx: '吸入剂',
          drugNumber: 'L20030000032b'
        }, {
          drugType: '西药处方',
          drugName: '酮替芬',
          drugJx: '吸入剂',
          drugNumber: 'L20030000032b'
        }, {
          drugType: '西药处方',
          drugName: '酮替芬',
          drugJx: '吸入剂',
          drugNumber: 'L20030000032b'
        }, {
          drugType: '西药处方',
          drugName: '酮替芬',
          drugJx: '吸入剂',
          drugNumber: 'L20030000032b'
        },
        {
          drugType: '西药处方',
          drugName: '酮替芬',
          drugJx: '吸入剂',
          drugNumber: 'L20030000032b'
        },
        {
          drugType: '西药处方',
          drugName: '酮替芬',
          drugJx: '吸入剂',
          drugNumber: 'L20030000032b'
        },
        {
          drugType: '西药处方',
          drugName: '酮替芬',
          drugJx: '吸入剂',
          drugNumber: 'L20030000032b'
        },
        {
          drugType: '西药处方',
          drugName: '酮替芬',
          drugJx: '吸入剂',
          drugNumber: 'L20030000032b'
        },
        {
          drugType: '西药处方',
          drugName: '酮替芬',
          drugJx: '吸入剂',
          drugNumber: 'L20030000032b'
        },
        {
          drugType: '西药处方',
          drugName: '酮替芬',
          drugJx: '吸入剂',
          drugNumber: 'L20030000032b'
        }]
    };
  }
};
</script>
<style>
.el-table th{
  background-color: #C9DBEE;
}
.content{
  background-color: #efefef;
}
.capacity-title{
  margin: calc(20/1080*100vh) 0;
}
.expense{
  padding: calc(40/1080*100vh) calc(30/1920*100vw);
 background-color: #fff;
}
.pagination{
  margin-top: calc(50/1080*100vh);
  margin-left: 50%;
  transform: translate(-50%);
}
</style>

