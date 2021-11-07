<template>
  <div class="line">
    <el-row>
        <el-button class="button-menu" @click="updateThisWorkOrder" type="success" plain icon="el-icon-document-add">
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
    }
  },
  computed: {
    selectRowData() {
      return this.$store.getters.getSelectRow;
    }
  },
  methods: {
    async updateIsNeedCallToServer() {
      await HTTP.post(this.urlNeedCall, JSON.stringify(this.isNeedCallDto))
          .then(function (response) {
            console.log("chat - OK " + response);
          })
          .catch(function (error) {
            console.log("chat save ERRRR" + error);
          });
    },
    saveStatus(){
      this.isNeedCallDto.id = this.selectRowData.id;
      this.isNeedCallDto.isNeedCall = false;
      this.updateIsNeedCallToServer();
    }

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
