<template>
  <el-input
      placeholder="Внешний вид"
      v-model="input"
      @change="changeInput"
  ></el-input>
</template>

<script>
export default {
  name: "InputView",

  data() {
    return {
      input: '',
    }
  },

  methods: {
    changeInput(){
      this.$store.commit('setView', this.input)
    }
  }
}
</script>

<style scoped>

</style>
