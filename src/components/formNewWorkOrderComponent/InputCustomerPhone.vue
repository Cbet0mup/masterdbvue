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
    }
  },

  methods: {
    changeInput(){
      this.$store.commit('setCustomerPhone', this.input)
    },
    clear(){
      this.input = this.form.customerPhone;
    }
  }
}
</script>

<style scoped>

</style>
