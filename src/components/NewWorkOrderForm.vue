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
            <el-input class="input-form" v-model="form.customerName" placeholder="ФИО/Наименование"></el-input>
          </el-form-item>

          <el-form-item class="form-item">
            <el-input class="input-form" v-model="form.customerPhone" placeholder="Телефон"></el-input>
          </el-form-item>

        </el-row>

        <!-- изделие -->
        <el-row style="background-color: #7ca13e">
          <el-form-item class="form-item">

              <search-product-name
                  class="input-form"
                  @get-product="getProduct"
              />
          </el-form-item >

          <el-form-item class="form-item">
              <el-input class="input-form" v-model="form.manufacturerId" placeholder="Марка"></el-input>
          </el-form-item>
          <el-button class="button-add"  icon="el-icon-circle-plus" size="mini" circle></el-button>

        </el-row>

        <el-row style="background-color: #8f3ea1">
          <el-form-item class="form-item">
<!--            <el-input class="input-form" v-model="form.modelId" placeholder="Модель"></el-input>-->
            <search-model
                class="input-form"
            />
          </el-form-item>
          <el-button class="button-add"  icon="el-icon-circle-plus" size="mini" circle></el-button>


          <el-form-item class="form-item">
            <el-input class="input-form" v-model="form.serialNumber" placeholder="Серийный номер"></el-input>
          </el-form-item>


          <el-form-item class="form-item">
            <el-input class="input-form" v-model="form.imei" placeholder="IMEI"></el-input>
          </el-form-item>
        </el-row>





        <el-row style="background-color: #c03164">

          <el-form-item class="form-item">
              <el-input class="input-form"  v-model="form.view" placeholder="Внешний вид"></el-input>
          </el-form-item>


          <el-form-item class="form-item">
              <el-input class="input-form"  v-model="form.complection" placeholder="Комплектация"></el-input>
          </el-form-item>


          <el-form-item class="form-item">
              <el-input class="input-form"  v-model="form.trouble" placeholder="Заявленная неисправность"></el-input>
          </el-form-item>

        </el-row>

        <!-- ремонт -->
        <el-row style="background-color: #e7820d">
          <el-form-item class="form-item">
              <el-input class="input-form"  v-model="form.serviceId" placeholder="Вид услуги"></el-input>
          </el-form-item>
          <el-button class="button-add"  icon="el-icon-circle-plus" size="mini" circle></el-button>

          <el-form-item class="form-item">
              <el-input class="input-form"  v-model="form.engineerId" placeholder="Инженер"></el-input>
          </el-form-item>
          <el-button class="button-add"  icon="el-icon-circle-plus" size="mini" circle></el-button>


          <!--                                          ?                                    -->
          <el-form-item class="form-item">
              <el-input class="input-form"  v-model="form.priceId" placeholder="Наименование услуги"></el-input>
          </el-form-item>

          <el-form-item class="form-item">
              <el-input class="input-form"  v-model="form.priceId" placeholder="Прайс"></el-input>
          </el-form-item>

        </el-row>
        <!--                                                                              -->

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
import SearchProductName from "./FormNewWorkOrderComponent/SearchProductName.vue";
import SearchModel from "./FormNewWorkOrderComponent/SearchModel.vue";

export default {
  name: "NewWorkOrderForm",
  components: {SearchProductName, SearchModel},
  props: ['isVisible'],
  emits: ['cancelForm'],
  data() {
    return {
      myVisible: this.isVisible,
      activeIndex: '1',
      form: {
        customerName: '',      //имя заказчика /
        customerPhone: '',      //телефон
        productId: '',      //тип: телек, кондёр, наушники
        manufacturerId: '', //производитель
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
      },
      labelPosition: 'left',
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
          })
          .catch(function (error) {
            console.log("ERRRR" + error);
          });
    },
    getProduct(id) {
      this.productId = id;
      //console.log("форма  " + this.productId);
    }
  }
}
</script>

<style scoped>

.product {
  background-color: #efffff;
  margin: 10px;

}

.repair {
  background-color: #efefff;
  margin: 10px;
}

.button-add {
  margin: 20px;
}

.input-form {
  margin-top: 20px;
  position: inherit;
}

.form-item{
  margin-left: 20px;
}
</style>
