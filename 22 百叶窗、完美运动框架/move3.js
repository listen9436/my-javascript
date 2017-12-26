/**
 * Created by Administrator on 2016/8/24.
 */
/**
 * Created by Administrator on 2016/8/24.
 */

//move(target)             //运动框架
//move(obj,target)         //多物体框架
//move(obj,attr,target)    //任意值
//move(obj,attr,target,fn) //链式运动
//move(obj,json)           //多值运动
//move(obj,json,fn)        //完美运动框架


function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj)[attr];
    }
}

function move(obj, json, fn) {//对象，对象的某个属性，目标值
    clearInterval(obj.timer);
    //if(attr =="opacity"){
    //    target*=100;
    //}
    obj.timer = setInterval(function () {
        var bstop = true; //整个动画是否已经结束----所有的值都到达了

        //数组： 可以用  for循环 ,也可以用 for in循环
        //json:   必须用 for in   (json无length可言)

        //  for(var x=0;x<json.length;x++)
        for (x in json) {

            //1，取当前值
            var iCur = 0;
            if (x == 'opacity') {//如果当对象属性为透明度时，
                iCur = parseInt(parseFloat(getStyle(obj, x)) * 100);
            } else {
                iCur = parseInt(getStyle(obj, x)); //currentStyle的版本代替offset
            }

            // 2，计算速度
            var iSpeed = (json[x] - iCur) / 8;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

            // 3，检测停止

            //如果有运动没做完（有值还没到目标值），就不停止
            if (iCur != json[x]) {
                bstop = false;
            }
            if (x == 'opacity') {
                obj.style.filter = 'alpha(opacity:' + (iCur + iSpeed) + ')';
                obj.style.opacity = (iCur + iSpeed) / 100;
            } else {
                obj.style[x] = iCur + iSpeed + "px";
            }

        }
        //如果所有运动都完成了，那么关闭定时器
        if (bstop) {
            clearInterval(obj.timer);

            if (fn)fn();
        }
    }, 30)

}

