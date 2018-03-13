/* 导航菜单栏 使用ajax请求方式 */
// $.ajax({
//     url: 'http://139.199.192.48:9090/api/getindexmenu',
//     type: 'get',
//     success: function(data) {
//         $('.menu_line').html(template('divTemplate', data.result));
//     }
// })

/* 菜单栏 使用GET请求方式 */
$.get('http://139.199.192.48:9090/api/getindexmenu', function(data) {
    $('.menu_line').html(template('divTemplate', data.result));
})


/* 超值折扣推荐列表 使用GET请求方式*/
// $.get('http://139.199.192.48:9090/api/getmoneyctrl', function(data) {
//     $('.merchandise_list').html(template('ulTemplate', data.result));
// })

/* 超值折扣推荐列表 使用ajax请求方式 */
$.ajax({
    url: 'http://139.199.192.48:9090/api/getmoneyctrl',
    type: 'get',
    success: function(data) {
        $('.merchandise_list').html(template('ulTemplate', data.result));
    }
})

// $('#more').on('click', function() {
//     $('.#show').next('').slideToggle();
//     if ($('#show').style.display == "none") {
//         $('#show').style.display = "block";
//     } else {
//         $('#show').style.display = "none";
//     }
// })