/**
 * Created by tangjiang on 16/7/30.
 */
import * as types from './mutation-types'

export const saveOamUser = ({ commit }, user_info) => { // 存储OAM用户信息
    commit(types.SAVE_OAM_USER, user_info);
};




