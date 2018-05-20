$("#leftBox input[type='checkbox']").change(function() {
    if ($(this).is(':checked')) {
        if ($(this).attr('name') === 'loaiKhachHang') {
            $('#loaiKhachHang').css('display', 'block');
        } else {
              if($(this).attr('name')==='ngaySinh'){
                $('#tuNgay').css('display', 'block');
                $('#denNgay').css('display', 'block');
            }
            else{
                    if ($(this).attr('name') === 'gioiTinh') {
                        $('#gioiTinh').css('display', 'block');
                    } else {
                        $(this).parent().parent().find("input[type!=checkbox]").css('display', 'block');
                    }
                }
        }

        $(this).parent().parent().css({ 'background-color': '#FFFF80' });
    } else {

        if ($(this).attr('name') === 'loaiKhachHang') {
            $('#loaiKhachHang').css('display', 'none');
        } else {
                 if($(this).attr('name')==='ngaySinh'){
                $('#tuNgay').css('display', 'none');
                $('#denNgay').css('display', 'none');
            }
            else{
                     if ($(this).attr('name') === 'gioiTinh') {
                        $('#gioiTinh').css('display', 'none');
                    } else {
                    $(this).parent().parent().find("input[type!=checkbox]").css('display', 'none');}
                }
        }
        $(this).parent().parent().css({ 'background-color': 'white' });
    }
});
