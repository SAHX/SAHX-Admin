/**
 * Created by tangjiang on 16/7/21.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './store/index'
import RouterConfig from './router'
import axios from 'axios'
import api from './lib/api'
import App from './views/index.vue'
import moment from 'moment'

console.log(moment().format());

Vue.use(api,axios); // 自定义插件, 其内有全局请求属性方法：api (用法：this.$api(url, params, callback)) 和 axios (用法：this.$http.get 或 post)
Vue.use(VueRouter);
Vue.use(Vuex);
const router = new VueRouter({base: __dirname, routes:RouterConfig});
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});
