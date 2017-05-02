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
        setTimeout(function(){
            return self.json({
                error_code:0,
                message:'success!',
                data:{
                    test:'这只是模拟数据返回'
                }
            })
        },2000)
    }
    fetchOamUserAction(){
        let type = this.post('type');
        if(type === 1){
            let data = {
                name:'SAHX',
                avatar:'/static/adminlet/img/user7-128x128.jpg',
                job:'前端开发工程师'
            };
            return this.json({
                error_code:0,
                message:'success!',
                data:{
                    name:'SAHX',
                    avatar:'/static/adminlet/img/user7-128x128.jpg',
                    job:'前端开发工程师'
                }
            })
        }else {
            return this.json({
                error_code:1,
                message:'参数缺失：type',
                data:{}
            })
        }

    }
}