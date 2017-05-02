/**
 * Created by tangjiang on 2017/5/2.
 */
export default {
    install(Vue, axios){
        Vue.prototype.$api = (url, params, callback) => {
            axios.post('/common/oam_request', {url: url, params: params}).then(response => {
                callback(response.data)
            }).catch(error => {
                callback(error)
            })
        };
        Vue.prototype.$http = axios;
    }
}