// 取出上个页面在localStorage保存的值
var yhname = localStorage["yhid"];
var yhtt = localStorage["yhtt"];
// 请求数据，渲染模板引擎
$.get('http://139.199.192.48:9090/api/getcouponproduct?couponid=' + yhname, function(data) {
    $('#list').html(template('coupon-list', data.result));
    // 声明一个数组，用来保存轮播图图片标签字符串
    var searchStr = [];
    // 便利获取到的参数，取出每个img标签，保存到新数组中
    for (var i = 0; i < data.result.length; i++) {
        var img = data.result[i].couponProductImg;
        searchStr[i] = img;
    };
    // 事件委托，监控li标签点击事件，每次点击都会打开轮播图
    $(document).on('click', '.chlik-me', function() {
        // 渲染轮播图
        $('#carousel').html(template('carousel-list', searchStr));
        // 获取当前点击的图片data-i属性，用来判断轮播图开始的索引
        var id = $(this).attr("data-i");
        // swiper插件的初始设置
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            initialSlide: id,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
        });
        // 每次点击都将轮播图层级提高，展示出来
        $('.col-bg').css('z-index', '5');

    });
});
// 改变页面的标题
$('#yhj').text(yhtt + '优惠卷');
$('#foot_id').text(yhtt + '优惠卷');
// 每次点击轮播图黑色背景区域都隐藏轮播图
$(document).on('click', '.col-bg', function() {
    $('.col-bg').css('z-index', '-1');
});
// 每次点击轮播图图片区域都不会隐藏轮播图，注意要阻止事件冒泡
$('.col-zt').on("click", function() {
    $('.col-bg').css('z-index', '5');
    event.stopPropagation();
});
// 点击回到顶部会回到屏幕顶部
$('#toTop').on('click', function() {
    $('body,html').animate({ scrollTop: 0 }, 500);
})