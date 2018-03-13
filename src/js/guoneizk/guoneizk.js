$.get('http://139.199.192.48:9090/api/getinlanddiscount', function(date) {
    $('#main_list').html(template('main_list-tpl', date.result));
});