<template>
  <el-input
      placeholder="ФИО/название"
      v-model.trim="input"
      @change="changeInput"
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

  methods: {
    changeInput(){
      this.$store.commit('setCustomerName', this.input)
    }
  }
}
</script>

<style scoped>

</style>
