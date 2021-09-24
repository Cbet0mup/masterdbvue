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
<!--  <el-button @:click.prevent="openMb" class="button-add"  icon="el-icon-circle-plus" size="mini" circle ></el-button>-->
  <button @click.prevent="openMb">Поприветствовать</button>

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
    //обработка введённых данных относительно полученного массива
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
    //полученный массив из БД
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
    //выбранный элемент улетает в родительский компонент формы
    getSelect() {
      //console.log(this.value)
      this.$emit('getProduct', this.value)
    },
    openMb(){
      console.log("open!!")
      // this.$prompt('Please input your e-mail', 'Tip', {
      //   confirmButtonText: 'OK',
      //   cancelButtonText: 'Cancel',
      // })
      //     .then(({ value }) => {
      //       this.$message({
      //         type: 'success',
      //         message: 'Your email is:' + value,
      //       })
      //     })
      //     .catch(() => {
      //       this.$message({
      //         type: 'info',
      //         message: 'Input canceled',
      //       })
      //     })
    }

  }
}
</script>

<style scoped>
.button-add {
  margin-top: 20px;
  margin-left: 5px;
}
</style>
<!--<el-tooltip-->
<!--    class="item"-->
<!--    effect="dark"-->
<!--    content="Добавить новый тип изделия"-->
<!--    placement="top"-->
<!--&gt;-->
<!--<el-button @:click.prevent="openMb" class="button-add"  icon="el-icon-circle-plus" size="mini" circle ></el-button>-->
<!--</el-tooltip>-->
