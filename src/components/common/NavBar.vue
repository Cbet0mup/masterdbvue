<template>
<div>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
  >
    <el-menu-item @click="$router.push('/')" index="1">Главная</el-menu-item>
    <el-menu-item @click="$router.push('/receiving')"  index="2">Приёмка</el-menu-item>
    <el-menu-item @click="$router.push('/workorders')" index="3">Заказы</el-menu-item>
    <el-menu-item @click="$router.push('/management')" index="4">Управление</el-menu-item>
    <el-menu-item @click="$router.push('/warehouse')" index="5">Склад</el-menu-item>
    <el-menu-item @click="$router.push('/delivery')" index="6">Почта</el-menu-item>
    <input-search-work-orders/>
  </el-menu>
</div>
</template>

<script>
import inputSearchWorkOrders from "./inputSearchWorkOrders.vue";

export default {
  name: "NavBar",
  components: {inputSearchWorkOrders},
  data() {
    return {
      activeIndex: '1',
    }
  },
}
</script>

<style scoped>

</style>
