$.get('http://139.199.192.48:9090/api/getbaicaijiatitle', function(data) {
    console.log(data);
    // console.log(data.titleId);
    $('#ul').html(template('li', data.result));
    $.get('http://139.199.192.48:9090/api/getbaicaijiaproduct', { titleid: 1 }, function(data) {
        // console.log(data);
        $('#content').html(template('cont', data.result));
    });
    $('.tabs a').on('click', function() {
        var titleid = $(this).attr('data-id');
        //鼠标单机的时候导航栏字是红色的，还有下划线
        $('.tabs a').removeClass('action_a');
        $(this).addClass('action_a');
        $.get('http://139.199.192.48:9090/api/getbaicaijiaproduct', { titleid: titleid }, function(data) {
            // console.log(data);
            $('#content').html(template('cont', data.result));
        });

    })

});



// 返回顶部
$(document).on('scroll', function() {
    function getScrollTop() {
        return document.body.scrollTop;
    }
    var a = document.documentElement.scrollTop + document.body.scrollTop;

    if (getScrollTop() > document.querySelector('.header').offsetHeight) {
        $('#f_top').removeClass('hidn').addClass('show')

    } else {
        $('#f_top').removeClass('show').addClass('hidn')
    }
});

//滑动

my_scroll();
/**
 * 1  手动拖动
 *      a touchstart
 *      b touchmove
 *      c 在移动的时候 要加上以前已经移动了的距离 
 * 2  弹簧效果
 * 3  点击菜单置顶
 */
function my_scroll() {
    // 目标元素
    var ul = document.querySelector(".tabs");

    // 手指按下的x坐标
    var startX;

    // 已经移动了的距离
    var preDistance = 0;
    // 弹簧
    var springs = 100;

    // 往上拖动最大的距离 (没有包括弹簧) 往上滑动的距离是负数
    var maxUp = -(ul.offsetWidth - ul.parentNode.offsetHeight);
    console.log(maxUp);
    // console.log(window.screen.availWidth);
    // alert(maxUp);   
    //绑定事件
    ul.addEventListener("touchstart", function(e) {
        // 判断手指的个数
        if (e.targetTouches.length > 1) {
            return;
        }
        // 记录坐标
        startX = e.targetTouches[0].clientX;

        // 清除过渡
        ul.style.transition = "none";
    });

    // 手指移动事件
    ul.addEventListener("touchmove", function(e) {
        // 判断手指的个数
        if (e.targetTouches.length > 1) {
            return;
        }

        // 记录坐标
        var moveX = e.targetTouches[0].clientX;

        // 移动的距离 加上之前已经移动了的距离
        var distance = moveX - startX + preDistance;

        // 判断下拉的最大距离
        if (distance > springs) {
            distance = springs;
        } else if (distance < maxUp - springs) {
            // 谁的值越小 谁就越在上面 
            distance = maxUp - springs;
        }
        // 设置位移
        ul.style.transform = "translateX(" + distance + "px)";
    });

    // 手指松开
    ul.addEventListener("touchend", function(e) {
        // 判断手指的个数
        if (e.changedTouches.length > 1) {
            return;
        }

        // 记录手指松开的坐标
        var endX = e.changedTouches[0].clientX;

        // 记录这一次移动了的距离 需要加上之前已经移动了的距离 所以是+=
        preDistance += endX - startX;
        // console.log(preDistance);
        // 判断下拉是否超出界限
        if (preDistance > 0) {
            preDistance = 0;
            // 设置ul的位移- 添加过渡
            ul.style.transition = "transform .5s";
            ul.style.transform = "translateX(" + preDistance + "px)";
        } else if (preDistance < maxUp) {
            preDistance = maxUp - 50;
            ul.style.transition = "transform .5s";
            ul.style.transform = "translateX(" + preDistance + "px)";
        }
    });
}


//返回顶部