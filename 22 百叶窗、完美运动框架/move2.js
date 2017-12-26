/**
 * Created by Administrator on 2016/8/24.
 */
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj)[attr];
    }
}

function move(obj, attr, target, fn) {//对象，对象的某个属性，目标值
    clearInterval(obj.timer);
    //if(attr =="opacity"){
    //    target*=100;
    //}
    obj.timer = setInterval(function () {

        //1，取当前值
        var iCur = 0;
        if (attr == 'opacity') {//如果当对象属性为透明度时，
            iCur = parseInt(parseFloat(getStyle(obj, attr)) * 100);
        } else {
            iCur = parseInt(getStyle(obj, attr)); //currentStyle的版本代替offset
        }

        // 2，计算速度
        var iSpeed = (target - iCur) / 8;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

        // 3，检测停止
        if (iCur == target) {
            clearInterval(obj.timer);

            if (fn)fn();

        } else {

            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opacity:' + (iCur + iSpeed) + ')';
                obj.style.opacity = (iCur + iSpeed) / 100;

            } else {
                obj.style[attr] = iCur + iSpeed + "px";
            }

        }
    }, 30)
}
