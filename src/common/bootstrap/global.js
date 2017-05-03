/**
 * Created by tangjiang on 16/7/12.
 */

let API_URL = think.config('api_url');

global.oam_request = function(url,body,callback){
    let request = require('request');
    let option = {
        url: API_URL,
        method: "POST",
        json: true,
        headers: {
            "timestamp": new Date().getTime()
        },
        body: body
    };

    request(option, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            callback(body);
        } else {
            console.log('请求出错了:',error);
        }
    });
};


/**
 * 接口请求函数
 * @param self
 * @param cmdid
 * @param params
 */
global.api = async function(self,cmdid,params){
    let common = {};
    common.userid = 0;
    common.userkey = '';
    let body = {};
    body.common = common;
    body.params = params;
    console.log('接口号:',cmdid,'接口参数:',body);
    oam_request(cmdid,body,function(data){
        return self.end(data);
    });
};

/**
 * 接口请求函数(回调)
 * @param self
 * @param cmdid
 * @param params
 */
global.api_callback = function(self,cmdid,params,callback){
    let common = {};
    common.userid = 0;
    common.userkey = '';
    let body = {};
    body.common = common;
    body.params = params;
    console.log('接口号:',cmdid,'接口参数:',body);
    oam_request(cmdid,body,function(data){
        callback(data)
    });
};


/**
 * 获取时间秒数
 * @param time（时间毫秒数,若不传该参数,则返回当前时间的秒数）
 * @returns {number}
 */
global.get_second = function(time) {
    if(think.isEmpty(time)){
        return Math.round((new Date().getTime())/1000);
    }else {
        return Math.round(time/1000);
    }
};


/**
 * 获取真实IP
 * @param req
 * @returns {*}
 */
global.get_ip = function(req) {
    let req_ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
    req_ip = req_ip.split(',');
    return req_ip[0]
};