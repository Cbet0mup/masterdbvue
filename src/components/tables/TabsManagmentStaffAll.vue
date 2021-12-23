<template>
  <el-table
      :data="tableData"
      border style="width: 100%"
      size="small"
      @row-click="selectRow"
  >
    <el-table-column prop="id" label="№" width="70" header-align="center"></el-table-column>

  </el-table>
</template>

<script>
import {HTTP} from "../../api/instance";

export default {
  name: "TabsManagmentStaffAll",

  mounted() {
    this.getData()
  },

  data() {
    return {
      tableData: [],
      errors: [],
      urlApi: '/',
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
    },
    selectRow(row) {                    //выбранная строка,

    },
  }
}
</script>

<style scoped>

</style>
