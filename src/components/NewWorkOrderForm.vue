<template>
  <el-dialog title="Новый заказ" v-model="isVisible">
    <el-form :label-position="labelPosition"
             label-width="100px"
             :model="formLabelAlign"
    >
      <strong>FUCK</strong>
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
  props:['isVisible'],
  emits: ['cancelForm'],
  data() {
    return {
      myVisible: this.isVisible,
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
      this.myVisible = false;
      this.$emit('cancelForm', this.myVisible)
    },
    save(){
      this.cancel();

    }
  }
}
</script>

<style scoped>

:last-child {
   margin-bottom: 0;
 }

.bg-purple {
  background: #d3dce6;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

</style>
