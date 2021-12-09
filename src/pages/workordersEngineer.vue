<template xmlns="http://www.w3.org/1999/html">
  <el-container>
    <el-header class="myHeader">
      <a style="text-align: center; margin-top: 10px; margin-bottom: 10px">Обработка заказа</a>
    </el-header>
    <!--    панель управления-->
    <div class="line">
      <el-row>
        <el-button class="button-menu" @click="updateThisWorkOrder" type="success" plain icon="el-icon-document-add">
          Сохранить
        </el-button>

        <el-tooltip
            class="item"
            effect="dark"
            content="Связь с клиентом"
            placement="top"
        >
          <el-button @click="dialogFormVisible = true" class="button-menu" type="warning" icon="el-icon-phone"
                     circle></el-button>
        </el-tooltip>

        <el-tooltip
            class="item"
            effect="dark"
            content="Статус: ожидает деталь"
            placement="top"
        >
          <el-button @click="updateThisIsWaiting" class="button-menu" type="primary" icon="el-icon-watch"
                     circle></el-button>
        </el-tooltip>

        <el-tooltip
            class="item"
            effect="dark"
            content="Завершить ремонт"
            placement="top"
        >
          <el-button @click="updateThisIsDone" class="button-menu" type="success" icon="el-icon-present"
                     circle></el-button>
        </el-tooltip>
        <div style="margin-left: auto; margin-right: 100px; margin-top: 10px; font-size: larger">
          <strong>Заказ № {{ form.id }}</strong>
        </div>
      </el-row>
    </div>

    <el-container class="container">

      <!--     левая боковая панель со списком-->
      <el-aside class="aside">
        <tabs-work-orders-repair @save-data="updateThisWorkOrder"/>
      </el-aside>

      <!--      центральная панель с инфой по заказу-->

      <el-main class="form">
        <el-col :span="16">

          <el-row class="row-container">
            <!--            СТАТУС            -->
            <div class="status bg-purple">
              Статус:
            </div>
            <el-tooltip v-if="selectWorkOrder.isAccepted" content="Принят в работу" placement="top">
              <el-button type="success" icon="el-icon-s-tools" circle></el-button>
            </el-tooltip>
            <el-tooltip v-if="selectWorkOrder.isNeedCall" content="Связь с клиентом" placement="top">
              <el-button type="warning" icon="el-icon-phone" circle></el-button>
            </el-tooltip>
            <el-tooltip v-if="selectWorkOrder.isWaitingForASpareParts" content="Ожидает деталь" placement="top">
              <el-button type="primary" icon="el-icon-watch" circle></el-button>
            </el-tooltip>
          </el-row>

          <el-row class="row-container">

            <div class="grid-content bg-purple">Наряд-заказ № <strong>{{ selectWorkOrder.id }}</strong></div>


            <div class="grid-content bg-purple-light">{{ selectWorkOrder.serviceName }}</div>


            <div class="grid-content bg-purple">Принял: {{ selectWorkOrder.receiverName }}</div>

          </el-row>

          <el-form size="mini">
            <!-- заказчик -->
            <el-row>
              <el-form-item class="grid-content">
                <div>ФИО:</div>
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

            <!--                                         работы        -->
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
        <!--                                                                       chat         -->
        <el-col :span="8">
          <chat-work-orders-note
              :isVisible="dialogFormVisible"
              @cancel-form="closeForm"

          />

        </el-col>
      </el-main>

    </el-container>
  </el-container>


</template>

<script>
import TabsWorkOrdersRepair from "../components/tables/TabsWorkOrdersRepair.vue";
import chatWorkOrdersNote from "../components/tables/chatWorkOrdersNote.vue";
import {HTTP} from "../api/instance";

