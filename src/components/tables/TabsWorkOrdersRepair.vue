<template>
  <el-table
      :data="tableDataWorkOrders"
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
    },
    tableDataWorkOrders() {
      return this.$store.getters.getTableDataWorkOrders;
    }
  },

  data() {
    return {
      engineerId: '3',
      urlApi: '/workorder/findworkorder/allNeedRepair/',
      urlApiNone: '/workorder/apiform/notes/',
      oldRowId: '',
    }
  },
  methods: {
    async getData() {
      await HTTP.get(this.urlApi + this.engineerId)
          .then(response => {
            this.$store.commit('setTableDataWorkOrders', response.data)
          })
          .catch(e => {
            console.log("ERRRR" + e);
          })
      // первый по умолчанию
      this.$store.commit('setSelectWorkOrderTabsRepair', this.tableDataWorkOrders[0]);
      this.$store.commit('setId', this.selectWorkOrder.id);      //сразу забиваем id
      this.getMessages();
    },

    getThisWorkOrder(row) {
      this.$store.commit('clearMessageData', '');
      let num = 0;
      this.tableDataWorkOrders.forEach(workOrder => {
        if (workOrder.id === row.id) {
          this.$store.commit('setSelectWorkOrderTabsRepair', workOrder);
          this.$store.commit('setNumTableDataWorkOrders', num)
        }
        num +=1;
      })
      num = 0;
      this.$store.commit('setId', row.id)
      this.$store.commit('setTroubleDetected', this.selectWorkOrder.troubleDetected)
      this.$store.commit('setTroubleSolving', this.selectWorkOrder.troubleSolving)
      this.getMessages();
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
