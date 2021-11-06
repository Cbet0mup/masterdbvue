<template>
  <div class="line">
    <el-row>
      <el-button class="button-menu" @click="dialogFormVisible = true" type="primary" plain icon="el-icon-cpu">Новый заказ</el-button>
      <el-tooltip
          class="item"
          effect="dark"
          content="Связь с клиентом состоялась"
          placement="top"
      >
        <el-button @click="dialogFormVisible = true" class="button-menu" type="warning" icon="el-icon-close-notification" circle></el-button>
      </el-tooltip>
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
  name: "receivingMenu",
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
  margin-left: 20px;
}
.line{
  background-color: rgba(208, 224, 193, 0.99);
  display: block;
  border: 1px solid #8bef0e;
  padding: 1px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
