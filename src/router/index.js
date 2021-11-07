import Main from "../pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";
import receiving from "../pages/receiving.vue";
import workorders from "../pages/workordersEngineer.vue";
import Management from "../pages/Management.vue";
import receivingRedact from "../pages/receivingRedact.vue";
const routes = [
    {
    path: '/',
        name: 'Главная',
    component: Main
},
    {
        path: '/receiving',
        name: 'Приёмка',
        component: receiving
    },
    {
        path: '/workorders',
        name: 'Заказы',
        component: workorders
    },
    {
        path: '/management',
        name: 'Управление',
        component: Management
    },
    {
        path: '/receiving/redact',
        name: 'Правка заказа',
        component: receivingRedact
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
