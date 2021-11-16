<template>
  <el-alert @close="alertVisible = false" v-if="alertVisible" title="Выберите производителя" type="error"> </el-alert>
  <el-select
      v-model.trim="value"
      @focus="getData"
      filterable
      remote
      placeholder="Модель"
      :remote-method="remoteMethod"
      :loading="loading"
      @change="getSelect"
      @blur="clear"

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
import {HTTP} from "../../../api/instance.js";

export default {
  name: "SearchModel",

  computed: {
    selectRow() {
      return this.$store.getters.getSelectRow;
    },
    form() {
      return this.$store.getters.getForm;
    },
    clear() {
      this.value = this.form.modelName;
    },
  },
  mounted() {
    if (Object.keys(this.selectRow).length !== 0) {
      this.value = this.selectRow.modelName;
      this.$store.commit('setModelId', this.selectRow.modelId);
    }
  },

  data() {
    return {
      alertVisible: false,
      options: [],
      value: [],
      list: [],
      loading: false,
      items: [],
      newItem: {
        modelName: String,             //переменная
        manufacturerId: Number
      },
      textOpenMbPromptInfo: 'SM-A305, EOS 1D,...и.т.п.',
      textOpenMbPromptHeader: 'Добавить модель',
      textOpenMbPromptMessageSuccess: 'Вы внесли новую модель: ',
      textOpenMbPromptMessageErr: 'Пустое поле, попробуйте ещё раз.',
      urlApi: '/workorder/apiform/modelname/'
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
      if (!parseInt(this.form.manufacturerId) < 1) {
        await HTTP.get(this.urlApi + this.form.manufacturerId)  //переменная
            .then(response => {
              this.items = response.data;
              this.list = this.items.map((item) => {
                return {value: `${item.id}`, label: `${item.modelName}`}        ///переменная
              })
            })
            .catch(e => {
              console.log("ERRRR" + e);
            })
      } else {
        this.alertVisible = true;
      }
    },

    //   сохраняем
    async save() {
      this.newItem.manufacturerId = this.form.manufacturerId;
      const json = JSON.stringify(this.newItem);

      console.log('searchmodelname: save: ' + json);

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
      this.$store.commit('setModelId', this.value)
      console.log('searchmodelname: getselect  ' + this.form.modelId);
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


