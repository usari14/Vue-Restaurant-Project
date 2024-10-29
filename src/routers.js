import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue";
import LoginPage from "./components/LoginPage.vue";
import Addrest from "./components/Addrest.vue";
import Updaterest from "./components/Updaterest.vue";

const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    }
    ,
    {
        name: 'LoginPage',
        component: LoginPage,
        path: '/login'
    },
    {
        name: 'AddPage',
        component: Addrest,
        path: '/add-rest'
    },
    {
        name: 'UpdatePage',
        component: Updaterest,
        path: '/update-rest/:id'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router