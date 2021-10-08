<template>
  <el-input
      placeholder="Комплектация"
      v-model.trim="input"
      @change="changeInput"
  ></el-input>
</template>

<script>
export default {
  name: "InputComplection",

  data() {
    return {
      input: '',
    }
  },

  methods: {
    changeInput(){
      this.$store.commit('setComplection', this.input)
    }
  }
}
</script>

<style scoped>

</style>