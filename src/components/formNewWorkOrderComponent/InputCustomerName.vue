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
    }
  },

  methods: {
    clear(){
      this.input = this.form.customerName;
    },
    changeInput(){
      this.$store.commit('setCustomerName', this.input)
    }
  }
}
</script>

<style scoped>

</style>
