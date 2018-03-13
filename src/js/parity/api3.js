var productId = getSearch('productid');
var productname = getSearch('index');
console.log(productId);
console.log(productname);
$.get('http://139.199.192.48:9090/api/getproduct',{productid:productId},function(data){
    console.log(data);
    $("#pic").html(template('tpl',data.result));
    $("#mt").html(template('md',data.result));
    $("#lian").html(template('liandong',data.result));
    $("#appl").html(productname+"&nbsp"+">");
});
$.get('http://139.199.192.48:9090/api/getproductcom',{productid:productId},function(data){
    console.log(data);
    $('#table').html(template('pinglun',data.result));
});

function getSearch(key) {
    var url = window.location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            //就是这句的问题
            theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
        }
    }
    return key ? theRequest[key] : theRequest;
};