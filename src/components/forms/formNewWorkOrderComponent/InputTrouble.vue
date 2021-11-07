<template>
  <el-input
      placeholder="Заявленная неисправность"
      v-model="input"
      @focus="clear"
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
  computed: {
    clear() {
      this.input = this.form.trouble;
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
      this.$store.commit('setTrouble', this.input)
    }
  },
  mounted() {
    if (Object.keys(this.selectRow).length !== 0) {
      this.input = this.selectRow.trouble;
      this.changeInput();
    }
  }
}
</script>

<style scoped>

</style>
