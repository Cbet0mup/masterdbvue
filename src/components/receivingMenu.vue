<template>
  <div class="line">
    <el-row>
      <el-button class="button-menu" @click="dialogFormVisible = true" type="primary" plain icon="el-icon-cpu">Новый заказ</el-button>
    </el-row>
  </div>

  <new-work-order-form
      :isVisible="dialogFormVisible"
      @cancel-form="closeForm"
  />
</template>

<script>
import NewWorkOrderForm from "./newWorkOrderForm.vue";
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
    },
  }
}
</script>

<style scoped>
.button-menu{
  margin-left: 5rem;
}
.line{
  background-color: rgba(208, 224, 193, 0.99);
}
</style>
