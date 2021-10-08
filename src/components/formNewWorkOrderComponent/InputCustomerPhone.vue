<template>
  <el-input
      placeholder="Телефон"
      v-model.trim="input"
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

  methods: {
    changeInput(){
      this.$store.commit('setCustomerPhone', this.input)
    }
  }
}
</script>

<style scoped>

</style>
