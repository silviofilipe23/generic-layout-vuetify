import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login/Login.vue';
import Perfil from './views/Perfil/Perfil.vue';
import Dashboard from './views/Dashboard/Dashboard.vue';
import Events from './views/Events/Events.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        layout: 'login',
      },
    },
    {
      path: '/perfil',
      name: 'Perfil',
      component: Perfil,
      meta: {
        layout: 'dashboard',
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        layout: 'dashboard',
      }
    },
    {
      path: '/events',
      name: 'Events',
      component: Events,
      meta: {
        layout: 'dashboard',
      }
    }
  ]
});