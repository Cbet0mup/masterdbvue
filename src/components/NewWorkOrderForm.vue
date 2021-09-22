<template>
  <div>
    <el-dialog title="Новый заказ"
               v-model="isVisible"
               :before-close="cancel"
               :close-on-click-modal="false"
               :close-on-press-escape="false"
               width="75%"
               :center="true"
               class="bg-purple"
    >
      <el-form :label-position="labelPosition" size="mini">
        <!-- заказчик -->
        <el-row :gutter="20">
          <el-col :span="5">
            <div class="grid-content, customer">
              <el-form-item >
                <el-button style="margin: 2px" icon="el-icon-circle-plus" size="mini" circle></el-button>
              <el-input v-model="form.customerName" placeholder="ФИО/Наименование"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content, customer">
              <el-input v-model="form.customerPhone" placeholder="Телефон"></el-input>
            </div>
          </el-col>
        </el-row>

        <!-- изделие -->
        <el-row :gutter="24">

          <el-col :span="5" class="row-bg">
            <div class="grid-content, product">
              <el-button style="margin: 2px" icon="el-icon-circle-plus" size="mini" circle></el-button>

              <search-product-name
                    @get-product="getProduct"
                />
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content, product">
                <el-input v-model="form.manufacturerId" placeholder="Марка"></el-input>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content, product">
                <el-input v-model="form.modelId" placeholder="Модель"></el-input>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content, product">
                <el-input v-model="form.serialNumber" placeholder="Серийный номер"></el-input>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content, product">
                <el-input v-model="form.imei" placeholder="IMEI"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="8">
            <div class="grid-content, product">
                <el-input v-model="form.view" placeholder="Внешний вид"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content, product">
                <el-input v-model="form.complection" placeholder="Комплектация"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content, product">
                <el-input v-model="form.trouble" placeholder="Заявленная неисправность"></el-input>
            </div>
          </el-col>
        </el-row>

        <!-- ремонт -->
        <el-row :gutter="24">
          <el-col :span="4">
            <div class="grid-content, repair">
                <el-input v-model="form.serviceId" placeholder="Вид услуги"></el-input>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content, repair">
                <el-input v-model="form.engineerId" placeholder="Инженер"></el-input>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content, repair">
                <el-input v-model="form.priceId" placeholder="Наименование услуги"></el-input>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content, repair">
                <el-input v-model="form.priceId" placeholder="Прайс"></el-input>
            </div>
          </el-col>
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
import SearchProductName from "./FormComponent/SearchProductName.vue";

export default {
  name: "NewWorkOrderForm",
  components: {SearchProductName},
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

.customer {
  background-color: #efefff;
  margin: 10px;

}
.row-bg {
  padding: 1px 0;
  background-color: #6be775;
}
.row-pg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
