export default {
    state: () =>({
        selectWorkOrderTabsRepair:{},
        messageData: [],
    }),
    getters: {
        getSelectWorkOrderTabsRepair(state) {
            return state.selectWorkOrderTabsRepair;
        },
        getMessages(state) {
            return state.messageData;
        },
    },
    mutations: {
        setSelectWorkOrderTabsRepair(state, data) {
            state.selectWorkOrderTabsRepair = data;
        },
        pushMessageData(state, data) {
            state.messageData.push(data);
        },
        clearMessageData(state, data) {
            state.messageData = [];
        }

    },
    actions: {

    },
}
