$(document).ready(function() {
	$("#modalForm").click(function(e){
		e.stopPropagation();
	});
    $("#dangKi").click(function() {
        $("#dangNhapContent").css({ "display": "none" });
        $("#dangNhap").css({ "background-color": "#FFFFFF", "color": "black" });
        $("#modalForm").css({ "height": "470px", "width": "700px" });
        $(this).css({ "color": "red", "background-color": "#F1F1F1", "padding-top": "7px", "padding-bottom": "3px", "padding-right": "20px" });
        $("#dangKiContent").css({ "display": "block" });
       
    });

    $("#dangNhap").click(function() {
        $("#dangKi").css({ "background-color": "#FFFFFF", "color": "black" });
        $("#dangKiContent").css({ "display": "none" });
        $("#dangNhapContent").css({ "display": "block" });
        $("#modalForm").css({ "height": "280px", "width": "400px" });
        $(this).css({ "background-color": "#F1F1F1", "color": "green" });
        
    });

    $("#taiKhoan").click(function() {
        $(".wrapModalForm").css({ "display": "block" });
        $("#modalForm form")[0].reset();
        $("#modalForm form")[1].reset();
        $("#dangKi").css({ "background-color": "#FFFFFF", "color": "black" });
        $("#dangKiContent").css({ "display": "none" });
        $("#dangNhapContent").css({ "display": "block" });
        $("#modalForm").css({ "height": "280px", "width": "400px" });
        $("#dangNhap").css({ "background-color": "#F1F1F1", "color": "green" });
    });

    $("#closeTaiKhoan").on('click', function() {
        $(this).closest(".wrapModalForm").css({ "display": "none" });
    });
    $(".wrapModalForm").click(function() {
        $(".wrapModalForm").css({ "display": "none" });
    });
});