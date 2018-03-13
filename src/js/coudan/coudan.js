var index1 =1;
var index2 =1;
var index3 =1;
var areaid=0;
var shopid=0;
ajax1();
ajax2();
$('#dropdownMenu1').click(function(e){
    $('#list1,#list2,#list3').css('display','none')
    // document.querySelector("#dropdownMenu1").children[1].children[0].innerHTML=values;
    // console.log(document.querySelector("#dropdownMenu1").children[1])
    var list=e.target.parentElement.children[1];
    var t=setTimeout(function(){
        var lists = document.querySelector("#list").children[0].children[0].children[0];
        $(lists).removeClass('hidden')
    },200)
    
    if(index1==1){
        $('#list').css('display','');
        $(list).removeClass('glyphicon glyphicon-chevron-down');
        $(list).addClass('glyphicon glyphicon-chevron-up');
        
        ajax1();
        index1++;
        index2=1;
        index3=1;
    }else{
        $(list).removeClass('glyphicon glyphicon-chevron-up');
        $(list).addClass('glyphicon glyphicon-chevron-down');
        $('#list').css('display','none');
        index1=1;
        index2=1;
        index3=1;
    }
})

$('#dropdownMenu2').click(function(e){
    $('#list,#list2,#list3').css('display','none')
    var list=e.target.parentElement.children[1];
    console.log(list)
    
    
    var t=setTimeout(function(){
        var lists = document.querySelector("#list1").children[0].children[0].children[0];
        console.log(lists);
        $(lists).removeClass('hidden')
    },200)

    if(index2==1){
        $('#list1').css('display','');
        $(list).removeClass('glyphicon glyphicon-chevron-down');
        $(list).addClass('glyphicon glyphicon-chevron-up');
        ajax2()
        index2++;
        index1=1;
        index3=1;
    }else{
        $(list).removeClass('glyphicon glyphicon-chevron-up');
        $(list).addClass('glyphicon glyphicon-chevron-down');
        $('#list1').css('display','none');
        index1=1;
        index2=1;
        index3=1;
    }
})
$('#dropdownMenu3').click(function(){
    $('#list,#list1,#list3').css('display','none');
    if(index3==1){
        $('#list2').css('display','');
        index3++;
        index2=1;
        index1=1;
    }else{
        $('#list2').css('display','none');
        index1=1;
        index2=1;
        index3=1;
    }
})
$(function(){
    $("#list").on('click',function(e){
        var lists = document.querySelector("#list");
       
       for(var i=0;i<3;i++){
        var aaa =lists.children[i].children[0].children[0];
        $(aaa).addClass('hidden');
       }
       var values =e.target.innerText;
       document.querySelector("#tab").children[0].children[0].innerHTML=values;
        var list =e.target.children[0];
        shopid=list.parentElement.parentElement.id;
        ajax(shopid,areaid);
        console.log(shopid);
        $(list).removeClass('hidden');
        console.log(lists);
        $(lists).css('display','none');
    }) ;
 });

 $(function(){
    $("#list1").on('click',function(e){
        var lists = document.querySelector("#list1");
       for(var i=0;i<7;i++){
        var aaa =lists.children[i].children[0].children[0];
        $(aaa).addClass('hidden');
       }
       var values =e.target.innerText.substr(0,2);
       console.log(values);
       document.querySelector("#tab").children[1].children[0].innerHTML=values;
        var list=e.target.children[0];
        areaid=list.parentElement.parentElement.id;
        console.log(areaid);
        ajax(shopid,areaid);
        $(list).removeClass('hidden');
        $(lists).css('display','none');
    }) ;
 });

 ajax(shopid,areaid);
 function ajax(shopid,areaid){
     var shopid=shopid||0;
     var areaid=areaid||0;
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getgsproduct?shopid='+shopid+'&areaid='+areaid,
        type: 'get',
        success: function(data) {
            $('#shop-list').html(template('shop-one-list', data.result));
        }
    });
}


function ajax1(){
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getgsshop',
        type: 'get',
        success: function(data) {
            $('#list').html(template('shop-one-tpl', data.result));
        }
    });
}
function ajax2(){
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getgsshoparea',
        type: 'get',
        data:{
        },  
        success: function(data) {
            $('#list1').html(template('area-one-tpl', data.result));
        }
    });
}






