<template>
  <el-select
      v-model="value"
      filterable
      remote
      placeholder="Производитель"
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
      content="Добавить нового производителя"
      placement="top"
  >
    <el-button @click.prevent="openMessageBox" class="button-add"  icon="el-icon-circle-plus-outline" size="mini" circle ></el-button>
  </el-tooltip>
</template>

<script>
import {HTTP} from "../../../api/instance";

export default {
  name: "SearchManufacturer",

  data() {
    return {
      options: [],
      value: [],
      list: [],
      loading: false,
      items: [],
      newItem: {
        manufacturer: String
      },
      textOpenMbPromptInfo: 'Samsung, Huawei, и.т.д',
      textOpenMbPromptHeader: 'Добавить производителя',
      textOpenMbPromptMessageSuccess: 'Вы внесли нового производителя: ',
      textOpenMbPromptMessageErr: 'Заполните поле названия производителя.',
      url: '/workorder/apiform/manufacturer'

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
        this.value = this.selectRow.manufacturerName;
    },
  },
  mounted() {
    this.getData();
    if (Object.keys(this.selectRow).length !== 0) {
      this.value = this.selectRow.manufacturerName;
      this.$store.commit('setManufacturerId', this.selectRow.manufacturerId);
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
           //console.log('remoteMethod: ' + this.options)
        }, 200)
      } else {
        this.options = []
      }
    },

    //полученный массив из БД

    async getData() {
      await HTTP.get(this.url)
          .then(response => {
            this.items = response.data;
            this.list = this.items.map((item) => {
              return { value: `${item.id}`, label: `${item.manufacturer}` }  //переменная
            })
          })
          .catch(e => {
            this.errors.push(e);
          })
    },

    //   сохраняем
    async save() {
      const json = JSON.stringify(this.newItem);

      //console.log('searchprodname: save: ' + json)

      await HTTP.post(this.url, json)
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
      this.$store.commit('setManufacturerId', this.value)
     // console.log('searchmanname: getselect  ' + this.value)
    },
    //  открываем message box
    openMessageBox() {
      this.$prompt(this.textOpenMbPromptInfo, this.textOpenMbPromptHeader, {
        confirmButtonText: 'Сохранить',
        cancelButtonText: 'Отмена',
      })
          .then(({value}) => {
            if (value !== null){
              this.newItem.manufacturer = value;
              this.save();
              this.$message({
                type: 'success',
                message: this.textOpenMbPromptMessageSuccess
              })
              this.manufacturer = '';
            } else {
              this.$message({
                type: 'error',
                message: this.textOpenMbPromptMessageErr,
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

