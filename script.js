// Smooth page transitions with jQuery
$(document).ready(function(){
  $(".nav-link").click(function(e){
    e.preventDefault();
    let target = $(this).attr("href");
    $("body").fadeOut(400, function(){
      window.location.href = target;
    });
  });
});
