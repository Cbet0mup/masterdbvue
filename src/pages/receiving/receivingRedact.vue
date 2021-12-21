<template>
  <el-container>
    <el-header class="myHeader">
      <a style="text-align: center; margin-top: 10px; margin-bottom: 10px">заказ/наряд - приёмка</a>
    </el-header>

      <receiving-redact-menu/>
    <el-container class="container">
      <el-main class="form">
      <el-col :span="13">

      <receiving-redact-form/>

      </el-col>
        <el-col :span="8">
          <chat-work-orders-note/>
        </el-col>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import ReceivingRedactMenu from "../../components/menu/receivingRedactMenu.vue";
import ReceivingRedactForm from "../../components/forms/receivingRedactForm.vue";
import ChatWorkOrdersNote from "../../components/tables/chatWorkOrdersNote.vue";

export default {
  name: "receivingRedact",
  components: {ChatWorkOrdersNote, ReceivingRedactForm, ReceivingRedactMenu},
  computed: {
    selectRowData() {
      return this.$store.getters.getSelectRow;
    }
  }
}
</script>

<style scoped>
.myHeader {
  max-height: content-box;
  text-align: center;
  display: contents;
}

.container {
  margin: 10px;
}
.form {
  display: inline;
}
</style>
