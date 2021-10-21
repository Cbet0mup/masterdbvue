<template xmlns="http://www.w3.org/1999/html">
  <el-container>
    <el-header class="myHeader">
      <a style="text-align: center; margin-top: 10px; margin-bottom: 10px">Журнал</a>
    </el-header>
    <!--    панель управления-->
    <div class="line">
      <el-row>
        <el-button class="button-menu" @click="updateThisWorkOrder" type="primary" plain icon="el-icon-document-add">
          Сохранить
        </el-button>
        <el-input class="input-search-workorder" placeholder="Поиск заказа" v-model="searchInput"></el-input>
      </el-row>
    </div>

    <el-container class="container">

      <!--     левая боковая панель со списком-->
      <el-aside class="aside">
        <tabs-work-orders-repair/>
      </el-aside>

      <!--      центральная панель с инфой по заказу-->

      <el-main class="form">
        <el-col :span="16">

        <el-row class="row-container">

          <div class="grid-content bg-purple">Наряд-заказ № <strong>{{ selectWorkOrder.id }}</strong></div>


            <div class="grid-content bg-purple-light">{{ selectWorkOrder.serviceName }}</div>


            <div class="grid-content bg-purple">Принял: {{ selectWorkOrder.receiverName }}</div>

        </el-row>

                  <el-form size="mini">
                    <!-- заказчик -->
                    <el-row>
                      <el-form-item class="grid-content">
                        <div >ФИО:</div>
                        <div class="bg-purple-light"><strong>{{ selectWorkOrder.customerName }}</strong></div>

                      </el-form-item>

                      <el-form-item class="grid-content">
                        <div>Телефон:</div>
                        <div class="bg-purple"><strong><strong>{{ selectWorkOrder.customerPhone }}</strong></strong></div>

                      </el-form-item>

                    </el-row>

                    <!-- изделие -->
                    <el-row>
                      <el-form-item class="grid-content">
                        <div>Изделие:</div>
                        <div class="bg-purple"><strong>{{ selectWorkOrder.productName }}</strong></div>
                      </el-form-item>

                      <el-form-item class="grid-content">
                        <div>Фирма:</div>
                        <div class="bg-purple-light"><strong>{{ selectWorkOrder.manufacturerName }}</strong></div>
                      </el-form-item>

                      <el-form-item class="grid-content">
                        <div>Модель:</div>
                        <div class="bg-purple"><strong>{{ selectWorkOrder.modelName }}</strong></div>
                      </el-form-item>
                    </el-row>

                    <el-row>
                      <el-form-item class="grid-content">
                        <div>Серийный номер:</div>
                        <div class="bg-purple-light"><strong>{{ selectWorkOrder.serialNumber }}</strong></div>
                      </el-form-item>


                      <el-form-item class="grid-content">
                        <div>IMEI:</div>
                        <div class="bg-purple"><strong>{{ selectWorkOrder.imei }}</strong></div>
                      </el-form-item>
                    </el-row>


                    <el-row>
                      <el-form-item class="grid-content">
                        <div>Внешний вид:</div>
                        <div class="bg-purple">
                          <el-input
                              readonly
                              type="textarea"
                              autosize
                              placeholder="Please input"
                              v-model="selectWorkOrder.look"
                          ></el-input>
                        </div>
                      </el-form-item>


                      <el-form-item class="grid-content">
                        <div>Комплектация:</div>
                        <div class="bg-purple-light">
                          <el-input
                              readonly
                              type="textarea"
                              autosize
                              v-model="selectWorkOrder.complection"
                          ></el-input>
                        </div>
                      </el-form-item>


                      <el-form-item class="grid-content">
                        <div>Заявленная неисправность:</div>
                        <div class="bg-purple">
                          <el-input
                              readonly
                              type="textarea"
                              autosize
                              v-model="selectWorkOrder.trouble"
                          ></el-input>
                        </div>
                      </el-form-item>
                    </el-row>

                    <!-- бабки -->
                    <el-row>
                      <el-form-item class="grid-content">
                        <div>Стоимость ремонта:</div>
                        <div class="bg-purple-light"><strong>{{ selectWorkOrder.price }}</strong></div>
                      </el-form-item>

                      <el-form-item class="grid-content">
                        <div>Предоплата:</div>
                        <div class="bg-purple"><strong>{{ selectWorkOrder.prepayment }}</strong></div>
                      </el-form-item>

                      <el-form-item class="grid-content">

                      </el-form-item>
                    </el-row>

<!--                    работы        -->
                    <el-row>
                      <el-form-item class="grid-content">
                        <div>Описание выявленных дефектов:</div>
                        <div>
                          <el-input
                              type="textarea"
                              autosize
                              placeholder="Please input"
                              v-model="selectWorkOrder.troubleDetected"
                              @input="troubleDetectedSave"
                          ></el-input>
                          </div>
                      </el-form-item>

                      <el-form-item class="grid-content">
                        <div>Описание выполненых работ:</div>
                        <div>
                          <el-input
                              type="textarea"
                              autosize
                              placeholder="Please input"
                              v-model="selectWorkOrder.troubleSolving"
                              @input="troubleSolvingSave"
                          ></el-input>
                        </div>
                      </el-form-item>
                    </el-row>

                  </el-form>
      </el-col>
        <el-col :span="7">
          <chat-work-orders-note/>

        </el-col>
      </el-main>

    </el-container>
  </el-container>


</template>

<script>
import TabsWorkOrdersRepair from "../components/tables/TabsWorkOrdersRepair.vue";
import chatWorkOrdersNote from "../components/tables/chatWorkOrdersNote.vue";

export default {
  name: "workorders",
  components: {TabsWorkOrdersRepair, chatWorkOrdersNote},

  computed: {
    selectWorkOrder() {
      return this.$store.getters.getSelectWorkOrderTabsRepair;
    },
    form() {
      return this.$store.getters.getForm;
    }
  },

  data() {
    return {
      searchInput: '',
      troubleDetected: '',
      message: {},
      messages: ["всем привет", "", "И тебе не хворать", "сами вы такие сучары", "все кто выше - долбоёбы"]
    }
  },
  methods: {
    troubleDetectedSave(data){
        this.$store.commit('setTroubleDetected', data);
    },
    troubleSolvingSave(data){
      this.$store.commit('setTroubleSolving', data);
    },
    updateThisWorkOrder(){
      console.log("OK   " + this.form.troubleDetected);
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
.container {
  /*height: 500px;*/
  margin: 10px;
}

.myHeader {
  max-height: content-box;
  text-align: center;
  display: contents;
}

.line {
  background-color: rgba(208, 224, 193, 0.99);
  display: block;
  border: 1px solid #8bef0e;
  padding: 1px;
  margin-left: 10px;
  margin-right: 10px;
}

.button-menu {
  margin-left: 20px;
}

.input-search-workorder {
  width: 130px;
  margin-left: auto;
  margin-right: 20px;
}

.form {
  margin-left: 10px;
  margin-right: 10px;
  display: inline;
}

.bg-purple {
  background: #e5edf5;
}

.bg-purple-light {
  background: #f0f3f8;
}

.grid-content {
  min-width: 190px;
  /*text-align: center;*/
  margin: 5px;
  padding: 5px;
  display: block;
  border: 1px dashed #c1fa76;

}
.row-container {

}
.aside{
  min-width: 370px;
  border: 1px dashed #c1fa76;
  padding: 5px;
}
.form-item {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
