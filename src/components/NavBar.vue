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
    <el-menu-item index="4">Управление</el-menu-item>
  </el-menu>
</div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      activeIndex: '1',
    }
  },
}
</script>

<style scoped>

</style>
