<template xmlns="http://www.w3.org/1999/html">
  <el-container>
    <el-header class="myHeader">
      <a style="text-align: center; margin-top: 10px; margin-bottom: 10px">Журнал</a>
    </el-header>
    <!--    панель управления-->
    <div class="line">
      <el-row>
        <el-button class="button-menu" @click="dialogFormVisible = true" type="primary" plain icon="el-icon-cpu">
          кнопка
        </el-button>
        <el-input class="input-search-workorder" placeholder="Поиск заказа" v-model="input"></el-input>
      </el-row>
    </div>

    <el-container class="container">

      <!--     левая боковая панель со списком-->
      <el-aside class="aside">
        <tabs-work-orders-repair/>
      </el-aside>

      <!--      центральная панель с инфой по заказу-->


      <el-main class="form">

        <el-row class="row-container">

          <div class="grid-content bg-purple">Наряд-заказ № <strong>{{ selectWorkOrder.id }}</strong></div>


            <div class="grid-content bg-purple-light">{{ selectWorkOrder.serviceName }}</div>


            <div class="grid-content bg-purple">Принял: {{ selectWorkOrder.receiverName }}</div>

        </el-row>

                  <el-form :label-position="labelPosition" size="mini">
                    <!-- заказчик -->
                    <el-row>
                      <el-form-item class="grid-content">
                        <div class="bg-purple-light">ФИО:</div>
                        <div><strong>{{ selectWorkOrder.customerName }}</strong></div>

                      </el-form-item>

                      <el-form-item class="grid-content">
                        <div class="bg-purple">Телефон:</div>
                        <div><strong><strong>{{ selectWorkOrder.customerPhone }}</strong></strong></div>

                      </el-form-item>

                    </el-row>

                    <!-- изделие -->
                    <el-row>
                      <el-form-item class="grid-content">
                        <div class="bg-purple">Изделие:</div>
                        <div><strong>{{ selectWorkOrder.productName }}</strong></div>
                      </el-form-item>

                      <el-form-item class="grid-content">
                        <div class="bg-purple-light">Фирма:</div>
                        <div><strong>{{ selectWorkOrder.manufacturerName }}</strong></div>
                      </el-form-item>

                      <el-form-item class="grid-content">
                        <div class="bg-purple">Модель:</div>
                        <div><strong>{{ selectWorkOrder.modelName }}</strong></div>
                      </el-form-item>
                    </el-row>

                    <el-row>
                      <el-form-item class="grid-content">
                        <div class="bg-purple-light">Серийный номер:</div>
                        <div><strong>{{ selectWorkOrder.serialNumber }}</strong></div>
                      </el-form-item>


                      <el-form-item class="grid-content">
                        <div class="bg-purple">IMEI:</div>
                        <div><strong>{{ selectWorkOrder.imei }}</strong></div>
                      </el-form-item>
                    </el-row>


                    <el-row>
                      <el-form-item class="grid-content">
                        <div class="bg-purple">Внешний вид:</div>
                        <div><strong>{{ selectWorkOrder.look }}</strong></div>
                      </el-form-item>


                      <el-form-item class="grid-content">
                        <div class="bg-purple-light">Комплектация:</div>
                        <div><strong>{{ selectWorkOrder.complection }}</strong></div>
                      </el-form-item>


                      <el-form-item class="grid-content">
                        <div class="bg-purple">Заявленная неисправность:</div>
                        <div><strong>{{ selectWorkOrder.trouble }}</strong></div>
                      </el-form-item>
                    </el-row>

                    <!-- ремонт -->
                    <el-row>
                      <el-form-item class="grid-content">
                        <search-service-order class="input-form"/>
                      </el-form-item>

                      <el-form-item class="grid-content">
                        <search-engineer class="input-form"/>
                      </el-form-item>
                    </el-row>

                    <el-row>
                      <el-form-item class="grid-content">
                        <search-price class="input-form"/>
                      </el-form-item>
                    </el-row>

                  </el-form>

      </el-main>
    </el-container>
  </el-container>


</template>

<script>
import TabsWorkOrdersRepair from "../components/tables/TabsWorkOrdersRepair.vue";

export default {
  name: "workorders",
  components: {TabsWorkOrdersRepair},

  computed: {
    selectWorkOrder() {
      return this.$store.getters.getSelectWorkOrderTabsRepair;
    }
  },

  data() {
    return {
      input: ''
    }
  }
}
</script>

<style scoped>
.container {
  /*height: 500px;*/
  margin: 10px;
}

.myHeader {
  max-height: content-box;
  text-align: center;
  display: contents;
}

.line {
  background-color: rgba(208, 224, 193, 0.99);
  display: block;
  border: 1px solid #8bef0e;
  padding: 1px;
  margin-left: 10px;
  margin-right: 10px;
}

.button-menu {
  margin-left: 20px;
}

.input-search-workorder {
  width: 130px;
  margin-left: auto;
  margin-right: 20px;
}

.form {
  margin-left: 10px;
  margin-right: 10px;
  display: inline;
}

.bg-purple {
  background: #e5edf5;
}

.bg-purple-light {
  background: #f0f3f8;
}

.grid-content {
  min-width: 190px;
  text-align: center;
  margin: 5px;
  padding: 5px;
  display: block;
  /*border: 1px dashed #c1fa76;*/

}
.row-container {

}
.aside{
  min-width: 370px;
  border: 1px dashed #c1fa76;
  padding: 5px;
}
.form-item {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
