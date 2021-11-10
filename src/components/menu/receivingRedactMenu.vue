<template>
  <div class="line">
    <el-row>
        <el-button class="button-menu" @click="save" type="success" plain icon="el-icon-document-add">
          Сохранить
        </el-button>
      <el-tooltip
          class="item"
          effect="dark"
          content="Связь с клиентом состоялась"
          placement="top"
      >
        <el-button @click="saveStatus" class="button-menu" type="warning" icon="el-icon-close-notification" circle></el-button>
      </el-tooltip>
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
      isNeedCallDto: {
        id: '',
        isNeedCall: ''
      },
      url: '/workorder/update',
    }
  },
  computed: {
    selectRowData() {
      return this.$store.getters.getSelectRow;
    },
    form() {
      return this.$store.getters.getForm;
    }
  },
  methods: {
    async updateIsNeedCallToServer() {
      await HTTP.post(this.urlNeedCall, JSON.stringify(this.isNeedCallDto))
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
      this.updateIsNeedCallToServer();
      this.$message({
        type: 'success',
        message: "Статус: Связь состоялась."
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
