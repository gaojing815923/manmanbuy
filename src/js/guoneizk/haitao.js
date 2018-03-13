$.get('http://139.199.192.48:9090/api/getmoneyctrl', function(date) {
    $('#haitao_list').html(template('haitao_liat_tpl', date.result));
});
// alert("内容");