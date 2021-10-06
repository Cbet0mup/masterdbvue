export default {
    state: () =>({
        form: {
            customerName: '',      //имя заказчика /
            customerPhone: '',      //телефон
            productId: '',      //тип: телек, кондёр, наушники
            manufacturerId: '', //производитель
            serialNumber: '',     //серийник
            imei: '',             //имей
            view: '',             // внешний вид
            complection: '',        //комплектация
            trouble: '',          // неисправность
            modelId: '',              //модель
            serviceId: '',      //услуга платный, гарантийный, повторный
            engineerId: '',     // мастер
            priceId: '',           //  стоимосто по прейскуранту

            receiverId: 1,
            statusId: 1,
        },
    }),
    getters: {
        getForm(state) {
            return state.form;
        }
    },
    mutations: {
        setCustomerName(state, data) {
            state.form.customerName = data;
        },
        setCustomerPhone(state, data) {
            state.form.customerPhone = data;
        },
        setProductId(state, data) {
            state.form.productId = data;
        },
        setManufacturerId(state, data) {
            state.form.manufacturerId = data;
        },
        setSerialNumber(state, data) {
            state.form.serialNumber = data;
        },
        setImei(state, data) {
            state.form.imei = data;
        },
        setView(state, data) {
            state.form.view = data;
        },
        setComplection(state, data) {
            state.form.complection = data;
        },
        setTrouble(state, data) {
            state.form.trouble = data;
        },
        setModelId(state, data) {
            state.form.modelId = data;
        },
        setServiceId(state, data) {
            state.form.serviceId = data;
        },
        setEngineerId(state, data) {
            state.form.engineerId = data;
        },
        setPriceId(state, data) {
            state.form.priceId = data;
        },
        setReceiverId(state, data) {
            state.form.receiverId = data;
        },
        setStatusId(state, data) {
            state.form.statusId = data;
        },

    },
    actions: {

    },
}
