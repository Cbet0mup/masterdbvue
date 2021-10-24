export default {
    state: () =>({
        selectWorkOrderTabsRepair:{},
        messageData: [],
        messageServerData: {},
    }),
    getters: {
        getSelectWorkOrderTabsRepair(state) {
            return state.selectWorkOrderTabsRepair;
        },
        getMessages(state) {
            return state.messageData;
        },
        getMessageServerData(state) {
            return state.messageServerData;
        }
    },
    mutations: {
        setSelectWorkOrderTabsRepair(state, data) {
            state.selectWorkOrderTabsRepair = data;
        },
        setMessages(state, data) {
            state.messageData = [];
            let arr = data.split('*');
            arr.forEach(el => state.messageData.push(el));

        },
        pushMessageData(state, data) {
            state.messageData.push(data);
        },
        setMessageServerData(state, data) {
            state.messageServerData = data;
        }

    },
    actions: {

    },
}
