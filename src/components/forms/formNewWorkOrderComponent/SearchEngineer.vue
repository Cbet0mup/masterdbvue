<template>
  <el-select v-model="value"
             placeholder="Инженер"
             @change="getSelect"
             @focus="clear"
  >
    <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"

    >
    </el-option>
  </el-select>
</template>

<script>
import {HTTP} from "../../../api/instance";

export default {
  name: "SearchEngineer",
  data() {
    return {
      options: [],
      value: '',
      items: [],
      newItem: {
        engineerName: String               //переменная
      },
      urlApi: '/workorder/apiform/engineer'
    }
  },
  computed: {
    selectRow() {
      return this.$store.getters.getSelectRow;
    },
  form() {
    return this.$store.getters.getForm;
  },
    clear() {
      this.value = this.form.engineerName;
    },
  },

mounted() {
  this.getData();
  if (Object.keys(this.selectRow).length !== 0) {
    this.value = this.selectRow.engineerName;
    this.$store.commit('setEngineerId', this.selectRow.engineerId);
  }
},
  methods: {

    //полученный массив из БД

    async getData() {
      await HTTP.get(this.urlApi)  //переменная
          .then(response => {
            this.items = response.data;
            this.options = this.items.map((item) => {
              return {value: `${item.id}`, label: `${item.engineerName}`}        ///переменная
            })
          })
          .catch(e => {
            this.errors.push(e);
          })
    },
    //выбранный элемент улетает в родительский компонент формы

    getSelect() {
      this.$store.commit('setEngineerId', this.value)       //переменная
    },
  },

}
</script>

<style scoped>

</style>
