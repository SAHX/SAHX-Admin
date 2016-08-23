/**
 * Created by tangjiang on 16/8/23.
 */
/**
 * 模拟接口
 */

'use strict';

import Base from './base.js';

export default class extends Base {
    indexAction(){
        let self = this;
        console.log(1212121212121)
        setTimeout(function(){
            return self.json({
                common:{
                    code:0,
                    message:'success!'
                },
                data:{}
            })
        },3000)
    }

}