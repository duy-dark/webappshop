$(document).ready(function(){
	$("#passwordDk2").keyup(function(){
		
		if($("#passwordDk").val()!==$("#passwordDk2").val() && $(this).val().length>0){
				$("#noMatch").css('display','block');
		}
		if($(this).val().length===0 || $("#passwordDk").val()===$("#passwordDk2").val()){
				$("#noMatch").css('display','none');
		}

	});

	$("#passwordDk").keyup(function(){
	
		if($("#passwordDk2").val().length>0 && $("#passwordDk").val()!==$("#passwordDk2").val()){
				$("#noMatch").css('display','block');
		}
		if($("#passwordDk2").val().length>0 && $("#passwordDk").val()===$("#passwordDk2").val()){
				$("#noMatch").css('display','none');
		}

	});

	$('form').submit(function(){
		if($("#noMatch").css('display')==='block'){
			alert('Vui lòng nhập confirm password đúng!')
			return false;
		}
		return true;
		
	});
});