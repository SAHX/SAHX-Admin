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
            require.ensure(['./views/index.vue'], () => {
                resolve(require('./views/index.vue'))
            })
        }
    }
]