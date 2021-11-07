<template>
  <el-input
      placeholder="Телефон"
      v-model="input"
      @focus="clear"
      @change="changeInput"
  ></el-input>
</template>

<script>
export default {
  name: "InputCustomerPhone",
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
      this.$store.commit('setCustomerPhone', this.input)
    },
    clear(){
      this.input = this.form.customerPhone;
    }
  },
  mounted() {
    if (Object.keys(this.selectRow).length !== 0) {
      this.input = this.selectRow.customerPhone;
      this.changeInput();
    }
  }
}
</script>

<style scoped>

</style>
