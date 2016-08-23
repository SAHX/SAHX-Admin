/**
 * Created by tangjiang on 16/8/7.
 */

/**
 * oam前端页面基础请求接口
 */

'use strict';

import Base from './base.js';

export default class extends Base {
    oamRequestAction(){
        let cmdid = this.post('cmdid');
        let params = JSON.parse(this.post('params'));
        api(this, cmdid, params);
    }

}