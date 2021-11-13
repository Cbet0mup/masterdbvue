<template>
  <div>
    <el-table
        :data="tableData"
        border style="width: 100%"
        size="small"
        @row-click="selectRow"
    >
      <el-table-column prop="id" label="№" width="70" header-align="center"></el-table-column>
      <el-table-column prop="createdAt" label="Дата" header-align="center"></el-table-column>
      <el-table-column prop="customerPhone" label="Телефон" header-align="center"></el-table-column>
      <el-table-column prop="customerName" label="Владелец" header-align="center"></el-table-column>
      <el-table-column prop="serviceName" label="Сервис" header-align="center"></el-table-column>
      <el-table-column prop="productName" label="Изделие" header-align="center"></el-table-column>
      <el-table-column prop="manufacturerName" label="Фирма" header-align="center"></el-table-column>
      <el-table-column prop="modelName" label="Модель" header-align="center"></el-table-column>
      <el-table-column prop="serialNumber" label="Серийный номер" header-align="center"></el-table-column>
      <el-table-column prop="receiverName" label="Приёмщик" header-align="center"></el-table-column>
    </el-table>
    <br>
    <div style="text-align: center; margin-bottom: 10px;"><strong>Готов - клиент извещён:</strong></div>
    <el-table
        :data="tableDataIsCalled"
        border style="width: 100%"
        size="small"
        @row-click="selectRow"
    >
      <el-table-column prop="id" label="№" width="70" header-align="center"></el-table-column>
      <el-table-column prop="createdAt" label="Дата" header-align="center"></el-table-column>
      <el-table-column prop="customerPhone" label="Телефон" header-align="center"></el-table-column>
      <el-table-column prop="customerName" label="Владелец" header-align="center"></el-table-column>
      <el-table-column prop="serviceName" label="Сервис" header-align="center"></el-table-column>
      <el-table-column prop="productName" label="Изделие" header-align="center"></el-table-column>
      <el-table-column prop="manufacturerName" label="Фирма" header-align="center"></el-table-column>
      <el-table-column prop="modelName" label="Модель" header-align="center"></el-table-column>
      <el-table-column prop="serialNumber" label="Серийный номер" header-align="center"></el-table-column>
      <el-table-column prop="receiverName" label="Приёмщик" header-align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
//import api from "api";
import {HTTP} from "../../api/instance.js";

export default {
  name: "tabsEndRepair",
  data() {
    return {
      tableData: [],
      tableDataIsCalled: [],
      errors: [],
      selectRowData: {},
      urlApi: '/workorder/findworkorder/isdone/true'
    }
  },
  methods: {
    async getData() {
      await HTTP.get(this.urlApi)
          .then(response => {
            response.data.forEach(data => {
              if (data.isDone === true) {
                this.tableData.push(data)
              } else {
                this.tableDataIsCalled.push(data)
              }
            })
            //this.tableData = response.data;
          })
          .catch(e => {
            this.errors.push(e);
          })
    },

    selectRow(row) {                    //выбранная строка, передаём данные в стейт

      this.selectRowData = this.tableData.find(item => item.id === row.id);
      if (Object.keys(this.selectRowData).length) this.selectRowData = this.tableDataIsCalled.find(item => item.id === row.id);

      this.$store.commit('setSelectRowData', this.selectRowData);
      this.$store.commit('setId', row.id);
      this.$router.push('/receiving/redact');
    }

  },
  mounted() {
    this.getData()
  }
}
</script>

<style scoped>

</style>
