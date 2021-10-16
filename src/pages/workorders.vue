<template>
  <el-container>
    <el-header class="myHeader">
      <a style="text-align: center; margin-top: 10px; margin-bottom: 10px">Журнал</a>
    </el-header>
    <el-container style="height: 500px; border: 1px solid #8bef0e">
      <el-aside width="370px" style="background-color: rgb(226,229,243)">
        <tabs-work-orders-repair/>
      </el-aside>
      <el-main>
        <div class="line">
          <el-row>
            <el-button class="button-menu" @click="dialogFormVisible = true" type="primary" plain icon="el-icon-cpu">Новый заказ</el-button>
            <el-input class="input-search-workorder" placeholder="Поиск заказа" v-model="input"></el-input>
          </el-row>
        </div>

        <div class="form">
          <el-form :label-position="labelPosition" size="mini">
            <!-- заказчик -->
            <el-row style="background-color: #6be775">
              <el-form-item class="form-item">
                <input-customer-name class="input-form"/>
              </el-form-item>

              <el-form-item class="form-item">
                <input-customer-phone class="input-form"/>
              </el-form-item>

            </el-row>

            <!-- изделие -->
            <el-row style="background-color: #4e9d54">
              <el-form-item class="form-item">
                <search-product-name class="input-form"/>
              </el-form-item>

              <el-form-item class="form-item">
                <search-manufacturer class="input-form"/>
              </el-form-item>

              <el-form-item class="form-item">
                <search-model class="input-form"/>
              </el-form-item>
            </el-row>

            <el-row style="background-color: #6be775">

              <el-form-item class="form-item">
                <input-serial-number class="input-form"/>
              </el-form-item>


              <el-form-item class="form-item">
                <input-i-m-e-i class="input-form"/>
              </el-form-item>
            </el-row>


            <el-row style="background-color: #4e9d54">
              <el-form-item class="form-item">
                <input-view class="input-form"/>
              </el-form-item>


              <el-form-item class="form-item">
                <input-complection class="input-form"/>
              </el-form-item>


              <el-form-item class="form-item">
                <input-trouble class="input-form"/>
              </el-form-item>
            </el-row>

            <!-- ремонт -->
            <el-row style="background-color: #6be775">
              <el-form-item class="form-item">
                <search-service-order class="input-form"/>
              </el-form-item>

              <el-form-item class="form-item">
                <search-engineer class="input-form"/>
              </el-form-item>
            </el-row>

            <el-row style="background-color: #4e9d54">
              <el-form-item class="form-item">
                <search-price class="input-form"/>
              </el-form-item>
            </el-row>

          </el-form>
        </div>
      </el-main>
    </el-container>
  </el-container>



</template>

<script>
import TabsWorkOrdersRepair from "../components/tables/TabsWorkOrdersRepair.vue";

export default {
  name: "workorders",
  components: {TabsWorkOrdersRepair},
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style scoped>
.myHeader {
  max-height: content-box;
  text-align: center;
  display: contents;
}
.line{
  background-color: rgba(208, 224, 193, 0.99);
  display: block;
  border: 1px solid #8bef0e;
  padding: 5px;
  margin: 1rem;
}
.button-menu{
  margin-left: 5rem;
}
.input-search-workorder{
  width: 150px;
  margin-left: auto;
  margin-right: 5rem;
}
.form{
  margin: 1rem;
}
</style>
