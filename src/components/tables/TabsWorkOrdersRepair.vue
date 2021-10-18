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
    this.getData()
  },
  computed: {
    selectWorkOrder() {
      return this.$store.getters.getSelectWorkOrderTabsRepair;
    }
  },

  data() {
    return {
      tableData: [],
      errors: [],
      urlApi: '/workorder/findworkorder/allNeedRepair/3',
      searchData: '',


    }
  },
  methods: {
    async getData() {
      await HTTP.get(this.urlApi)
          .then(response => {
            this.tableData = response.data;
          })
          .catch(e => {
            this.errors.push(e);
          })
      // первый по умолчанию
      this.$store.commit('setSelectWorkOrderTabsRepair', this.tableData[0]);
    },

    getThisWorkOrder(row) {
    console.log("click " + row.id)

      this.tableData.forEach(workOrder => {
        if (workOrder.id === row.id) {
          this.$store.commit('setSelectWorkOrderTabsRepair', workOrder);
        }
      })

    console.log(this.selectWorkOrder.customerPhone)
    }
  }
}
</script>

<style scoped>

</style>
