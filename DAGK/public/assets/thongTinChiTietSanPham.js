$(".slide-image img").on("click",function() {
    var image_html = $(this).attr("src");
    $(".sample-image img").attr("src", image_html);
    $(this).addClass("border-red-visited");
    var n = $(this).index();
    $(".slide-image img").each(function() {
        if ($(this).index() !== n) {
            $(this).removeClass("border-red-visited");
        }
    });

});

$(".luotThich").on("click",function() {
    var number = parseInt($(".luotThich span").text());
    number++;
    $(".luotThich span").text("" + number);
});
$(".soLuong button").on("click",function() {
    var number = parseInt($(".soLuong span").text());
    if ($(this).text() === '+') {
        number++;
    }
    if ($(this).text() == '-') {
        if (number > 0) { number--; }
    }
    $(".soLuong span").text('' + number);
});
$(".menu-dgsp").css('border-bottom', '2px solid white');
$(".menu-dgsp").css('color', 'black');
$("#danhGiaSanPham").css('display', 'none');
$(".menu-ttct").on("click",function() {
    $(".menu-ttct").css('border-bottom', '2px solid #FF5722');
    $(".menu-ttct").css('color', '#FF5722');
    $(".menu-dgsp").css('border-bottom', '2px solid white');
    $(".menu-dgsp").css('color', 'black');
    $("#danhGiaSanPham").css('display', 'none');
    $("#thongTinChiTiet").css('display', 'block');

});
$(".menu-dgsp").on("click",function() {
    $(".menu-dgsp").css('border-bottom', '2px solid #FF5722');
    $(".menu-dgsp").css('color', '#FF5722');
    $(".menu-ttct").css('border-bottom', '2px solid white');
    $(".menu-ttct").css('color', 'black');
    $("#danhGiaSanPham").css('display', 'block');
    $("#thongTinChiTiet").css('display', 'none');
});
$(".luotThich").hover(function() {
    $(".luotThich img").attr('src', 'assets/image/heart2.png');
    $(".luotThich").css({ "color": "red" });
}, function() {
    $(".luotThich img").attr('src', 'assets/image/heart.png');
    $(".luotThich").css({ "color": "black" });
});
$(window).scroll(function(){
 if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        $("#goTop").css({"display":"block"});
    } else {
        $("#goTop").css({"display":"none"});
    }
});

$("#goTop").on("click",function(){
document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
