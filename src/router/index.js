import Main from "../pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";
import receiving from "../pages/receiving.vue";
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
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
