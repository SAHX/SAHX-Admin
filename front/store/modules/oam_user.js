/**
 * Created by tangjiang on 16/7/30.
 */
import * as types from '../mutation-types'

// initial state
const state = {
    user_info:{}
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