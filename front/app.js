/**
 * Created by tangjiang on 16/7/21.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './store/index'
import RouterConfig from './router'
import App from './views/index.vue'
import moment from 'moment'

console.log(moment().format());

Vue.use(VueRouter);
Vue.use(Vuex);
const router = new VueRouter({base: __dirname, routes:RouterConfig});
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});
