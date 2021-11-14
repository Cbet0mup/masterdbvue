<template>
  <div>
    <el-dialog title="Новый заказ"
               v-model="isVisible"
               :before-close="cancel"
               :close-on-click-modal="false"
               :close-on-press-escape="false"
               :show-close = "false"
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
          <el-form-item class="form-item">
            <search-service-order class="input-form"/>
          </el-form-item>

          <el-form-item class="form-item">
            <search-engineer class="input-form"/>
          </el-form-item>

          <el-form-item class="form-item">
            <input-chat class="input-form"/>
          </el-form-item>
        </el-row>

        <el-row style="background-color: #4e9d54">
          <el-form-item class="form-item">
            <search-price class="input-form"/>
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
import {HTTP} from "../../api/instance.js";
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
import InputChat from "./formNewWorkOrderComponent/inputChat.vue";

export default {
  name: "NewWorkOrderForm",
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
  props: ['isVisible'],
  data() {
    return {
      myVisible: this.isVisible,
      activeIndex: '1',
      labelPosition: 'left',
      url: '/workorder',
    }
  },

  computed: {
    form() {
      return this.$store.getters.getForm;
    }
  },
  mounted() {
    this.clearForm();
  },

  methods: {
    cancel() {
      this.clearForm();
      this.myVisible = false;
      this.$emit('cancelForm', this.myVisible)
    },

    async save() {
      if (this.validateForm()) {
        this.$store.commit('setIsAccepted', 'true')
        const json = JSON.stringify(this.form);

        await HTTP.post(this.url, json)
            .then(function (response) {
              console.log("OK   " + response);
            })
            .catch(function (error) {
              console.log("ERRRR" + error);
            });
        this.cancel()
      } else {
        this.$message({
          type: 'error',
          message: "Ошибка: Форма не заполнена!",
        })
      }

    },

    clearForm() {
      this.$store.commit('setClearForm', {
        id: '',
        createdAt: '',      //дата приёмки
        givenOut: '',       //дата выдачи  клиенту на руки
        dateOfIssue: '',        //дата выдачи инженером

        customerName: '',      //имя заказчика /
        customerPhone: '',      //телефон

        serialNumber: '',     //серийник
        imei: '',             //имей
        look: '',             // внешний вид
        complection: '',        //комплектация

        modelId: '',              //модель
        modelName: '',
        serviceId: '',      //услуга платный, гарантийный, повторный
        serviceName: '',
        engineerId: '',     // мастер
        productId: '',      //тип: телек, кондёр, наушники
        manufacturerId: '', //производитель
        manufacturerName: '',

        trouble: '',          // неисправность
        troubleDetected: '',    //выявленная неисправность
        troubleSolving: '',     //описание работ

        priceId: '',           //  прейскурант
        priceName: '',
        price: '',
        prepayment: '',           //  предоплата
        finalPrice: '',           /// окончательная стоимость ремонта
        additionalPrice: '',           ///стоимость доп работ и деталей
        chatLog: '',                 //примечания

        isAccepted: 'true',             //принят
        isNeedCall: 'false',
        isDone: 'false',
        isDoneIsCalled: 'false',
        isGivenOut: 'false',
        isWaitingForASpareParts: 'false',   // статус: ожидает деталь



        receiverId: 1,          //приёмщик
        statusId: 1,            //статус - принят, выдан итд
      })
    },

    validateForm() {
      return this.form.customerName !== '' &
          this.form.customerPhone !== '' &
          this.form.productId !== '' &
          this.form.manufacturerId !== '' &
          this.form.modelId !== '' &
          this.form.serviceId !== '' &
          this.form.engineerId !== '';
    },
  }
}
</script>

<style scoped>
.input-form {
  margin-top: 20px;
  position: inherit;
}

.form-item {
  margin-left: 20px;
}
</style>
