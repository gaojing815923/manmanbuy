$.ajax({
    url: 'http://139.199.192.48:9090/api/getmoneyctrl',
    type: 'get',
    data:{
        pageid :1,
    },  
    success: function(data) {
        $('#list-momey').html(template('getmoney-one-tpl', data.result));
        data.sum = Math.ceil(data.totalCount/data.pagesize);
        $('#fenye').html(template('fenye-one-tpl', data));
    }
});

function ajax(index){
    var index =index||1;
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getmoneyctrl',
        type: 'get',
        data:{
            pageid :index,
        },  
        success: function(data) {
            $('#list-momey').html(template('getmoney-one-tpl', data.result));
        }
    });
}

$(document).ready(function(){
    $("#fenye").change(function(){
        var index =$('#fenye').val();

        console.log(index);
        $('#fenye option:eq('+(index-1)+')').text(index+"/15");
        ajax(index);
     });
});


$("#fenye-next").click(function(){
    var index =document.querySelector("#fenye").value;
    if(index <15){
        index++;
        for(let i=0;i<16;i++){
            $('#fenye option:eq('+i+')').removeProp('selected');
        }
        $('#fenye option:eq('+(index)+')').text(index+"/15");
        $('#fenye option:eq('+(index-1)+')').prop('selected','selected');
        
        ajax(index);
        console.log(index);
    }
});
$("#fenye-previous").click(function(){
    var index =document.querySelector("#fenye").value;
    console.log(index);
    // var index =$('#fenye').val();
    console.log($("#fenye-previous"));
    if(index >1){
        ajax(--index);
        // $('#fenye').attr("selected","");
        
       for(let i=0,j=1;i<15;i++,j++){
        $('#fenye option:eq('+i+')').removeProp('selected');
        if(index== j){
           
        }
       }
       $('#fenye option:eq('+(index-1)+')').prop('selected','selected');
    }
});


      

