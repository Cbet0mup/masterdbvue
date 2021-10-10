<template>
  <el-select v-model="value" placeholder="Наименование услуги">
    <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        @change="getSelect"
    >
    </el-option>
  </el-select>
  <el-button @click.prevent="openMessageBox" class="button-add" icon="el-icon-circle-plus" size="mini"
             circle></el-button>
</template>

<script>
import {HTTP} from "../../api/instance";

export default {
  name: "SearchServiceOrder",
  computed: {
    form() {
      return this.$store.getters.getForm;
    }
  },
  data() {
    return {
      options: [],
      value: '',
      items: [],
      newItem: {
        serviceType: String               //переменная
      },
      textOpenMbPromptInfo: 'Платный, Гарантийный и т.д.',
      textOpenMbPromptHeader: 'Добавить тип',
      textOpenMbPromptMessageSuccess: 'Вы внесли новый тип ремонта: ',
      textOpenMbPromptMessageErr: 'Пустое поле, попробуйте ещё раз.',
      urlApi: '/workorder/apiform/service'
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
              return {value: `${item.id}`, label: `${item.serviceType}`}        ///переменная
            })
          })
          .catch(e => {
            this.errors.push(e);
          })
    },

    //   сохраняем
    async save() {
      const json = JSON.stringify(this.newItem);

      console.log('searchservice: save: ' + json)

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
      this.$store.commit('setServiceId', this.value)                          //переменная
      console.log('searchprodname: getselect  ' + this.form.serviceId)
    },
    //  открываем message box
    openMessageBox() {
      this.$prompt(this.textOpenMbPromptInfo, this.textOpenMbPromptHeader, {
        confirmButtonText: 'Сохранить',
        cancelButtonText: 'Отмена',
      })
          .then(({value}) => {
            if (value !== null) {
              this.newItem.serviceType = value;                 ///переменная
              this.save();
              this.$message({
                type: 'success',
                message: this.textOpenMbPromptMessageSuccess
              })
              this.serviceType = '';                            ///переменная
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
