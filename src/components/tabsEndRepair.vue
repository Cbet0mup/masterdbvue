<template>
  <el-table
      @tab-click="getData"
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
  >
    <el-table-column prop="number" label="№" width="180"> </el-table-column>
    <el-table-column prop="createdAt" label="Дата" width="180"> </el-table-column>
    <el-table-column prop="customerPhone" label="Телефон"> </el-table-column>
    <el-table-column prop="customerName" label="Владелец"> </el-table-column>
    <el-table-column prop="serviceName" label="Сервис"> </el-table-column>
    <el-table-column prop="productName" label="Изделие"> </el-table-column>
    <el-table-column prop="manufacturerName" label="Фирма"> </el-table-column>
    <el-table-column prop="service" label="Модель"> </el-table-column>
    <el-table-column prop="serialNumber" label="Серийный номер"> </el-table-column>
  </el-table>
</template>

<script>
import axios from "axios";

export default {
  name: "tabsEndRepair",
  data() {
    return {
      tableData: [],
      lengthData: 0,
      errors: [],
    }
  },
  methods: {
    getData(){
      axios.get('http://localhost:8080/workorder/findworkorder/all')
      .then(response => {
        this.tableData = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      })
      this.lengthData = this.tableData.length;
    }
  }
}
</script>

<style scoped>

</style>
