<template>
  <el-select
      v-model="value"
      value-key="productIds"
      filterable
      remote
      reserve-keyword
      placeholder="Тип изделия"
      :remote-method="remoteMethod"
      :loading="loading"
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
  name: "SearchProductName",
  emits: ['getProduct'],

  data() {
    return {
      productIds: '',         //выбранный id
      options: [],
      value: [],
      list: [],
      loading: false,
      states: [],
    }
  },
  mounted() {
    this.getData()

  },
  methods: {
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.options = this.list.filter((item) => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.options = []
      }
    },
    async getData() {
      await HTTP.get('/workorder/apiform/productname')
          .then(response => {
            this.states = response.data;

            this.list = this.states.map((item) => {
              return {value: `${item.id}`, label: `${item.productName}`}
            })

          })
          .catch(e => {
            this.errors.push(e);
          })
      this.lengthData = this.states.length;
    },
    getSelect() {
      //console.log(this.value)
      this.$emit('getProduct', this.value)
    }

  },
}
</script>

<style scoped>

</style>
