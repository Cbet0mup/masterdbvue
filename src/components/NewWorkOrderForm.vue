<template>
  <el-dialog title="Новый заказ"
             v-model="isVisible"
             :before-close="cancel"
             :close-on-click-modal="false"
             :close-on-press-escape="false"
             width="75%"
             :center="true"
  >
    <el-form :label-position="labelPosition" size="mini">

      <!-- заказчик -->
      <el-row class="customer" :gutter="20">
        <el-col :span="10">
          <div class="grid-content">
            <el-form-item label="ФИО/Наименование">
              <el-input v-model="form.customerName"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="grid-content">
            <el-form-item label="Телефон">
              <el-input v-model="form.customerPhone"></el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>

      <!-- изделие -->
      <el-row class="product" :gutter="20">
        <el-col :span="4">
          <div class="grid-content">
            <el-form-item label="Тип изделия">
              <el-input v-model="form.productName"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-form-item label="Марка">
              <el-input v-model="form.manufacturerName"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-form-item label="Модель">
              <el-input v-model="form.model"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-form-item label="Серийный номер">
              <el-input v-model="form.serial"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-form-item label="IMEI">
              <el-input v-model="form.imei"></el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row class="product" :gutter="24">
        <el-col :span="8">
          <div class="grid-content">
            <el-form-item label="Внешний вид">
              <el-input v-model="form.view"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <el-form-item label="Комплектация">
              <el-input v-model="form.complection"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <el-form-item label="Заявленная неисправность">
              <el-input v-model="form.trouble"></el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>

      <!-- ремонт -->
      <el-row class="repair" :gutter="24">
        <el-col :span="8">
          <div class="grid-content">
            <el-form-item label="Вид услуги">
              <el-input v-model="form.typeService"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <el-form-item label="Мастер">
              <el-input v-model="form.engineerName"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <el-form-item label="Прайс">
              <el-input v-model="form.price"></el-input>
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
</template>

<script>
export default {
  name: "NewWorkOrderForm",
  props: ['isVisible'],
  emits: ['cancelForm'],
  data() {
    return {
      myVisible: this.isVisible,
      activeIndex: '1',
      form: {
        customerName: '',      //имя заказчика /
        customerPhone: '',      //телефон
        productName: '',   //тип: телек, кондёр, наушники
        manufacturerName: '',
        serialNumber: '',
        imei: '',
        view: '',   // внешний вид
        complection: '',
        trouble: '',      // неисправность
        model: '',
        serviceName: '',      //услуга платный, гарантийный, повторный
        engineerName: '',     // мастер
        price: '',        //  стоимосто по прейскуранту
      },
      labelPosition: 'top',
    }
  },
  methods: {
    cancel() {
      this.myVisible = false;
      this.$emit('cancelForm', this.myVisible)
    },
    save() {
      this.cancel();

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
  min-height: 36px;
}
.product {
  background-color: #efffff;
}
.repair {
  background-color: darkgray;
}
.customer {
  background-color: #afc4c4;

}
</style>
