<template>
  <el-form :label-position="1" size="mini">
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
</template>

<script>
import InputChat from "./formNewWorkOrderComponent/inputChat.vue";
import SearchProductName from "./formNewWorkOrderComponent/SearchProductName.vue";
import SearchManufacturer from "./formNewWorkOrderComponent/SearchManufacturer.vue";
import SearchModel from "./formNewWorkOrderComponent/SearchModel.vue";
import InputCustomerName from "./formNewWorkOrderComponent/InputCustomerName.vue";
import InputCustomerPhone from "./formNewWorkOrderComponent/InputCustomerPhone.vue";
import InputSerialNumber from "./formNewWorkOrderComponent/InputSerialNumber.vue";
import InputIMEI from "./formNewWorkOrderComponent/InputIMEI.vue";
import InputView from "./formNewWorkOrderComponent/InputView.vue";
import InputComplection from "./formNewWorkOrderComponent/InputComplection.vue";
import InputTrouble from "./formNewWorkOrderComponent/InputTrouble.vue";
import SearchServiceOrder from "./formNewWorkOrderComponent/SearchServiceOrder.vue";
import SearchEngineer from "./formNewWorkOrderComponent/SearchEngineer.vue";
import SearchPrice from "./formNewWorkOrderComponent/SearchPrice.vue";

export default {
  name: "receivingRedactForm",
  components: {
    InputChat,
    SearchProductName,
    SearchManufacturer,
    SearchModel,
    InputCustomerName,
    InputCustomerPhone,
    InputSerialNumber,
    InputIMEI,
    InputView,
    InputComplection,
    InputTrouble,
    SearchServiceOrder,
    SearchEngineer,
    SearchPrice
  },
}
</script>

<style scoped>
.input-form {
  margin-top: 20px;
  position: inherit;
}

.form-item {
  margin-left: 20px;
  margin-right: 20px;
}
</style>
