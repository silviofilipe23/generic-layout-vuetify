import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';

import LoginLayout from './Layouts/Login.vue';
import DashboardLayout from './Layouts/Dashboard.vue';

import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(Vuetify, {
    iconfont: 'md',
    theme: {
        primary: colors.red.darken1, // #E53935
        secondary: colors.red.lighten4, // #FFCDD2
        accent: colors.indigo.base // #3F51B5
    }
});

Vue.component('login-layout', LoginLayout);
Vue.component('dashboard-layout', DashboardLayout);


Vue.config.productionTip = false;



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');