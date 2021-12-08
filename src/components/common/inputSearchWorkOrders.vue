<template>
  <el-input
      class="input-search-workorder"
      placeholder="Поиск заказа"
      v-model="searchInput"
      @keypress.enter="getData"
  ></el-input>

</template>

<script>
import {HTTP} from "../../api/instance.js";

export default {
  name: "inputSearchWorkOrders",
  data() {
    return {
      data: {},
      searchInput: '',
      urlApi: '/workorder/findworkorder/'
    }
  },

  methods: {
    async getData() {
      let reg = /^[0-9]*$/;                                     //проверка на число
      if (reg.test(this.searchInput.trim()) && this.searchInput !== '') {
        await HTTP.get(this.urlApi + this.searchInput)  //переменная
            .then(response => {
              this.data = response.data;
            })
            .catch(e => {
              this.$message({
                type: 'info',
                message: 'Странно, но ничего не найдено...',
              })
            })
      } else {
        this.$message({
          type: 'danger',
          message: 'Проверьте введённое число',
        })
      }
      this.searchInput = '';
      this.openInfo();
    },

    openInfo() {        //формируесм таблицу данных и открываем старницу с инфой
      this.$store.commit('setSelectRowData', this.data);
      this.$store.commit('setClearForm', this.data);
      this.$store.commit('pushMessageData', this.data.chatLog);
      this.getMessages();
      this.$store.commit('setId', this.data.id);
      this.$router.push('/receiving/redact');
    },

    getMessages() {
      this.$store.commit('clearMessageData', '');
      let messArr = this.data.chatLog.split('*');
      messArr.forEach(el => this.$store.commit('pushMessageData', el));
    },
  }
}
</script>

<style scoped>
.input-search-workorder {
  width: 130px;
  margin-left: auto;
  margin-right: 20px;
  margin-top: 10px;
}
</style>
