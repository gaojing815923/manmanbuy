function getSearch(key) {
    var searchStr = location.search.slice(1);
    var searchArr = searchStr.split('&');
    var searchObj = {};
    var tempArr;
    for (var i = 0; i < searchArr.length; i++) {
        tempArr = searchArr[i].split('=');
        searchObj[tempArr[0]] = tempArr[1];
    }
    return key ? searchObj[key] : searchObj;
}
var productid = getSearch('id');
$.get('http://139.199.192.48:9090/api/getmoneyctrlproduct', { productid: productid }, function(date) {
    $('#zk_list').html(template('zk_list_tpl', date.result));
    console.log(date.result);
});