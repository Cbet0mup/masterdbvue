export default {
    state: () =>({
        selectRowData: {},
        isDoneData: [],
        isDoneIsCalledData: [],
    }),
    getters: {
    getSelectRow(state){
        return state.selectRowData;
    },
    },
    mutations: {
        setSelectRowData(state, data){
            state.selectRowData = data;
        },
        setSelectRowDataClear(state, data){
            state.selectRowData = {};
        }
    },
    actions: {

    },
}
