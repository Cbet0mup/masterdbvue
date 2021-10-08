<template>
  <el-input
      placeholder="Серийный номер"
      v-model.trim="input"
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

  methods: {
    changeInput(){
      this.$store.commit('setSerialNumber', this.input)
    }
  }
}
</script>

<style scoped>

</style>