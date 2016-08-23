/**
 * Created by tangjiang on 16/7/30.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import oam_user from './modules/oam_user'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        oam_user
    }
})