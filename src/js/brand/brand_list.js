// 事件委托，每次当排行版被点击的时候触发
$(document).on('click', '.ph-chlik', function() {
    // 拿到触发元素的值，保存在localStorage里面，方便在评论区模板里面使用
    localStorage.phproductid = $(this).attr("data-productid");
    localStorage.phimg = $(this).attr("data-img");
    var phproductid = localStorage["phproductid"];
    var phimg = localStorage["phimg"];
    // 获取数据
    $.get('http://139.199.192.48:9090/api/getproductcom', { productid: phproductid }, function(data) {
        // 获取传入的img参数，将评论区所有图片改变
        data.result.img = phimg;
        // 通过循环改变评论区的星星参数
        for (var i = 0; i < data.result.length; i++) {
            data.result[i].width = Math.floor(Math.random() * 5) * 18 + 18;
        };
        // 渲染评论区模板
        $('#brand-list-pl-tpl').html(template('brand-list-pl', data.result));
    });
});
// 获取保存在localStorage的值
var phid = localStorage["phid"];
var phtt = localStorage["phtt"];
var phproductid = localStorage["phproductid"] ? localStorage["phproductid"] : 0;
var phname = localStorage["phname"];
// 获取数据，渲染十大排行榜
$.get('http://139.199.192.48:9090/api/getbrand?brandtitleid=' + phid, function(data) {
    $('#brand-list-pp-tpl').html(template('brand-list-pp', data.result));
});
// 获取数据，渲染销量排行榜
$.get('http://139.199.192.48:9090/api/getbrandproductlist', { brandtitleid: phid, pagesize: 5 }, function(data) {
    $('#brand-list-xl-tpl').append(template('brand-list-ph', data.result));
    // 保存销量排行榜第一条图片，用于刚开始还没有触发点击事件时候，评论区的默认图片
    localStorage.phimg = $(".ph-chlik").eq(0).attr("data-img");
    // 判断有没有传入图片，没有图片说明，没有参数，就不渲染模板，给出提示
    if (localStorage.phimg != "undefined") {
        $.get('http://139.199.192.48:9090/api/getproductcom', { productid: phproductid }, function(data) {
            data.result.img = localStorage.phimg;
            $('#brand-list-pl-tpl').append(template('brand-list-pl', data.result));
        });
    } else {
        $('#brand-list-pl-tpl').html("<p style='color:#ff00af;font-size:24px;text-align:center;line-height:40px;'>等着你来评论哦</p>");
    }
});
// 这个是重置localStorage。虽然没卵用
localStorage.removeItem(["phproductid", "phimg"]);
// 回到顶部事件
$('#toTop').on('click', function() {
    $('body,html').animate({ scrollTop: 0 }, 500);
});

// 对应ID改变页面标题
$(".rank0").html(phname + "牌子哪个好");
$(".rank1").html(phname + "牌子哪个好");
$(".rank2").html(phname + "产品销量排行");
$(".rank3").html(phname + "最有用的用户评论");