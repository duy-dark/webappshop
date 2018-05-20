$(document).ready(function() {
  $('.navbar a.dropdown-toggle').on('click', function(e) {
     var $el = $(this);
     var $parent = $(this).offsetParent(".dropdown-menu");
     $(this).parent("li").toggleClass('open');
     if(!$parent.parent().hasClass('nav')) {
          $el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
     }
     $('.nav li.open').not($(this).parents("li")).removeClass("open");
     return false;
    });
});

$("#goTop").on("click",function(){
document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
$(window).scroll(function(){
 if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        $("#goTop").css({"display":"block"});
    } else {
        $("#goTop").css({"display":"none"});
    }
});
