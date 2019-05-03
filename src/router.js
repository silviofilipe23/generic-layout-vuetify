import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login/Login.vue';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/login',
            name: 'home',
            component: Login,
            meta: {
                layout: 'login',
            },
        },
        {
            path: '/about',
            name: 'about',
            meta: {
                layout: 'dashboard',
            },
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
});