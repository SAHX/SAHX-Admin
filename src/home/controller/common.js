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
        let url = this.post('url');
        let params = this.post('params');
        api(this, url, params);
    }

}