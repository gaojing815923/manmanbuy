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
var productId = getSearch('id');
$.get('http://139.199.192.48:9090/api/getdiscountproduct', { productid: productId }, function(date) {
    $('#zhekou_list').html(template('zhekou_list_tpl', date.result));
    console.log(date.result);
});

// $.get('http://139.199.192.48:9090/api/getinlanddiscount', { productid: productId }, function(date) {
//     $('#zhekou_list').html(template('zhekou_list_tpl', date.result));
//     console.log(date.result);
// });