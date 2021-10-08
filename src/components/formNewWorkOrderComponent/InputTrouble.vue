<template>
  <el-input
      placeholder="Заявленная неисправность"
      v-model.trim="input"
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
      this.$store.commit('setCustomerName', this.input)
    }
  }
}
</script>

<style scoped>

</style>