/**
 * Created by tangjiang on 16/7/21.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VeeValidate, {Validator} from 'vee-validate';
import { sync } from 'vuex-router-sync'
import store from './store/index'
import RouterConfig from './router'
import axios from 'axios'
import api from './lib/api'
import App from './views/index.vue'
import moment from 'moment'
import zh_cn from 'vee-validate/dist/locale/zh_CN'

console.log(moment().format());

Vue.use(api,axios); // 自定义插件, 其内有全局请求属性方法：api (用法：this.$api(url, params, callback)) 和 axios (用法：this.$http.get 或 post)
Vue.use(VueRouter);
Vue.use(Vuex);

Validator.addLocale(zh_cn); // 加载本地化语言文件
Vue.use(VeeValidate,{locale: 'zh_CN'}); // 设置为中文

const router = new VueRouter({base: __dirname, routes:RouterConfig});
sync(store, router);
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});
