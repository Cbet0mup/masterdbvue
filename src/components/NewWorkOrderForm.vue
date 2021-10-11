<template>
  <div>
    <el-dialog title="Новый заказ"
               v-model="isVisible"
               :before-close="cancel"
               :close-on-click-modal="false"
               :close-on-press-escape="false"
               width="50%"
               :center="true"
               class="bg-purple"
    >
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
<!--          <el-form-item class="form-item">-->
<!--            <el-input class="input-form" v-model="form.serviceId" placeholder="Вид услуги"></el-input>-->
<!--          </el-form-item>-->
<!--          <el-button class="button-add" icon="el-icon-circle-plus" size="mini" circle></el-button>-->

          <el-form-item class="form-item">
              <search-engineer class="input-form"/>
          </el-form-item>

          <!--                                          ?                                    -->
          <el-form-item class="form-item">
            <search-service-order class="input-form"/>
          </el-form-item>



        </el-row>
        <!--                                                                              -->

        <el-row style="background-color: #4e9d54">
          <el-form-item class="form-item">
            <el-input class="input-form" v-model="form.priceId" placeholder="Прайс"></el-input>
          </el-form-item>
        </el-row>

      </el-form>

      <template #footer>
    <span class="dialog-footer">
      <el-button @click="cancel">Закрыть</el-button>
      <el-button type="primary" @click="save"
      >Сохранить</el-button
      >
    </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import {HTTP} from "../api/instance.js";
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

export default {
  name: "NewWorkOrderForm",
  components: {SearchProductName, SearchManufacturer, SearchModel, InputCustomerName, InputCustomerPhone,
    InputSerialNumber, InputIMEI, InputView, InputComplection, InputTrouble, SearchServiceOrder, SearchEngineer},
  props: ['isVisible'],
  emits: ['cancelForm'],
  data() {
    return {
      myVisible: this.isVisible,
      activeIndex: '1',

      labelPosition: 'left',
    }
  },

  computed: {
    form() {
      return this.$store.getters.getForm;
    }
  },

  methods: {
    cancel() {
      //console.log(this.productId)
      this.myVisible = false;
      this.$emit('cancelForm', this.myVisible)
    },
    async save() {
      const json = JSON.stringify(this.form);

      await HTTP.post('/workorder', json)
          .then(function (response) {
            console.log("OK   " + response);
            this.clearForm();
          })
          .catch(function (error) {
            console.log("ERRRR" + error);
          });
    },
    clearForm(){
      this.$store.commit('setClearForm', {
        customerName: '',      //имя заказчика /
        customerPhone: '',      //телефон
        productId: '',      //тип: телек, кондёр, наушники
        manufacturerId: 0, //производитель
        serialNumber: '',     //серийник
        imei: '',             //имей
        view: '',             // внешний вид
        complection: '',        //комплектация
        trouble: '',          // неисправность
        modelId: '',              //модель
        serviceId: '',      //услуга платный, гарантийный, повторный
        engineerId: '',     // мастер
        priceId: '',           //  стоимосто по прейскуранту

        receiverId: 1,
        statusId: 1,
      })
    }
  }
}
</script>

<style scoped>

.button-add {
  margin: 20px;
}

.input-form {
  margin-top: 20px;
  position: inherit;
}

.form-item {
  margin-left: 20px;
}
</style>
