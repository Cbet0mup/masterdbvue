<template>
  <el-select v-model="value"
             placeholder="Инженер"
             @change="getSelect"
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
import {HTTP} from "../../api/instance";

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

mounted() {
  this.getData();
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
