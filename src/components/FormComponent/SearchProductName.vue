<template>
  <el-select
      v-model="value"
      value-key="productIds"
      filterable
      multiple
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
  <el-tooltip
      class="item"
      effect="dark"
      content="Добавить новый тип изделия"
      placement="top"
  >
    <el-button @click.prevent="openMb" class="button-add"  icon="el-icon-circle-plus" size="mini" circle ></el-button>
  </el-tooltip>
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
      newProductName: {
        productName: String
      },
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

                            //   сохраняем
    async save() {
      const json = JSON.stringify(this.newProductName);

      console.log(json)

      await HTTP.post('/workorder/apiform/productname', json)
          .then(function (response) {
            console.log("OK   " + response);
          })
          .catch(function (error) {
            console.log("ERRRR" + error);
          })
      await this.getData()
    },

                //выбранный элемент улетает в родительский компонент формы
    getSelect() {
      this.$emit('getProduct', this.value)
    },
             //  открываем message box
    openMb() {
      this.$prompt('Телевизор, утюг, и.т.д', 'Добавить тип', {
        confirmButtonText: 'Сохранить',
        cancelButtonText: 'Отмена',
      })
          .then(({value}) => {
            this.newProductName.productName = value;

            console.log(value)

            this.save();
            this.$message({
              type: 'success',
              message: 'Вы внесли новый тип устройства: ' + value,
            })
            this.productName = '';
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: 'Ввод отменён.',
            })
          })
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

