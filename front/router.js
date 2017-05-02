/**
 * Created by tangjiang on 16/7/21.
 */

/**
 * 路由配置文件
 *（所有组件均采用异步加载）
 */
export default [
    {
        path: '/',
        component: resolve => {
            require.ensure(['./views/public/page.vue'], () => {
                resolve(require('./views/public/page.vue'))
            })
        }
    },
    {
        path: '/project',
        component: resolve => {
            require.ensure(['./views/project/index.vue'], () => {
                resolve(require('./views/project/index.vue'))
            })
        },
        children:[
            {
                path:'/',
                component: resolve => {
                    require.ensure(['./views/project/list.vue'], () => {
                        resolve(require('./views/project/list.vue'))
                    })
                }
            }
        ]
    }
]