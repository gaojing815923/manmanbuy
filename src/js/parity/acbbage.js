$.get('http://139.199.192.48:9090/api/getbaicaijiatitle', function(data) {
    console.log(data);
    $('#ul').html(template('li', data.result));
});

// $.get('http://139.199.192.48:9090/api/getbaicaijiatitle',{titleid:abc},function(data){
//     console.log(data);
//     $('#content').html(template('cont',data.result));
// });



// function getSearch(key) {
//     var searchStr = location.search.slice(1);
//     var searchArr = searchStr.split('&');
//     var searchObj = {};
//     var tempArr;
//     for (var i = 0; i < searchArr.length; i++) {
//         tempArr = searchArr[i].split('=');
//         searchObj[tempArr[0]] = tempArr[1];
//     }  
//     return key ? searchObj[key] : searchObj;
// }
// var titleid = getSearch('id');
// $.get('http://139.199.192.48:9090/api/getbaicaijiaproduct', function(data) {
//     console.log(data);
//     $('#content').html(template('cont', data.result));
// });||||||| .r66
$.get('http://139.199.192.48:9090/api/getbaicaijiaproduct', { titleid: abc }, function(data) {
    console.log(data);
    $('#content').html(template('cont', data.result));
});

$.get('http://139.199.192.48:9090/api/getbaicaijiaproduct', { titleid: 1 }, function(data) {
    console.log(data);
    $('#content').html(template('cont', data.result));
});