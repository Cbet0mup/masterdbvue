<template>
  <el-table
      :data="tableData"
      size="mini"
      @row-click="getThisWorkOrder"
  >
    <el-table-column prop="id" label="№" width="60" header-align="center"></el-table-column>
    <el-table-column prop="createdAt" label="Дата" header-align="center"></el-table-column>
    <el-table-column prop="productName" label="Изделие" header-align="center"></el-table-column>
  </el-table>
</template>

<script>
import {HTTP} from "../../api/instance";

export default {
  name: "TabsWorkOrdersRepair",
  mounted() {
    this.getData();
  },
  computed: {
    selectWorkOrder() {
      return this.$store.getters.getSelectWorkOrderTabsRepair;
    }
  },

  data() {
    return {
      tableData: [],
      urlApi: '/workorder/findworkorder/allNeedRepair/3',
      urlApiNone: '/workorder/apiform/notes/',
      oldRowId: '',
    }
  },
  methods: {
    async getData() {
      await HTTP.get(this.urlApi)
          .then(response => {
            this.tableData = response.data;
          })
          .catch(e => {
            console.log("ERRRR" + e);
          })
      // первый по умолчанию
      this.$store.commit('setSelectWorkOrderTabsRepair', this.tableData[0]);
      await this.getMessages();
    },
    async getMessages() {
      let idWorkOrder = this.selectWorkOrder.id;
      await HTTP.get(this.urlApiNone + idWorkOrder)
          .then(response => {
            this.$store.commit('setMessages', response.data.messages);
            this.$store.commit('setMessageServerData', response.data);
            console.log("ERRRR" );


          })
          .catch(e => {
            console.log("ERRRR" + e);
          })
    },

    getThisWorkOrder(row) {
      this.tableData.forEach(workOrder => {
        if (workOrder.id === row.id) {
          this.$store.commit('setSelectWorkOrderTabsRepair', workOrder);
        }
      })
      if (this.oldRowId !== this.selectWorkOrder.id){
        this.getMessages();
        this.oldRowId = row.id;
      }

    }
  }
}
</script>

<style scoped>

</style>
