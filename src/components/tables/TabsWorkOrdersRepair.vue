<template>
  <el-table
      :data="tableDataWorkOrders"
      size="mini"
      :row-class-name="tableRowClassName"
      @row-click="getThisWorkOrder"
  >
    <el-table-column prop="id" label="№" width="60" header-align="center"></el-table-column>
    <el-table-column prop="createdAt" label="Дата" header-align="center"></el-table-column>
    <el-table-column prop="productName" label="Изделие" header-align="center"></el-table-column>
  </el-table>

  <el-dialog
      title="Внимание!"
      v-model="dialogVisible"
      width="20%"
  >
    <span>Зарегистрированы изменения базы данных, сохранить их?</span>
    <template #footer>
    <span class="dialog-footer">
      <el-button @click=closeDialog>Нет</el-button>
      <el-button type="primary" @click=saveData>Разумеется</el-button>
    </span>
    </template>
  </el-dialog>
</template>

<script>
import {HTTP} from "../../api/instance";
import { Edit } from '@element-plus/icons';

export default {
  components: {Edit,},
  name: "TabsWorkOrdersRepair",

  mounted() {
    this.getData();
  },
  computed: {
    selectWorkOrder() {
      return this.$store.getters.getSelectWorkOrderTabsRepair;
    },
    tableDataWorkOrders() {
      return this.$store.getters.getTableDataWorkOrders;
    },
    isModify() {
      return this.$store.getters.getIsModify;
    }
  },

  data() {
    return {
      engineerId: '3',
      urlApi: '/workorder/findworkorder/allNeedRepair/',
      oldRowId: '',
      dialogVisible: false,
      nextRow: {},
      isNeedCall: '',
    }
  },
  methods: {                        //colors:   success, information, warning, danger
    tableRowClassName({ row, rowIndex }) {
      let statusObj = this.tableDataWorkOrders.find(item => item.id === row.id);

      if (statusObj.isNeedCall === 'true') {
        console.log(statusObj.id)
        return 'warning-row'
      } else if (statusObj.isWaitingForASpareParts === 'true') {
        console.log(statusObj.id)
        return 'success-row'
      }
      return 'warning-row'
    },

    async getData() {
      await HTTP.get(this.urlApi + this.engineerId)
          .then(response => {
            this.$store.commit('setTableDataWorkOrders', response.data)
          })
          .catch(e => {
            console.log("ERRRR" + e);
          })
      // первый по умолчанию
      this.$store.commit('setSelectWorkOrderTabsRepair', this.tableDataWorkOrders[0]);
      this.$store.commit('setId', this.selectWorkOrder.id);      //сразу забиваем id
      this.getMessages();
    },

    getThisWorkOrder(row) {   //проверяем на модификации и отсылаем дальше
      this.nextRow = row;   //сохраняем выбранную строку
    if (this.isModify){
      this.dialogVisible = true;    //есть изменения, надоть спросить
    }else {
      this.getWorkOrder(row);
    }

    },
    getWorkOrder(row) {           //выдаём инфу из выбранной строки
      this.$store.commit('clearMessageData', '');

      let num = 0;    // номер в массиве заказов, ножен для сохранения чата
      this.tableDataWorkOrders.forEach(workOrder => {
        if (workOrder.id === row.id) {
          this.$store.commit('setSelectWorkOrderTabsRepair', workOrder);
          this.$store.commit('setNumTableDataWorkOrders', num);
        }
        num +=1;
      })
      num = 0;

      this.$store.commit('setId', row.id);
      this.$store.commit('setTroubleDetected', this.selectWorkOrder.troubleDetected);
      this.$store.commit('setTroubleSolving', this.selectWorkOrder.troubleSolving);
      this.getMessages();
      this.$store.commit('setIsModify', false);
    },

    getMessages(){
      this.$store.commit('clearMessageData', '');
      let messArr = this.selectWorkOrder.chatLog.split('*');
      messArr.forEach(el => this.$store.commit('pushMessageData', el));
    },

    saveData() {
      this.$emit('saveData');
      this.getWorkOrder(this.nextRow);
      this.dialogVisible = false;
    },

    closeDialog(){
      this.$store.commit('setIsModify', false);
      this.getWorkOrder(this.nextRow);    //след. строка
      this.dialogVisible = false;
    }
  }
}
</script>

<style scoped>
.el-table .warning-row {
  --el-table-tr-background-color: var(--el-color-warning-lighter);
}
.el-table .success-row {
  --el-table-tr-background-color: var(--el-color-success-lighter);
}
</style>
