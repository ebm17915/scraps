import Vue from 'vue'
import router from  '@/js/router.js'
import store from './store'
import App from "@/js/App.vue";
import "../sass/app.scss";

require('./bootstrap');
require('@fortawesome/fontawesome-free/js/all.js');


const app = new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})

export default app
