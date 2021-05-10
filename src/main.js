import Vue from 'vue'
import App from './App.vue'
import router from './Router';
import vuetify from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';


Vue.config.productionTip = false

new Vue({

    render: h => h(App),
    router,
    vuetify

}).$mount('#app')