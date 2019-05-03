import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login/Login.vue';
import Perfil from './views/Perfil/Perfil.vue';
import Dashboard from './views/Dashboard/Dashboard.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        layout: 'login',
      },
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: Perfil,
      meta: {
        layout: 'dashboard',
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        layout: 'dashboard',
      }
    }
  ]
});