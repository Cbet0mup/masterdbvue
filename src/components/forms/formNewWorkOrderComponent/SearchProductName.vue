<template>
  <el-select
      v-model="value"
      filterable
      remote
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
    <el-button @click.prevent="openMessageBox" class="button-add"  icon="el-icon-circle-plus" size="mini" circle ></el-button>
  </el-tooltip>
</template>

<script>
import {HTTP} from "../../../api/instance";

export default {
  name: "SearchProductName",

  computed: {
    form() {
      return this.$store.getters.getForm;
    },
    selectRow() {
      return this.$store.getters.getSelectRow;
    },
  },

  mounted() {
    this.getData();
    if (Object.keys(this.selectRow).length !== 0) {
      this.value = this.selectRow.productName;
      this.$store.commit('setProductId', this.selectRow.productId);
    }
  },

  data() {
    return {
      options: [],
      value: [],
      list: [],
      loading: false,
      items: [],
      newItem: {
        productName: String               //переменная
      },
      textOpenMbPromptInfo: 'Телевизор, утюг, и.т.д',
      textOpenMbPromptHeader: 'Добавить тип',
      textOpenMbPromptMessageSuccess: 'Вы внесли новый тип устройства: ',
      textOpenMbPromptMessageErr: 'Пустое поле, попробуйте ещё раз.',
      urlApi: '/workorder/apiform/productname'
    }
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
      await HTTP.get(this.urlApi)  //переменная
          .then(response => {
            this.items = response.data;
            this.list = this.items.map((item) => {
              return { value: `${item.id}`, label: `${item.productName}` }        ///переменная
            })
          })
          .catch(e => {
            this.errors.push(e);
          })
    },

                            //   сохраняем
    async save() {
      const json = JSON.stringify(this.newItem);

      await HTTP.post(this.urlApi, json)   //переменная
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
      this.$store.commit('setProductId', this.value)                          //переменная
      console.log('searchprodname: getselect  ' + this.form.productId)
    },
             //  открываем message box
    openMessageBox() {
      this.$prompt(this.textOpenMbPromptInfo, this.textOpenMbPromptHeader, {
        confirmButtonText: 'Сохранить',
        cancelButtonText: 'Отмена',
      })
          .then(({value}) => {
            if (value !== null){
              this.newItem.productName = value;                 ///переменная
              // console.log('searchprodname: openMB: ' + value)
              this.save();
              this.$message({
                type: 'success',
                message: this.textOpenMbPromptMessageSuccess
              })
              this.productName = '';                            ///переменная
            } else {
              this.$message({
                type: 'success',
                message: this.textOpenMbPromptMessageErr + value,
              })
            }

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

