<template>
  <el-container>
    <el-header class="myHeader">
      <a style="text-align: center; margin-top: 10px; margin-bottom: 10px">Управление - кадры</a>
    </el-header>
    <management-staff-menu/>
    <el-main class="myMain">
       <tabs-managment-staff-all/>
    </el-main>
  </el-container>
</template>

<script>
import managementStaffMenu from "../../components/menu/managementStaffMenu.vue";
import TabsManagmentStaffAll from "../../components/tables/TabsManagmentStaffAll.vue";
export default {
  name: "managementStaff",
  components: {TabsManagmentStaffAll, managementStaffMenu}
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
