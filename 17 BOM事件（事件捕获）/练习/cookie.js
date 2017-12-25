/**
 * Created by Administrator on 2016/8/17.
 */
function getCookieByKey(key){
    var arr = document.cookie.split("; ");
    for(var i=0;i<arr.length;i++){
        var arrItem = arr[i].split("=")
        if(arrItem[0] == key){
            return arrItem[1]
        }
    }
}
function setCookie(key,value,days){
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + days);
    document.cookie = key+"="+value+";expires="+oDate;
}
function delCookie(key){
    setCookie(key,"",-1);
}
