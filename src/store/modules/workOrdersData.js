export default {
    state: () =>({
        selectWorkOrderTabsRepair:{},
        messageData: [],
        tableDataWorkOrders: [],
        numTableDataWorkOrders: 0,
        isModify: false,
    }),
    getters: {
        getSelectWorkOrderTabsRepair(state) {
            return state.selectWorkOrderTabsRepair;
        },
        getMessages(state) {
            return state.messageData;
        },
        getTableDataWorkOrders(state) {
            return state.tableDataWorkOrders;
        },
        getNumTableDataWorkOrders(state) {
            return state.numTableDataWorkOrders;
        },
        getIsModify(state) {
            return state.isModify;
        }
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
        },
        setTableDataWorkOrders(state, data) {
            state.tableDataWorkOrders = data;
        },
        setNumTableDataWorkOrders(state, data) {
            state.numTableDataWorkOrders = data;
        },
        setIsModify(state, data) {
            state.isModify = data;
        }

    },
    actions: {

    },
}
