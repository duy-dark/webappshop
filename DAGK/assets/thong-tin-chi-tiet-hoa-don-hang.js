$("#ttdh button").click(function(){
	var value=$("#ttdh").find("select").val();
	value=parseInt(value);
	if(value===0){

		$('#ttdh>span').attr('class','chuaGiaoHang');
		$('#ttdh>span').html('Chưa giao hàng');
	}
	if(value===1){
		$('#ttdh>span').attr('class','dangGiaoHang');
		$('#ttdh>span').html('Đang giao hàng');
	}
	if(value===2){
		$('#ttdh>span').attr('class','daGiaoHang');
		$('#ttdh>span').html('Đã giao hàng');
	}
	if(value===3){
		$('#ttdh>span').attr('class','daHuy');
		$('#ttdh>span').html('Đã hủy');
	}
})