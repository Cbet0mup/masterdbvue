<template>
  <div class="line">
    <el-row>
      <el-tooltip
          class="item"
          effect="dark"
          content="Создать новый заказ"
          placement="top"
      >
        <el-button class="button-menu" @click="dialogFormVisible = true" type="primary" plain icon="el-icon-cpu">Новый заказ</el-button>
      </el-tooltip>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "managementStaffMenu"
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
