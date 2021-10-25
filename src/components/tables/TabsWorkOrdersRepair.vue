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
      engineerId: '3',
      tableData: [],
      urlApi: '/workorder/findworkorder/allNeedRepair/',
      urlApiNone: '/workorder/apiform/notes/',
      oldRowId: '',
    }
  },
  methods: {
    async getData() {
      await HTTP.get(this.urlApi + this.engineerId)
          .then(response => {
            this.tableData = response.data;
          })
          .catch(e => {
            console.log("ERRRR" + e);
          })
      // первый по умолчанию
      this.$store.commit('setSelectWorkOrderTabsRepair', this.tableData[0]);
      this.getMessages();
    },

    getThisWorkOrder(row) {
      this.$store.commit('clearMessageData', '');
      this.tableData.forEach(workOrder => {
        if (workOrder.id === row.id) {
          this.$store.commit('setSelectWorkOrderTabsRepair', workOrder);
        }
      })
      this.$store.commit('setId', row.id)
      this.getMessages();
      //console.log(this.selectWorkOrder.chatLog)
    },
    getMessages(){
      let messArr = this.selectWorkOrder.chatLog.split('*');
      messArr.forEach(el => this.$store.commit('pushMessageData', el))

    }
  }
}
</script>

<style scoped>

</style>
