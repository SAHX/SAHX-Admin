import remind from './remind.js'
let loading = remind.loading;
/**
 * 请求函数
 * @param url 接口
 * @param data 参数
 * @param callback
 */
export const oam_req = function (cmdid,data,callback){
    loading(function(e){
        $.ajax({
            url:'/common/oam_request',
            type:'post',
            dataType:'json',
            data:{
                cmdid:cmdid,
                params:JSON.stringify(data)
            },
            success:function(data){
                e.remove();
                callback(data);
            }
        })
    })

};



