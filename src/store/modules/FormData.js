export default {
    state: () =>({
        form: {
            id: '',
            createdAt: '',      //дата приёмки
            givenOut: '',       //дата выдачи  клиенту на руки
            dateOfIssue: '',        //дата выдачи инженером

            customerName: '',      //имя заказчика /
            customerPhone: '',      //телефон

            serialNumber: '',     //серийник
            imei: '',             //имей
            look: '',             // внешний вид
            complection: '',        //комплектация

            modelId: '',              //модель
            modelName: '',
            serviceId: '',      //услуга платный, гарантийный, повторный
            serviceName: '',
            engineerId: '',     // мастер
            productId: '',      //тип: телек, кондёр, наушники
            manufacturerId: '', //производитель
            manufacturerName: '',

            trouble: '',          // неисправность
            troubleDetected: '',    //выявленная неисправность
            troubleSolving: '',     //описание работ

            priceId: '',           //  прейскурант
            priceName: '',
            price: '',
            prepayment: '',           //  предоплата
            finalPrice: '',           /// окончательная стоимость ремонта
            additionalPrice: '',           ///стоимость доп работ и деталей
            chatLog: '',                 //примечания

            isAccepted: 'true',             //принят
            isNeedCall: 'false',
            isDone: 'false',
            isDoneIsCalled: 'false',
            isGivenOut: 'false',



            receiverId: 1,          //приёмщик
            statusId: 1,            //статус - принят, выдан итд
        },
    }),
    getters: {
        getForm(state) {
            return state.form;
        },
    },
    mutations: {
        setCustomerName(state, data) {
            state.form.customerName = data;
        },
        setIsAccepted(state, data) {
            state.form.isAccepted = data;
        },
        setId(state, data){
          state.form.id = data;
        },
        setNewPrice(state, data) {
            state.form.finalPrice = data;
        },
        setAdditionalPrice(state, data) {
            state.form.additionalPrice = data;
        },
        setPrepayment(state, data) {
            state.form.prepayment = data;
        },
        setPriceId(state, data) {
            state.form.priceId = data;
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
            state.form.look = data;
        },
        setComplection(state, data) {
            state.form.complection = data;
        },
        setTrouble(state, data) {
            state.form.trouble = data;
        },
        setTroubleDetected(state, data) {
            state.form.troubleDetected = data;
        },
        setTroubleSolving(state, data) {
            state.form.troubleSolving = data;
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
        setReceiverId(state, data) {
            state.form.receiverId = data;
        },
        setStatusId(state, data) {
            state.form.statusId = data;
        },
        setClearForm(state, data) {
            state.form = data;
        },
        setChatLog(state, data) {
            state.form.chatLog += data;
        }

    },
    actions: {

    },
}
