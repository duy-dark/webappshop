$("#leftBox input[type='checkbox']").change(function(){
	if($(this).is(':checked')){
		if($(this).attr('name')==='tinhTrang'){
			$('#tinhTrang').css('display','block');
		}
		else{
			$(this).parent().parent().find("input[type!=checkbox]").css('display','block');
		}

		$(this).parent().find('span').css({'font-style':'italic','color':'#18A15F'})

	}
	else{
		
	if($(this).attr('name')==='tinhTrang'){
			$('#tinhTrang').css('display','none');
		}
		else{
			$(this).parent().parent().find("input[type!=checkbox]").css('display','none');
		}
		$(this).parent().find('span').css({'font-style':'normal','color':'black'})
		}
});