export default {
  name: "workorders",
  components: {TabsWorkOrdersRepair, chatWorkOrdersNote},

  computed: {
    selectWorkOrder() {
      return this.$store.getters.getSelectWorkOrderTabsRepair;
    },
    form() {
      return this.$store.getters.getForm;
    },
    tableDataWorkOrders() {
      return this.$store.getters.getTableDataWorkOrders;
    },
    isModify() {
      return this.$store.getters.getIsModify;
    }
  },

  data() {
    return {
      dialogFormVisible: false,
      searchInput: '',
      troubleDetected: '',
      urlApi: '/workorder/engineersaveworkorder',
      urlIsDone: '/workorder/isDone',
      urlIsWaiting: '/workorder/isWaitingSpareParts',
      thisTableData: [],
      updateWorkOrdersEngineer: {
        id: '',
        troubleDetected: '',
        troubleSolving: ''
      },
      isDoneUpdateEntity: {
        id: '',
        isDone: ''
      },
      isWaitingEntity: {
        id: '',
        isWaitingForASpareParts: ''
      },
    }
  },
  methods: {
    troubleDetectedSave(data) {
      this.$store.commit('setTroubleDetected', data);
      this.$store.commit('setIsModify', true);

    },

    troubleSolvingSave(data) {
      this.$store.commit('setTroubleSolving', data);
      this.$store.commit('setIsModify', true);
    },

    async updateThisWorkOrder() {      ////изменение заказа/наряда (выявленная неисправность и описание работ)
      if (!this.isModify) {
        this.$message({
          type: 'error',
          message: 'Описание выявленных дефектов и описание работ не менялись, сохранять нечего',
        })
      } else {
        this.updateWorkOrdersEngineer.id = this.form.id;
        this.updateWorkOrdersEngineer.troubleDetected = this.form.troubleDetected;
        this.updateWorkOrdersEngineer.troubleSolving = this.form.troubleSolving;

        const json = JSON.stringify(this.updateWorkOrdersEngineer);

        await HTTP.post(this.urlApi, json)
            .then(function (response) {
              //console.log("chat - OK " + response);
            })
            .catch(function (error) {
              console.error("chat save ERRRR" + error);
            });
        this.$store.commit('setIsModify', false);  //модификация проведена
        this.$message({
          type: 'success',
          message: 'Данные сохранены'
        })
      }
    },

    closeForm(isVisible) {
      this.dialogFormVisible = isVisible;
    },

    async updateThisIsDone() {
      this.isDoneUpdateEntity.id = this.selectWorkOrder.id;
      this.isDoneUpdateEntity.isDone = true;                        //выдано
      this.thisTableData = this.tableDataWorkOrders;

      const json = JSON.stringify(this.isDoneUpdateEntity);

      await HTTP.post(this.urlIsDone, json)
          .then(function (response) {
            console.log("isdone - OK " + response);
          })
          .catch(function (error) {
            console.log("chat save ERRRR" + error);
          });
      let num = this.tableDataWorkOrders.findIndex(item => {      // номер в массиве заказов, нужен для удаления ненужного
        return item.id === this.selectWorkOrder.id;
      })
      this.thisTableData.splice(num, 1);
      this.$store.commit('setTableDataWorkOrders', this.thisTableData);
    },

    async updateThisIsWaiting() {
      let num = this.tableDataWorkOrders.findIndex(item => {      // номер в массиве заказов, нужен для правки ненужного
        return item.id === this.selectWorkOrder.id;
      })

      this.isWaitingEntity.id = this.selectWorkOrder.id;
      this.isWaitingEntity.isWaitingForASpareParts = !this.selectWorkOrder.isWaitingForASpareParts;                        //статус изменён
      this.thisTableData = this.tableDataWorkOrders;

      const json = JSON.stringify(this.isWaitingEntity);

      await HTTP.post(this.urlIsWaiting, json)
          .then(function (response) {
            console.log("iswait - OK " + response);
          })
          .catch(function (error) {
            console.log("iswait save ERRRR" + error);
          });
      //правим локальные данные, актуальность
      this.thisTableData[num].isWaitingForASpareParts = this.isWaitingEntity.isWaitingForASpareParts;
      this.$store.commit('setTableDataWorkOrders', this.thisTableData);
    }
  },
}
</script>

<style scoped>
.container {
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
  margin: 5px;
  padding: 5px;
  display: block;
  border: 1px dashed #c1fa76;
}

.aside {
  min-width: 400px;
  border: 1px dashed #c1fa76;
  padding: 5px;
}

.status {
  min-width: 50px;
  margin: 5px;
  padding: 5px;
  display: block;
  border: 1px dashed #c1fa76;
}
</style>
