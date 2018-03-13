var tol = 0;

function count(pageNum) {
    $.get('http://139.199.192.48:9090/api/getmoneyctrl?pageid=' + pageNum, function(date) {
        $('#haitao_list').html(template('haitao_liat_tpl', date.result));
    });
}



// 上一页  下一页

$.get('http://139.199.192.48:9090/api/getmoneyctrl', function(date) {
    $('#select_list').html(template('pageControl', { 'pagesize': date.pagesize, 'totalCount': Math.ceil(date.totalCount / date.pagesize) }));
    var num = Math.ceil(date.totalCount / date.pagesize);
    tol = num;
    for (var i = 1; i <= num; i++) {
        $('#page').append('<option value="' + i + '">' + i + '/' + num + '</option>');
        // alert(num);
    }


});

// alert("分页");

$(document).on('change', '#page', function() {
    var pageNum = $('#page option:selected').val();
    $.get('http://139.199.192.48:9090/api/getmoneyctrl?pageid=' + pageNum, function(date) {
        $('#select_list').html(template('pageControl', { 'pagesize': date.pagesize, 'totalCount': Math.ceil(date.totalCount / date.pagesize) }));
        var num = Math.ceil(date.totalCount / date.pagesize);
        count(pageNum);
        for (var i = 1; i <= num; i++) {
            if (i == pageNum) {
                $('#page').append('<option value="' + i + '" selected>' + i + '/' + num + '</option>');
            } else {
                $('#page').append('<option value="' + i + '">' + i + '/' + num + '</option>');
            }

            // alert(num);
        }
        // $('#page option:selected').val() = pageNum;

    });
});


$(document).on('click', '#shang', function() {
    var pageNum = $('#page option:selected').val();
    if (pageNum == 1) {
        alert("已经是第一页了！");
    } else {
        pageNum = pageNum - 1;
    }
    $.get('http://139.199.192.48:9090/api/getmoneyctrl?pageid=' + pageNum, function(date) {
        $('#select_list').html(template('pageControl', { 'pagesize': date.pagesize, 'totalCount': Math.ceil(date.totalCount / date.pagesize) }));
        var num = Math.ceil(date.totalCount / date.pagesize);
        count(pageNum);
        for (var i = 1; i <= num; i++) {
            if (i == pageNum) {
                $('#page').append('<option value="' + i + '" selected>' + i + '/' + num + '</option>');
            } else {
                $('#page').append('<option value="' + i + '">' + i + '/' + num + '</option>');
            }

            // alert(num);
        }
        // $('#page option:selected').val() = pageNum;

    });
});


$(document).on('click', '#xia', function() {
    var pageNum = $('#page option:selected').val();
    // alert(tol);
    if (pageNum == tol) {
        alert("已经是最后一页了！");
    } else {
        pageNum = parseInt(pageNum) + 1;
        // alert(pageNum);
    }
    // pageNum = pageNum + 1;
    $.get('http://139.199.192.48:9090/api/getmoneyctrl?pageid=' + pageNum, function(date) {
        $('#select_list').html(template('pageControl', { 'pagesize': date.pagesize, 'totalCount': Math.ceil(date.totalCount / date.pagesize) }));
        var num = Math.ceil(date.totalCount / date.pagesize);
        count(pageNum);
        for (var i = 1; i <= num; i++) {
            if (i == pageNum) {
                $('#page').append('<option value="' + i + '" selected>' + i + '/' + num + '</option>');
            } else {
                $('#page').append('<option value="' + i + '">' + i + '/' + num + '</option>');
            }

            // alert(num);
        }
        // $('#page option:selected').val() = pageNum;

    });
});