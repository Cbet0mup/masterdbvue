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


      await HTTP.get(this.urlApi + this.searchInput)  //переменная
            .then(response => {
              this.data = response.data;
            })
            .catch(e => {
              this.errors.push(e);
            })
      this.searchInput = '';
      this.openInfo();
    },
    openInfo() {
      this.$store.commit('setSelectRowData', this.data);
      this.$store.commit('setClearForm', this.data);
      this.$store.commit('setId', this.data.id);
      this.$router.push('/receiving/redact');
    }
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
