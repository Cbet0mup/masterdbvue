<template>
  <el-input
      placeholder="Комплектация"
      v-model.trim="input"
      @focus="clear"
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
  computed: {
    clear() {
      this.input = this.form.complection;
    },
    form() {
      return this.$store.getters.getForm;
    },
    selectRow() {
      return this.$store.getters.getSelectRow;
    },
  },

  methods: {
    changeInput(){
      this.$store.commit('setComplection', this.input)
    }
  },
  mounted() {
    if (Object.keys(this.selectRow).length !== 0) {
      this.input = this.selectRow.complection;
      this.changeInput();
    }
  }
}
</script>

<style scoped>

</style>
