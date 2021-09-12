<template>
  <div class="line"></div>
  <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
  >
    <el-menu-item @click="dialogFormVisible = true" index="1"><i class="el-icon-cpu"></i>Processing Center</el-menu-item>

    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="4">Orders</el-menu-item>
  </el-menu>

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
      <el-button @click="dialogFormVisible = false">Cancel</el-button>
      <el-button type="primary" @click="dialogFormVisible = false"
      >Confirm</el-button
      >
    </span>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: "TopMenuPriemka",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',

      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
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
  myEvent() {
    console.log("row.id")
  }
  }
}
</script>

<style scoped>
* {

}
</style>
