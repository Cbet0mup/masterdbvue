<template>
  <el-dialog title="Shipping address" v-model="dialogFormVisible">
    <el-form :label-position="labelPosition"
             label-width="100px"
             :model="formLabelAlign"
    >
      <el-form-item label="Name">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-input v-model="formLabelAlign.region"></el-input>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input v-model="formLabelAlign.type"></el-input>
      </el-form-item>
    </el-form>

    <template #footer>
    <span class="dialog-footer">
      <el-button @click="cancel">Закрыть</el-button>
      <el-button type="primary" @click="save"
      >Сохранить</el-button
      >
    </span>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: "NewWorkOrderForm",
  // props: {
  //   dialogFormVisible: Boolean,
  // },
  data() {
    return {
      dialogFormVisible: true,
      activeIndex: '1',
      form: {
        name: '',
        region: '',
        type: [],
      },
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: '',
      },
    }
  },
  methods: {
    cancel(){
      this.dialogFormVisible = false
      this.$emit('cancelForm', this.dialogFormVisible)
    },
    save(){
      this.cancel();

    }
  }
}
</script>

<style scoped>

</style>
