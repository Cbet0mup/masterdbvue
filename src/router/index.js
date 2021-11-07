import Main from "../pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";
import receiving from "../pages/receiving.vue";
import workorders from "../pages/workorders.vue";
import Management from "../pages/Management.vue";
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
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
