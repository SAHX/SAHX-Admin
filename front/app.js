/**
 * Created by tangjiang on 16/7/21.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterConfig from './router'
import App from './views/index.vue'
import time_format from './filters/time_format'
import time_format_y_m_d from './filters/time_format_y_m_d'
import moment from 'moment'
console.log(moment().format());
//注册时间格式过滤器
Vue.filter('time_format', time_format);
Vue.filter('time_format_y_m_d', time_format_y_m_d);

Vue.use(VueRouter);
const router = new VueRouter({base: __dirname, RouterConfig});
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});