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
              <el-form-item label="ФИО/Наименование">
                <el-input v-model="form.customerName"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content, customer">
              <el-form-item label="Телефон">
                <el-input v-model="form.customerPhone"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <!-- изделие -->
        <el-row :gutter="20">
          <el-col :span="4">
            <div class="grid-content, product">
              <el-form-item label="Тип изделия">
<!--                <el-input v-model="form.productId"></el-input>-->
                <search-product-name/>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content, product">
              <el-form-item label="Марка">
                <el-input v-model="form.manufacturerId"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content, product">
              <el-form-item label="Модель">
                <el-input v-model="form.modelId"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content, product">
              <el-form-item label="Серийный номер">
                <el-input v-model="form.serialNumber"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content, product">
              <el-form-item label="IMEI">
                <el-input v-model="form.imei"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="8">
            <div class="grid-content, product">
              <el-form-item label="Внешний вид">
                <el-input v-model="form.view"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content, product">
              <el-form-item label="Комплектация">
                <el-input v-model="form.complection"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content, product">
              <el-form-item label="Заявленная неисправность">
                <el-input v-model="form.trouble"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <!-- ремонт -->
        <el-row :gutter="24">
          <el-col :span="4">
            <div class="grid-content, repair">
              <el-form-item label="Вид услуги">
                <el-input v-model="form.serviceId"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content, repair">
              <el-form-item label="Мастер">
                <el-input v-model="form.engineerId"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content, repair">
              <el-form-item label="Наименование услуги">
                <el-input v-model="form.priceId"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content, repair">
              <el-form-item label="Прайс">
                <el-input v-model="form.priceId"></el-input>
              </el-form-item>
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
      labelPosition: 'top',
    }
  },
  methods: {
    cancel() {
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
      //this.cancel();

    }
  }
}
</script>

<style scoped>

:last-child {
  margin-bottom: 0;
}

.grid-content {
  border-radius: 4px;
  min-height: 24px;
}

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
</style>
