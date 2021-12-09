<template>
  <el-tooltip
      class="item"
      effect="dark"
      content="Наименование услуги"
      placement="top"
  >
  <el-select v-model="value"
             placeholder="Наименование услуги"
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
  </el-tooltip>

  <el-tooltip
      class="item"
      effect="dark"
      content="Добавить услугу"
      placement="top"
  >
  <el-button @click.prevent="openMessageBox"
             class="button-add"
             icon="el-icon-circle-plus-outline"
             size="mini"
             circle>

  </el-button>
  </el-tooltip>
</template>

<script>
import {HTTP} from "../../../api/instance";

export default {
  name: "SearchServiceOrder",
  computed: {
    selectRow() {
      return this.$store.getters.getSelectRow;
    },
    form() {
      return this.$store.getters.getForm;
    },
    clear() {
      this.value = this.form.serviceName;
    },
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
    if (Object.keys(this.selectRow).length !== 0) {
      this.value = this.selectRow.serviceName;
      this.$store.commit('setServiceId', this.selectRow.serviceId);
    }
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
            //console.log("OK   " + response);
          })
          .catch(function (error) {
            console.log("ERRRR" + error);
          })
      await this.getData()
    },

    //выбранный элемент улетает в родительский компонент формы
    getSelect() {
      this.$store.commit('setServiceId', this.value)        //переменная
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
