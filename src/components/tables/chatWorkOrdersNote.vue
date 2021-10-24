<template>
  <div class="chat">
    <a style="text-align: center; margin-top: 10px; margin-bottom: 10px"><strong>Примечания:</strong></a>

    <ul>
      <li class="row"
          v-for="message in getMessagesData"
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
          v-model="msg"
      ></el-input>
      <el-button @click.prevent="saveMessage" class="button-chat" type="success" plain>Success</el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: "chatWorkOrdersNote",
  data() {
    return {
      msg: '',
      messages: '',
      urlApi: '/workorder/apiform/notes/',
    }
  },
  computed: {
    selectWorkOrder() {
      return this.$store.getters.getSelectWorkOrderTabsRepair;
    },
    getMessagesData() {
      return this.$store.getters.getMessages;
    },
    messageServerData() { return this.$store.getters.getMessageServerData;}
  },
  methods: {
    saveMessage(){
      let date = new Date().toLocaleString();
      let user = "Current User " + date;
      let msg = this.msg;
      this.msg = ''
      this.$store.commit('pushMessageData', user)
      this.$store.commit('pushMessageData', msg)
      this.$store.commit('pushMessageData', '')

    },
  }
}
</script>

<style scoped>
.chat{
  margin-left: 40px;
  padding: 10px;
  border: 1px dashed #c1fa76;
  border-radius: 20px;

}
.row{
  margin-bottom: 10px;
  list-style-type: none;
  font-weight: 500;
}
.button-chat{
  margin-top: 10px;
}
</style>
