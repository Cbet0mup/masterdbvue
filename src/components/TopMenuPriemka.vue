<template>
  <div class="line"></div>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
  >
    <el-menu-item @click="dialogFormVisible = true" index="1"><i class="el-icon-cpu"></i>Новый заказ</el-menu-item>

    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="4">Orders</el-menu-item>
  </el-menu>

  <new-work-order-form
      :isVisible="dialogFormVisible"
      @cancel-form="closeForm"
  />
</template>
// @cancel-form="closeForm"
<script>
import NewWorkOrderForm from "./NewWorkOrderForm.vue";
export default {
  name: "TopMenuPriemka",
  components: {NewWorkOrderForm},
  data() {
    return {
      activeIndex: '1',
      dialogFormVisible: false,
    }
  },
  methods: {
    closeForm(isVisible) {
      this.dialogFormVisible = isVisible;
    }
  }
}
</script>

<style scoped>
* {

}
</style>
