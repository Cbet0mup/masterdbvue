<template>
  <el-form-item class="form-item">
    <el-tooltip
        class="item"
        effect="dark"
        content="прайс"
        placement="top"
    >
    <el-select v-model="value"
               placeholder="Прайс"
               @change="getSelect"
               @focus="getData"
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
        content="Добавить новый раздел к прайсу"
        placement="top-start"
    >
    <el-button @click="dialogVisible = true"
               class="button-add"
               icon="el-icon-circle-plus-outline"
               size="mini"
               circle
    ></el-button>
    </el-tooltip>
  </el-form-item>
  <el-form-item class="form-item">
    <el-tooltip
        class="item"
        effect="dark"
        content="Стоимость работ"
        placement="top"
    >
  <el-input class="input-price"
              placeholder="Стоимость работ"
              v-model.trim="finalPriceItem.price"
              size="mini"
    ></el-input>
    </el-tooltip>
  </el-form-item>
  <el-form-item class="form-item">
    <el-tooltip
        class="item"
        effect="dark"
        content="Предоплата"
        placement="top"
    >
    <el-input class="input-price"
              placeholder="Предоплата"
              v-model.trim="prepayment"
              size="mini"
              @input="changeInput"
    ></el-input>
    </el-tooltip>
  </el-form-item>

  <!--                          новая градация прайса                 -->
    <el-dialog
        :title="textOpenMbPromptHeader"
        v-model="dialogVisible"
        width="40%"
        :center="true"
        class="bg-purple"
    >
      <span>{{ textOpenMbPromptInfo }}</span>
      <br>
      <el-form
          :label-position="labelPosition"
          size="mini">
        <el-form-item label="Новая градация">
          <el-input v-model="newItem.priceName"></el-input>
        </el-form-item>

        <el-form-item label="цена">
          <el-input v-model="newItem.price"></el-input>
        </el-form-item>
      </el-form>

      <template #footer>
    <span class="dialog-footer">
      <el-button @click="cancel">Cancel</el-button>
      <el-button type="primary"
                 @click="submitForm"
      >Confirm</el-button
      >
    </span>
      </template>
    </el-dialog>


</template>

<script>
import {HTTP} from "../../../api/instance";

export default {
  name: "SearchPrice",
  computed: {
    selectRow() {
      return this.$store.getters.getSelectRow;
    },
    form() {
      return this.$store.getters.getForm;
    },
    clear() {
      if (this.form.priceName !== '') {
        this.value = this.form.priceName;
        this.finalPriceItem.price = this.form.price;
        this.prepayment = this.form.prepayment;
      }
    },
  },

  mounted() {
    if (Object.keys(this.selectRow).length !== 0) {
      this.value = this.selectRow.priceName;
      this.finalPriceItem.price = this.selectRow.price;
      this.prepayment = this.selectRow.prepayment;
      this.$store.commit('setPriceId', this.selectRow.priceId);
    }
  },

  data() {
    return {
      options: [],
      value: '',
      items: [],
      prepayment: '',
      dialogVisible: false,
      labelPosition: 'left',
      finalPriceItem: {
        priceName: '',
        price: '',
        productId: ''
      },
      newItem: {
        priceName: '',             //переменная
        price: '',
        productId: ''
      },
      urlApi: '/workorder/apiform/price/',
      textOpenMbPromptInfo: 'Например: Телевизор - 55" жидкокристаллический',
      textOpenMbPromptHeader: 'Добавить градацию и базовую стоимость ремонта',
      textOpenMbPromptMessageSuccess: 'Данные внесены. ',
      textOpenMbPromptMessageErr: 'Пустое поле, попробуйте ещё раз.',
    }
  },
  methods: {
    cancel() {
      this.dialogVisible = false;
      this.$message({
        type: 'Error',
        message: 'Ввод отменён.',
      })
    },
    changeInput() {
      this.$store.commit('setPrepayment', this.prepayment);
    },

    //полученный массив из БД

    async getData() {
      if (this.form.productId !== '') {
        await HTTP.get(this.urlApi + this.form.productId)  //переменная
            .then(response => {
              this.items = response.data;
              this.options = this.items.map((item) => {
                return {value: `${item.id}`, label: `${item.priceName}`, price: `${item.price}`}        ///переменная
              })
            })
            .catch(e => {
              this.errors.push(e);
            })
      } else {
        this.$message({
          type: 'info',
          message: 'Ничего не найдено...',
        })
      }
    },
    //выбранный элемент улетает в родительский компонент формы

    getSelect() {
      this.options.forEach(el => {
        if (el.value === this.value) {
          this.finalPriceItem = el
        }
      })

      this.$store.commit('setPriceId', this.value)                         //переменная
      this.$store.commit('setNewPrice', this.finalPriceItem.price)       //переменная
    },

    submitForm() {
      if (this.form.productId !== '') {
        if (this.newItem.priceName !== '') {
          this.save();
          this.newItem.price = '';
          this.newItem.priceName = '';
          this.newItem.productId = '';
          this.dialogVisible = false
        } else {
          this.$message({
            type: 'success',
            message: this.textOpenMbPromptMessageErr,
          })
        }
      } else {
        this.$message({
          type: 'success',
          message: "Ошибка: тип изделия не выбран!",
        })
      }
    },

    async save() {
      this.newItem.productId = this.form.productId;
      const json = JSON.stringify(this.newItem);

      await HTTP.post(this.urlApi, json)   //переменная
          .then(function (response) {
            alert("Данные успешно внесены")
          })
          .catch(function (error) {
            alert("Ошибка: " + error.toString());
          })
      await this.getData()

    },

  }
}
</script>

<style scoped>
.button-add {
  margin-left: 5px;
}

.input-price {

}
.form-item {
  margin-top: 20px;

  margin-left: 20px;
}
</style>
