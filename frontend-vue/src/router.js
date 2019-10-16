import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            component: () => import('./pages/Login/Login.vue')
        },
        {
            path: "/dashboard",
            component: () => import('./pages/Dashboard/Dashboard.vue')

        },
        {
            path: "/new",
            component: () => import('./pages/New/New.vue')
        }
    ]
});