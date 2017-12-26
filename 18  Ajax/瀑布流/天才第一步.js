function ajax(method, url, data, fn, fn2) {
    // 1 创建http请求对象
    var oAjax;

    if (window.XMLHttpRequest) {
        oAjax = new XMLHttpRequest;
    } else {
        oAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // 2 连接服务器
    oAjax.open(method, url + "?" + data, true);
    // 3 发送
    if (method == "post") {
        oAjax.send(data);
    } else {
        oAjax.send();
    }
    // 4  处理响应结果
    oAjax.onreadystatechange = function () {
        // on readystate change 当 状态值 改变 的时候发生的事件
        if (oAjax.readyState == 4) {
            //readtState:Ajax的工作状态  有5个值（0初始化,1载入,2载入完成,3解析,4完成）
            if (oAjax.status == 200) { //status：服务器状态  HTTP状态码
                fn(oAjax.responseText);//请求成功函数
                //responseText: ajax请求返回的值就存放到这个属性下面
            } else {
                if (fn2) {//请求失败函数
                    fn2();
                }
            }
        }
    }

}