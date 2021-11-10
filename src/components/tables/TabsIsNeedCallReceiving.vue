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
  </div>
</template>

<script>
import {HTTP} from "../../api/instance.js";

export default {
  name: "tabsIsNeedCall",
  data() {
    return {
      tableData: [],
      lengthData: 0,
      errors: [],
      selectRowData: {},
      urlApi: '/workorder/findworkorder/isneedcall/true',
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
    selectRow(row) {                    //выбранная строка, передаём данные в стейт

      this.selectRowData = this.tableData.find(item => item.id === row.id);
      this.$store.commit('setSelectRowData', this.selectRowData);
      this.$store.commit('setId', row.id);
      this.$router.push('/receiving/redact');
    }
  },
  mounted() {
    this.getData()
  },
}
</script>

<style scoped>

</style>
