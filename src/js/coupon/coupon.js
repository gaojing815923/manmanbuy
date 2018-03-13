// 请求数据，渲染模板引擎
$.get('http://139.199.192.48:9090/api/getcoupon', function(data) {
    $('#coupon-profile').html(template('coupon', data.result));
});
// 保存下一个页面需要传入的数据，点击的时候获取当前页面的对应的标签里面保存的值
$(document).on('click', '.tb-text', function() {
    localStorage.yhid = $(this).attr("value");
    localStorage.yhtt = $(this).attr("data_tt");
})