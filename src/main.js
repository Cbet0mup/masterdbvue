import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import components from './components/index.js'
import {store} from './store'
import router from "./router";
const app = createApp(App);


components.forEach(comp => {
    app.component(comp.name, comp)
});

app.use(ElementPlus);
app.use(store);
app.use(router)
app.mount('#app');
