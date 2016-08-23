/**
 * Created by tangjiang on 16/7/21.
 */
let time_format = function(value){
    let time = parseInt(value);
    if(time == 0) return 0;
    time = time+'';
    if(time.length >11){
        time = parseInt(value)
    }else {
        time = parseInt(value) *1000;
    }
    let date = new Date(time);
    let month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    let currentDate = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    let hh = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let mm = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    let ss = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return date.getFullYear() + '-' + month + '-' + currentDate + ' ' + hh + ':' + mm + ':' + ss;
};
export default time_format