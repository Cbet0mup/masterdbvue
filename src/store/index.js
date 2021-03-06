import { createStore} from 'vuex'
import formData from './modules/FormData.js'
import workOrdersData from './modules/workOrdersData.js'
import receivingRedactData from "./modules/receivingRedactData.js";

export const store = createStore({

    modules: {
        formData, workOrdersData, receivingRedactData
    }
})
