<template>
  <el-input
      placeholder="Внешний вид"
      v-model="input"
      @focus="clear"
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
  computed: {
    form() {
      return this.$store.getters.getForm;
    },
    selectRow() {
      return this.$store.getters.getSelectRow;
    },
  },

  methods: {
    clear() {
      this.input = this.form.look;
    },
    changeInput(){
      this.$store.commit('setView', this.input)
    }
  },
  mounted() {
    if (Object.keys(this.selectRow).length !== 0) {
      this.input = this.selectRow.look;
      this.changeInput();
    }
  }
}
</script>

<style scoped>

</style>
