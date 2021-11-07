<template>
  <el-input
      placeholder="Серийный номер"
      v-model="input"
      @focus="clear"
      @change="changeInput"
  ></el-input>
</template>

<script>
export default {
  name: "InputSerialNumber",

  data() {
    return {
      input: '',
    }
  },
  computed: {
    form() {
      return this.$store.getters.getForm;
    },
    selectRow() {
      return this.$store.getters.getSelectRow;
    },
  },

  methods: {
    changeInput(){
      this.$store.commit('setSerialNumber', this.input)
    },
    clear(){
      this.input = this.form.serialNumber;
    }
  },
  mounted() {
    if (Object.keys(this.selectRow).length !== 0) {
      this.input = this.selectRow.serialNumber;
      this.changeInput();
    }
  }
}
</script>

<style scoped>

</style>
