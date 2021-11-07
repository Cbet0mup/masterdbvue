<template>
  <el-input
      placeholder="ФИО/название"
      v-model="input"
      @focus="clear"
      @input="changeInput"
  ></el-input>

</template>

<script>
export default {
  name: "InputCustomerName",

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
    clear() {
      this.input = this.form.customerName;
    },
    changeInput() {
      this.$store.commit('setCustomerName', this.input)
    }
  },
  mounted() {
    if (Object.keys(this.selectRow).length !== 0) {
      this.input = this.selectRow.customerName;
      this.changeInput();
    }
  }
}
</script>

<style scoped>

</style>
