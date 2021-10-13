<template>
  <el-input
      placeholder="Заявленная неисправность"
      v-model="input"
      @change="changeInput"
  ></el-input>
</template>

<script>
export default {
  name: "InputTrouble",

  data() {
    return {
      input: '',
    }
  },

  methods: {
    changeInput(){
      this.$store.commit('setTrouble', this.input)
    }
  }
}
</script>

<style scoped>

</style>
