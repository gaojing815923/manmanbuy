$.get('http://139.199.192.48:9090/api/getsitenav', function(date) {
    $('.class_link').html(template('nav_list_tpl', date.result));
});