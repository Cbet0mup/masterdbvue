import Main from "../pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";
import receiving from "../pages/receiving.vue";
import workorders from "../pages/workorders.vue";
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
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
