<template>
  <el-input
      placeholder="Примечания"
      v-model="input"
      @change="changeInput"
  ></el-input>
</template>

<script>
export default {
  name: "inputChat",

  data() {
    return {
      input: '',
    }
  },

  methods: {
    changeInput() {
      let date = new Date().toLocaleString();
      let user = "Current User ";
      let msg = this.input;

      this.$store.commit('setChatLog', '*' + user + date + '*' + msg + ' *' )
    }
  }
}
</script>

<style scoped>

</style>
