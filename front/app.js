/**
 * Created by tangjiang on 16/7/21.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueValidator from 'vue-validator'
import Router from './router'
import App from './views/index.vue'
import time_format from './filters/time_format'
import time_format_y_m_d from './filters/time_format_y_m_d'
import {oam_req} from './util/base_request'

//注册时间格式过滤器
Vue.filter('time_format', time_format);
Vue.filter('time_format_y_m_d', time_format_y_m_d);

Vue.use(VueRouter);
Vue.use(VueValidator);

window.router = new VueRouter();
//全局注册接口请求函数
window.oam_req = oam_req;
router.map(Router);
router.start(App, '#app');