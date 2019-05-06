import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuetify from 'vuetify';
import axios from 'axios';
import LoginLayout from './Layouts/Login.vue';
import DashboardLayout from './Layouts/Dashboard.vue';
import VuetifyToast from 'vuetify-toast-snackbar';

import 'vuetify/dist/vuetify.min.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(Vuetify, {
    iconfont: 'md',
    theme: {
        primary: '#01579B',
        secondary: '#039BE5',
        accent: '#8c9eff',
        error: '#b71c1c'
    }
});

Vue.use(VuetifyToast, {
    x: 'right', // default
    y: 'top', // default
    color: 'info', // default
    icon: 'info',
    timeout: 3000, // default
    dismissable: true, // default
    autoHeight: false, // default
    multiLine: false, // default
    vertical: false, // default
    queueable: false, // default
    shorts: {
        custom: {
            color: 'purple'
        }
    },
    property: '$toast' // default
})

// Add a request interceptor
axios.interceptors.request.use(function (config) {

    // const baseURL = 'URL_API';
    const baseURL = '';

    if (config.url.includes('http') === false) {
        const newUrlPath = baseURL + config.url;
        config.url = newUrlPath;
    }
    const token = localStorage.getItem('access_token');
    if (token && config.url !== baseURL + '/oauth') {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    if (response.status === 401 || response.status === 403) {
        router.push('login');
        location.reload();
    }
    return response;
}, function (error) {
    if (error.response.status === 401 || error.response.status === 403) {
        router.push('login');
    }
    return Promise.reject(error);
});

Vue.component('login-layout', LoginLayout);
Vue.component('dashboard-layout', DashboardLayout);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');