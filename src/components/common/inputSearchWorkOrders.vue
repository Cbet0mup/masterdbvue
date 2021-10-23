<template>
  <el-input class="input-search-workorder" placeholder="Поиск заказа" v-model="searchInput"></el-input>
</template>

<script>
export default {
  name: "inputSearchWorkOrders"
}
</script>

<style scoped>
.input-search-workorder {
  width: 130px;
  margin-left: auto;
  margin-right: 20px;
  margin-top: 10px;
}
</style>
