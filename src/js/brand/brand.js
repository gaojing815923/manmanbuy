// 请求数据，动态渲染模板
$.get('http://139.199.192.48:9090/api/getbrandtitle', function(data) {
    $('#brand-tpl').html(template('brand', data.result));
});
// 将子页面需要的参数通过localStorage保存下来
$(document).on('click', '.ph-text', function() {
    localStorage.phid = $(this).attr("data-id");
    localStorage.phtt = $(this).attr("data-categoryId");
    localStorage.phname = $(this).attr("data-name").slice(0, $(this).attr("data-name").indexOf("十"));
});
// 回到顶部事件
$('#toTop').on('click', function() {
    $('body,html').animate({ scrollTop: 0 }, 500);
})