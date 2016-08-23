/**
 * Created by tangjiang on 16/7/21.
 */

/**
 * 数据请求提示UI
 * (使用artDialog对话框组件)
 * Created by tangjiang on 16/4/7.
 */

let remind = {};

/**
 * 提交数据提示
 * @param msg
 * @param callback
 */
remind.remind_commit = function (msg,callback){
    let d = dialog({
        title: '提示',
        content: msg,
        ok: function () {
            d.remove();
            let o = dialog({
                fixed: true,
                title: '提示',
                content: '<i class="fa fa-spinner fa-spin fa-2x"></i> 正在提交数据...',
                cancel:false
            });
            o.show();
            callback(o);
        },
        cancel: function () {}
    });
    d.show();
};

/**
 * 数据加载提示
 * @param callback
 */
remind.loading = function(callback){
    let o = dialog({
        fixed: true,
        title: '提示',
        content: '<i class="fa fa-spinner fa-spin fa-2x"></i> 正在加载数据...',
        cancel:false
    });
    o.show();
    callback(o);
};

/**
 * 自定提示信息的数据加载提示
 * @param callback
 */
remind.diy_loading = function(msg,callback){
    let o = dialog({
        fixed: true,
        title: '提示',
        content: '<i class="fa fa-spinner fa-spin fa-2x"></i>'+msg,
        cancel:false
    });
    o.show();
    callback(o);
};

/**
 * 可以自定义的确认对话框
 * @param title
 * @param msg
 * @param callback
 */
remind.remind = function (title,msg,callback){
    let d = dialog({
        title: title,
        content: msg,
        ok: function () {
            let o = dialog({
                fixed: true,
                title: '提示',
                content: '<i class="fa fa-spinner fa-spin fa-2x"></i> 正在提交数据...',
                cancel:false
            });
            o.show();
            callback(o);
            d.remove();
        },
        cancel: function () {}
    });
    d.show();
};
export default remind