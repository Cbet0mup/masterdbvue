<template>
  <el-input
      placeholder="IMEI"
      v-model="input"
      @focus="clear"
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
      this.input = this.form.imei;
    },
    changeInput() {
      this.$store.commit('setImei', this.input)
    }
  },
  mounted() {
    if (Object.keys(this.selectRow).length !== 0) {
      this.input = this.selectRow.imei;
      this.changeInput();
    }
  }
}
</script>

<style scoped>

</style>
