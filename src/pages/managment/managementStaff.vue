<template>
  <el-container>
    <el-header class="myHeader">
      <a style="text-align: center; margin-top: 10px; margin-bottom: 10px">Управление - кадры</a>
    </el-header>
    <management-staff-menu/>
    <el-main class="myMain">
тьрим
    </el-main>
  </el-container>
</template>

<script>
import managementStaffMenu from "../../components/menu/managementStaffMenu.vue";
export default {
  name: "managementStaff",
  components: {managementStaffMenu}
}
</script>

<style scoped>
.myHeader {
  max-height: content-box;
  text-align: center;
  display: contents;
}
.myMain {
  display: inline;
}

</style>
