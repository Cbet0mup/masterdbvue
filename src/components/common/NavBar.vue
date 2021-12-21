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
      <el-menu-item @click="$router.push('/receiving')" index="2">Приёмка</el-menu-item>
      <el-menu-item @click="$router.push('/workorders')" index="3">Заказы</el-menu-item>
      <el-sub-menu index="4">
<!--        -->
        <template #title>Управление</template>
        <el-menu-item @click="$router.push('/management/staff')" index="2-1">Кадры</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>Заказы</template>
          <el-menu-item index="2-4-1">В работе</el-menu-item>
          <el-menu-item index="2-4-2">Выданные</el-menu-item>
<!--          <el-menu-item index="2-4-3">item three</el-menu-item>-->
        </el-sub-menu>
        </el-sub-menu>
        <el-menu-item @click="$router.push('/warehouse')" index="5">Склад</el-menu-item>
        <el-menu-item @click="$router.push('/delivery')" index="6">Почта</el-menu-item>
        <el-menu-item @click="$router.push('/guide')" index="7">Инструкция</el-menu-item>
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
