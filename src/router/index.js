import Main from "../pages/main.vue";
import {createRouter, createWebHistory} from "vue-router";
import receiving from "../pages/receiving/receiving.vue";
import workorders from "../pages/workordersEngineer.vue";
import managementStaff from "../pages/managment/managementStaff.vue";
import receivingRedact from "../pages/receiving/receivingRedact.vue";
import warehouse from "../pages/warehouse.vue";
import delivery from "../pages/delivery.vue";
import guid from "../pages/guide.vue";
const routes = [
    {
    path: '/',
        name: 'Главная',
    component: Main
},
    {
        path: '/receiving',
        name: 'Приёмка',
        component: receiving,
        meta: {
            reload: true,
        },
    },
    {
        path: '/workorders',
        name: 'Заказы',
        component: workorders
    },
    {
        path: '/management/staff',
        name: 'Управление - кадры',
        component: managementStaff
    },
    {
        path: '/receiving/redact',
        name: 'Правка заказа',
        component: receivingRedact
    },
    {
        path: '/delivery',
        name: 'Почта',
        component: delivery
    },
    {
        path: '/warehouse',
        name: 'Склад',
        component: warehouse
    },
    {
        path: '/guide',
        name: 'Инструкция',
        component: guid
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
