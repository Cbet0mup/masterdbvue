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
      <el-button @click.prevent="saveMessage" class="button-chat" type="success" plain>Success</el-button>
    </div>
  </div>
</template>

<script>

import {HTTP} from "../../api/instance";

export default {
  name: "chatWorkOrdersNote",
  data() {
    return {
      input: '',
      messages: '',
      urlApi: '/workorder/chatlog',
      newChatLog: {
        id: '',
        chatLog: ''
      }
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
    }
  },
  methods: {
    async saveMessage() {
      let tableWorkOrders = this.tableDataWorkOrders;
      let num = this.numTableDataWorkOrders;

      let date = new Date().toLocaleString();
      let user = "Current User " + date;
      let msg = this.input;
      this.input = '';
      this.$store.commit('pushMessageData', user);
      this.$store.commit('pushMessageData', msg);
      this.$store.commit('pushMessageData', '-');

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
