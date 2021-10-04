<template>
  <el-select
      v-model="value"
      @focus="getData"
      filterable
      remote
      placeholder="Модель"
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
      content="Добавить новую модель"
      placement="top"
  >
    <el-button @click.prevent="openMessageBox" class="button-add" icon="el-icon-circle-plus" size="mini"
               circle></el-button>
  </el-tooltip>
</template>

<script>
import {HTTP} from "../../api/instance.js";
import {store} from "../../store";


export default {
  name: "SearchModel",
  emits: ['getModel'],                  //переменная
  props: ['manufacturerId'],

  data() {
    return {
      options: [],
      value: [],
      list: [],
      loading: false,
      items: [],
      newItem: {
        modelName: String               //переменная
      },
      manufacturerIds: '',
      textOpenMbPromptInfo: 'SM-A305, EOS 1D,...и.т.п.',
      textOpenMbPromptHeader: 'Добавить модель',
      textOpenMbPromptMessageSuccess: 'Вы внесли новую модель: ',
      textOpenMbPromptMessageErr: 'Пустое поле, попробуйте ещё раз.',

    }
  },
  // mounted() {
  //   this.getData();
  //
  // },
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
          // console.log('remoteMethod: ' + this.options)
        }, 200)
      } else {
        this.options = []
      }
    },

    //полученный массив из БД

    async getData() {
      this.manufacturerIds = this.manufacturerId;
      console.log('searchmodelname: getdata: manufacturerId: ' + this.manufacturerId);

      console.log('searchmodelname: store : ' + store.state.password);            ///STORE

      if (this.manufacturerIds !== 'undefined' || this.manufacturerIds !== '') {
        await HTTP.get('/workorder/apiform/modelname/' + this.manufacturerId)  //переменная
            .then(response => {
              this.items = response.data;
              this.list = this.items.map((item) => {
                return {value: `${item.id}`, label: `${item.modelName}`}        ///переменная
              })
            })
            .catch(e => {
              this.errors.push(e);
            })
      }               //if
    },

    // async getData() {
    //   //this.manufacturerIds = this.manufacturerId;
    //   console.log('searchmodelname: getdata: manufacturerIds: ' + this.manufacturerIds);
    //
    //   if (this.manufacturerIds !== 'undefined' || this.manufacturerIds !== '') {
    //
    //     await HTTP.get('/workorder/apiform/modelname/' + this.manufacturerIds)  //переменная
    //         .then(response => {
    //           console.log(response.data.toString() + '    axios get')
    //           this.items = response.data;
    //           this.list = this.items.map((item) => {
    //             return { value: `${item.id}`, label: `${item.modelName()}` }        ///переменная
    //           })
    //         })
    //         .catch(e => {
    //           this.errors.push(e);
    //         })
    //   }
    //
    // },

    //   сохраняем
    async save() {
      const json = JSON.stringify(this.newItem);

      console.log('searchmodelname: save: ' + json)

      await HTTP.post('/workorder/apiform/modelname', json)   //переменная
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
      this.$emit('getModel', this.value)          //переменная
      console.log('searchmodelname: getselect  ' + this.value)
    },
    //  открываем message box
    openMessageBox() {
      this.$prompt(this.textOpenMbPromptInfo, this.textOpenMbPromptHeader, {
        confirmButtonText: 'Сохранить',
        cancelButtonText: 'Отмена',
      })
          .then(({value}) => {
            if (value !== null) {
              this.newItem.modelName = value;       ///переменная
              // console.log('searchprodname: openMB: ' + value)
              this.save();
              this.$message({
                type: 'success',
                message: this.textOpenMbPromptMessageSuccess
              })
              this.modelName = '';
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


