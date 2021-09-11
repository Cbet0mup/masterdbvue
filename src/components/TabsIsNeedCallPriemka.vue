<template>
  <el-table
      :data="tableData"
      border style="width: 100%"
      size="small"
      @row-click="myEvent"
  >
    <el-table-column prop="id" label="№" width="70"> </el-table-column>
    <el-table-column prop="createdAt" label="Дата" > </el-table-column>
    <el-table-column prop="customerPhone" label="Телефон"> </el-table-column>
    <el-table-column prop="customerName" label="Владелец"> </el-table-column>
    <el-table-column prop="serviceName" label="Сервис"> </el-table-column>
    <el-table-column prop="productName" label="Изделие"> </el-table-column>
    <el-table-column prop="manufacturerName" label="Фирма"> </el-table-column>
    <el-table-column prop="modelName" label="Модель"> </el-table-column>
    <el-table-column prop="serialNumber" label="Серийный номер"> </el-table-column>
    <el-table-column prop="receiverName" label="Приёмщик"> </el-table-column>
  </el-table>
</template>

<script>
import {HTTP} from "../axios/httpCommon.js";

export default {
  name: "tabsIsNeedCall",
  data() {
    return {
      tableData: [],
      lengthData: 0,
      errors: [],
    }
  },
  methods: {
    async getData(){
      HTTP.get('http://localhost:8080/workorder/findworkorder/isneedcall/true')
          .then(response => {
            this.tableData = response.data;
          })
          .catch(e => {
            this.errors.push(e);
          })
      this.lengthData = this.tableData.length;
    },
    myEvent(row, column, event) {
      console.log(row.id)
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style scoped>

</style>
