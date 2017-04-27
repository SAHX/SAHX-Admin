/**
 * Created by tangjiang on 16/7/30.
 */
import * as types from '../mutation-types'

// initial state
const state = {
    user_info:{
        name:'SAHX',
        avatar:'/static/adminlet/img/user7-128x128.jpg',
        job:'前端开发工程师'
    }
};

// mutations
const mutations = {
    [types.SAVE_OAM_USER] (state, user_info) {
        state.user_info = user_info
    }
};

export default {
    state,
    mutations
}