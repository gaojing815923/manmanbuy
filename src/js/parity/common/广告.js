var app = document.querySelector(".app_bar");
var btn = document.querySelector("#out");
btn.onclick = function(){
  app.style.display = "none";
};

//返回顶部
//$("#toTop").click(function() {
//  $('body,html').scrollTop(0);
//});
 $('#toTop').on('click', function() {
 $('body,html').animate({ scrollTop: 0 }, 500);
 })
