import { createStore} from 'vuex'
import formData from './modules/FormData.js'

export const store = createStore({

    modules: {
        formData
    }
})
