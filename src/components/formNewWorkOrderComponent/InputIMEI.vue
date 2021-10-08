<template>
  <el-input
      placeholder="IMEI"
      v-model.trim="input"
      @change="changeInput"
  ></el-input>
</template>

<script>
export default {
  name: "InputIMEI",

  data() {
    return {
      input: '',
    }
  },

  methods: {
    changeInput() {
      this.$store.commit('setImei', this.input)
    }
  }
}
</script>

<style scoped>

</style>