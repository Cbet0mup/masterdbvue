<template>
  <el-table
      :data="tableData"
      border style="width: 100%"
      size="mini"
      @row-click="myEvent"
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

  data() {
    return {
      tableData: [],
      lengthData: 0,
      errors: [],
      urlApi: '/workorder/findworkorder/allNow',
      searchData: ''

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
      this.lengthData = this.tableData.length;
    },
    myEvent(row) {
    console.log("click " + row.id)
    }
  }
}
</script>

<style scoped>

</style>
