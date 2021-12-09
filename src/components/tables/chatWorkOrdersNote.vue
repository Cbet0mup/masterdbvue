<template>
  <div class="chat">
    <a style="text-align: center; margin-top: 10px; margin-bottom: 10px"><strong>Примечания:</strong></a>

    <ul>
      <li class="row"
          v-for="message in messagesData"
      >
        {{ message }}
        <br>
      </li>
    </ul>
    <div class="input-message">
      <el-input
          style="margin-top: 15px"
          type="textarea"
          placeholder="Введите сообщение"
          v-model="input"
      ></el-input>
      <el-button @click.prevent="saveMessage" class="button-chat" type="success" plain>Отправить</el-button>
    </div>

    <!--                    связь с клиентом            -->
    <el-dialog title="Связь с клиентом"
               v-model="isVisible"
               :before-close="cancel"
               :close-on-click-modal="false"
               :close-on-press-escape="false"
               :show-close="false"
               width="30%"
               :center="true"
               class="bg-purple"
    >
      <div class="input-message">
        <el-input
            style="margin-top: 15px"
            type="textarea"
            autofocus
            placeholder="Введите сообщение"
            v-model="input"
        ></el-input>
      </div>

      <template #footer>
    <span class="dialog-footer">
      <el-button @click="cancel">Закрыть</el-button>
      <el-button type="primary" @click="isNeedCall">Сохранить</el-button>
    </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>

import {HTTP} from "../../api/instance";

export default {
  name: "chatWorkOrdersNote",
  props: ['isVisible'],
  data() {
    return {
      myVisible: this.isVisible,
      input: '',
      messages: '',
      urlApi: '/workorder/chatlog',
      urlNeedCall: '/workorder/needCall',
      newChatLog: {
        id: '',
        chatLog: '',
        isNeedCall: ''
      },
      isNeedCallSave: false,
      isNeedCallDto: {
        id: '',
        isNeedCall: ''
      },

    }
  },
  mounted() {
    if (Object.keys(this.selectRowData).length){
      this.$store.commit('pushMessageData', this.selectRowData.chatLog);
      this.$store.commit('setSelectWorkOrderTabsRepair', this.selectRowData);
      this.getMessages();
    }

  },

  computed: {
    selectWorkOrder() {
      return this.$store.getters.getSelectWorkOrderTabsRepair;
    },
    messagesData() {
      return this.$store.getters.getMessages;
    },
    tableDataWorkOrders() {
      return this.$store.getters.getTableDataWorkOrders;
    },
    numTableDataWorkOrders() {
      return this.$store.getters.getNumTableDataWorkOrders;
    },
    selectRowData() {
      return this.$store.getters.getSelectRow;
    }
  },
  methods: {
    async saveMessage() {
      let msg = this.input;
      if (msg === '') {
        this.$message({
          type: 'info',
          message: 'Введите сообщение',
        })
      } else {
        let tableWorkOrders = this.tableDataWorkOrders;
        let num = this.numTableDataWorkOrders;
        let user = '';

        let date = new Date().toLocaleString();


        if (this.isNeedCallSave) {
          user = "Связь с клиентом: " + date;                     //имя пользователя

          this.isNeedCallDto.id = this.selectWorkOrder.id;
          this.isNeedCallDto.isNeedCall = true;
          await this.updateIsNeedCallToServer();

          tableWorkOrders[num].isNeedCall = true;
          this.selectWorkOrder.isNeedCall = true;
          this.$store.commit('setTableDataWorkOrders', tableWorkOrders);  //обновляем данные в таблице мастера
          this.cancel();

        } else {
          user = "Current User " + date;                      //имя пользовател
        }
        this.$store.commit('pushMessageData', user);
        this.$store.commit('pushMessageData', msg);
        this.$store.commit('pushMessageData', '-');
        this.input = '';
        let newChatLogs = user + '*' + msg + '*' + '-' + '*';
        tableWorkOrders[num].chatLog += newChatLogs;
        this.$store.commit('setTableDataWorkOrders', tableWorkOrders);
//post
        this.newChatLog.id = this.selectWorkOrder.id;
        this.newChatLog.chatLog = newChatLogs;

        await HTTP.post(this.urlApi, JSON.stringify(this.newChatLog))
            .then(function (response) {
              console.log("chat - OK " + response);
            })
            .catch(function (error) {
              console.log("chat save ERRRR" + error);
            });
        this.newChatLog.id = '';
        this.newChatLog.chatLog = '';
        this.isNeedCallSave = !this.isNeedCallSave;
      }
    },
    cancel() {
      this.myVisible = false;
      this.input = '';
      this.$emit('cancelForm', this.myVisible)
    },
    isNeedCall() {
      this.isNeedCallSave = !this.isNeedCallSave;
      this.saveMessage();
    },

    async updateIsNeedCallToServer() {
      await HTTP.post(this.urlNeedCall, JSON.stringify(this.isNeedCallDto))
          .then(function (response) {
            console.info('response update  ' + response.data)
          })
          .catch(function (error) {
            console.error('err  ' + error)
          });
    },

    getMessages(){
      this.$store.commit('clearMessageData', '');
      let messArr = this.selectWorkOrder.chatLog.split('*');
      messArr.forEach(el => this.$store.commit('pushMessageData', el));
    },
  }
}
</script>

<style scoped>
.chat {
  margin-left: 40px;
  padding: 10px;
  border: 1px dashed #c1fa76;
  border-radius: 20px;

}

.row {
  margin-bottom: 10px;
  list-style-type: none;
  font-weight: 500;
}

.button-chat {
  margin-top: 10px;
}
</style>
