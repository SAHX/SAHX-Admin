/**
 * Created by tangjiang on 16/7/21.
 */

/**
 * 路由配置文件
 *（所有组件均采用异步加载）
 */
export default {
    '/': {
        component: function (resolve) {
            require(['./views/public/page.vue'], resolve)
        }
    },
    '/project': {
        component: function (resolve) {
            require(['./views/project/index.vue'], resolve)
        },
        subRoutes:{
            '/add':{
                component: function (resolve) {
                    require(['./views/project/add.vue'], resolve)
                }
            },
            '/edit/:project_id':{
                component: function (resolve) {
                    require(['./views/project/edit.vue'], resolve)
                }
            },
            '/list':{
                component: function (resolve) {
                    require(['./views/project/list.vue'], resolve)
                }
            }
        }
    },
    '/director': {
        component: function (resolve) {
            require(['./views/director/index.vue'], resolve)
        },
        subRoutes:{
            '/add':{
                component: function (resolve) {
                    require(['./views/director/add.vue'], resolve)
                }
            },
            '/list':{
                component: function (resolve) {
                    require(['./views/director/list.vue'], resolve)
                }
            },
            '/edit':{
                component: function (resolve) {
                    require(['./views/director/edit.vue'], resolve)
                }
            },
        }
    }

    
}