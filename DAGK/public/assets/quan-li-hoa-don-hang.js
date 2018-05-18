$("#leftBox input[type='checkbox']").change(function() {
    if ($(this).is(':checked')) {
        if ($(this).attr('name') === 'tinhTrang') {
            $('#tinhTrang').css('display', 'block');
        } else {
            $(this).parent().parent().find("input[type!=checkbox]").css('display', 'block');
        }

        $(this).parent().find('span').css({ 'color': 'black'});
         $(this).parent().parent().css({ 'background-color':'#FFFF80' });
    } else {

        if ($(this).attr('name') === 'tinhTrang') {
            $('#tinhTrang').css('display', 'none');
        } else {
            $(this).parent().parent().find("input[type!=checkbox]").css('display', 'none');
        }
        $(this).parent().find('span').css({ 'font-style': 'normal', 'color': 'black' });
        $(this).parent().parent().css({ 'background-color':'white' });
    }
});
$("#leftBox .inBox>div").hover(function(){
	var t=$(this).find("input[type='checkbox']");
	if(!t.is(':checked')){
	$(this).css('background-color',' #E2E2E2');}
},function(){
	var t=$(this).find("input[type='checkbox']");
	if(!t.is(':checked')){
	$(this).css('background-color',' white');}

});