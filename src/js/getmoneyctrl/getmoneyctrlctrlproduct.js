var flg1 =location.href.indexOf("?") 
var flg =location.href.substring(flg1+1,flg1+3);

console.log(flg);
$.ajax({
    url: 'http://139.199.192.48:9090/api/getmoneyctrlproduct',
    type: 'get',
    data:{
        productid:flg,
    },  
    success: function(data) {
        // var strings =data.result[0].productImg2
        // var str=strings.match(/\"(.*?)\"/);;
        // data.result.str =str[1];
        console.log(data);
        $('#getmoney-tow').html(template('getmoney-tow-tpl', data.result));

    }
});


// setTomeout(function(){
//     var rem = document.querySelector('.con');
//     console.log(rem);
// },20);

var t=setTimeout(function(){
    var rem = document.querySelector('.con').children[0];
    $(rem).removeClass('clearfix')
    console.log(rem);
},200)
