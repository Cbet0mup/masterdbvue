<template>
  <div class="line">
    <el-row>
        <el-button class="button-menu" @click="save" type="success" plain icon="el-icon-document-add">
          Сохранить
        </el-button>
      <el-tooltip
          v-if="selectRowData.isNeedCall"
          class="item"
          effect="dark"
          content="Связь с клиентом состоялась"
          placement="top"
      >
        <el-button @click="saveStatus" class="button-menu" type="warning" icon="el-icon-close-notification" circle></el-button>
      </el-tooltip>

      <el-tooltip
          v-if="selectRowData.isDone"
          class="item"
          effect="dark"
          content="Клиент извещён"
          placement="top"
      >
        <el-button @click="saveStatusIsDoneIsCalled" class="button-menu" type="danger" icon="el-icon-close-notification" circle></el-button>
      </el-tooltip>

      <el-tooltip
          v-if="selectRowData.isDone || selectRowData.isDoneIsCalled"
          class="item"
          effect="dark"
          content="Выдать"
          placement="top"
      >
        <el-button @click="updateGivenOut" class="button-menu" type="success" icon="el-icon-present" circle></el-button>
      </el-tooltip>

      <el-tooltip
          v-if="selectRowData.isDone || selectRowData.isDoneIsCalled || selectRowData.isGivenOut"
          class="item"
          effect="dark"
          content="Вернуть в ремонт"
          placement="top"
      >
        <el-button @click="updateThisIsDone" class="button-menu" type="info" icon="el-icon-refresh-right" circle></el-button>
      </el-tooltip>
      <div v-if="selectRowData.isGivenOut" style="margin-left: auto; margin-right: 100px; margin-top: 10px; font-size: larger">
        <strong>Инфо: {{ infoIsGivenOut }}</strong>
      </div>
      <div  style="margin-left: auto; margin-right: 100px; margin-top: 10px; font-size: larger">
        <strong>Заказ № {{ selectRowData.id }}</strong>
      </div>
    </el-row>
  </div>
</template>

<script>
import {HTTP} from "../../api/instance.js";

export default {
  name: "receivingRedactMenu",
  data() {
    return{
      urlNeedCall: '/workorder/needCall',
      urlGivenOut: '/workorder/givenout',
      isNeedCallDto: {
        id: '',
        isNeedCall: ''
      },
      isDoneIsCalledDTO: {
        id: ''
      },
      givenOutDTO: {
        id: ''
      },
      url: '/workorder/update',
      urlIsDone: '/workorder/isDone',
      urlIsDoneIsCalled: '/workorder/isDoneIsCalled',
      isDoneUpdateEntity: {
        id: '',
        isDone: ''
      },
      infoIsGivenOut: 'Заказ выдан клиенту.',
    }
  },
  computed: {
    selectRowData() {
      return this.$store.getters.getSelectRow;
    },
    form() {
      return this.$store.getters.getForm;
    },
    tableDataWorkOrders() {
      return this.$store.getters.getTableDataWorkOrders;
    },
  },
  methods: {
    async updateGivenOut() {              //выдаём клиенту
      this.givenOutDTO.id = this.selectRowData.id;

      await HTTP.post(this.urlGivenOut, JSON.stringify(this.givenOutDTO))
          .then(function (response) {
            console.log("given out - OK " + response);
          })
          .catch(function (error) {
            console.log("giv out save ERRRR" + error);
          });
    },

    async updateIsNeedCallToServer(url, dto) {                //статус созвона
      await HTTP.post(url, JSON.stringify(dto))
          .then(function (response) {
            //console.log("chat - OK " + response);
          })
          .catch(function (error) {
            //console.log("chat save ERRRR" + error);
          });
    },
    saveStatus(){
      this.isNeedCallDto.id = this.selectRowData.id;
      this.isNeedCallDto.isNeedCall = false;
      this.updateIsNeedCallToServer(this.urlNeedCall, this.isNeedCallDto);
      this.$message({
        type: 'success',
        message: "Статус: Связь состоялась."
      })
    },

    saveStatusIsDoneIsCalled(){
      this.isDoneIsCalledDTO.id = this.selectRowData.id;
      this.updateIsNeedCallToServer(this.urlIsDoneIsCalled, this.isDoneIsCalledDTO);
      this.$message({
        type: 'success',
        message: "Статус: Клиент извещён."
      })
    },

    async save() {
      this.$store.commit('setIsAccepted', this.selectRowData.isAccepted);
      this.$store.commit('setIsNeedCall', this.selectRowData.isNeedCall);
      this.$store.commit('setIsDone', this.selectRowData.isDone);
      this.$store.commit('setIsDoneIsCalled', this.selectRowData.isDoneIsCalled);
      this.$store.commit('setIsGivenOut', this.selectRowData.isGivenOut);

      if (this.validateForm()) {
        const json = JSON.stringify(this.form);

        await HTTP.post(this.url, json)
            .then(function (response) {
              console.log("OK   " + response);
            })
            .catch(function (error) {
              console.log("ERRRR" + error);
            });
        this.$message({
          type: 'success',
          message: "Данные сохранены."
        })
      } else {
        this.$message({
          type: 'error',
          message: "Ошибка: Форма не заполнена!",
        })
      }

    },

    async updateThisIsDone() {
      this.isDoneUpdateEntity.id = this.selectRowData.id;
      this.isDoneUpdateEntity.isDone = false;   //выдано


      const json = JSON.stringify(this.isDoneUpdateEntity);

      await HTTP.post(this.urlIsDone, json)
          .then(function (response) {
            console.log("isdone false - OK " + response);
          })
          .catch(function (error) {
            console.log("isdone false save ERRRR" + error);
          });
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
.button-menu{
  margin-left: 20px;
}
.line{
  background-color: rgba(208, 224, 193, 0.99);
  display: block;
  border: 1px solid #8bef0e;
  padding: 1px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
