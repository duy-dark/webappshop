var db = require('../fn/db');
var config = require('../config/config');

//quan li hang hoa
exports.loadAllPro = () => {
	var sql ='select *, from sanpham'
	return db.load(sql);
}

exports.loadidpro = id => {
	var sql = `select * from sanpham where MASP = ${id} `;
	return db.load(sql);
}

exports.del = id => {
	var sql = `delete from sanpham where MASP = ${id} `;
	return db.load(sql);
}

exports.updateSP = (sanpham, id) => {
	var sql =  `update sanpham set TENSP='${sanpham.TENSP}',NSX='${sanpham.NSX}',LOAI='${sanpham.LOAI}',DL_RAM='${sanpham.DL_RAM}',L_RAM='${sanpham.L_RAM}',TD_RAM='${sanpham.TD_RAM}',SL_RAM='${sanpham.SL_RAM}',LD_DIACUNG='${sanpham.LD_DIACUNG}',DL_DIACUNG='${sanpham.DL_DIACUNG}',DOHOA='${sanpham.DOHOA}',KT_MANHINH='${sanpham.KT_MANHINH}',CN_MANHINH='${sanpham.CN_MANHINH}',CU_MANHINH='${sanpham.CU_MANHINH}',AMTHANH='${sanpham.AMTHANH}',DIAQUANG='${sanpham.DIAQUANG}',GIAOTIEP='${sanpham.GIAOTIEP}',WIFI_MANG='${sanpham.WIFI_MANG}',KNKD_MANG='${sanpham.KNKD_MANG}',CARDREADER='${sanpham.CARDREADER}',WEBCAM='${sanpham.WEBCAM}',HDH='${sanpham.HDH}',PIN='${sanpham.PIN}',THONGTINKHAC_CBVT='${sanpham.THONGTINKHAC_CBVT}',THONGTINKHAC_DBP='${sanpham.THONGTINKHAC_DBP}',sanpham.THONGTINKHAC_PKKT='${sanpham.THONGTINKHAC_PKKT}',KICHTHUOC='${sanpham.KICHTHUOC}',TRONGLUONG='${sanpham.TRONGLUONG}',CHATLIEU='${sanpham.CHATLIEU}',BAOHANH='${sanpham.BAOHANH}',GIAMUA='${sanpham.GIAMUA}',CPU='${sanpham.CPU}',SOLUONGSPCON='${sanpham.SOLUONGSPCON}',GIABAN='${sanpham.GIABAN}' where MASP = ${id}`;
	return db.save(sql);
}

exports.add = (sanpham,day) => {
	var sql = `insert into sanpham(TENSP,NSX,LOAI,DL_RAM,L_RAM,TD_RAM,SL_RAM,LD_DIACUNG,DL_DIACUNG,DOHOA,KT_MANHINH,DP_GMANHINH,CN_MANHINH,CU_MANHINH,AMTHANH,DIAQUANG,GIAOTIEP,WIFI_MANG,KNKD_MANG,CARDREADER,WEBCAM,HDH,PIN,THONGTINKHAC_CBVT,THONGTINKHAC_DBP,THONGTINKHAC_PKKT,KICHTHUOC,TRONGLUONG,CHATLIEU,BAOHANH,LUOTXEM,LUOTTHICH,GIABAN,CPU,SOLUONGSPCON,GIAMUA,NGAYNHAP) 
				values('${sanpham.TENSP}','${sanpham.NSX}','${sanpham.LOAI}','${sanpham.DLRAM}','${sanpham.L_RAM}','${sanpham.TD_RAM}','${sanpham.SL_RAM}','${sanpham.LD_DIACUNG}','${sanpham.DL_DIACUNG}','${sanpham.DOHOA}','${sanpham.KT_MANHINH}','${sanpham.DP_MANHINH}','${sanpham.CN_MANHINH}','${sanpham.CU_MANHINH}','${sanpham.AMTHANH}','${sanpham.DIAQUANG}','${sanpham.GIAOTIEP}','${sanpham.WIFI_MANG}','${sanpham.KNKD_MANG}','${sanpham.CARDREADER}','${sanpham.WEBCAM}','${sanpham.HDH}','${sanpham.PIN}','${sanpham.THONGTINKHAC_CBVT}','${sanpham.THONGTINKHAC_DBP}','${sanpham.THONGTINKHAC_PKKT}','${sanpham.KICHTHUOC}','${sanpham.TRONGLUONG}','${sanpham.CHATLIEU}','${sanpham.BAOHANH}',0,0,'${sanpham.GIABAN}','${sanpham.CPU}','${sanpham.SOLUONGSPCON}','${sanpham.GIAMUA}','${day}')`;
	return db.save(sql);
}

exports.searchPro = (thongtin) => {
	var sql = `select * from sanpham where TENSP LIKE '${thongtin}' OR NSX LIKE '${thongtin}' OR LOAI LIKE '${thongtin}' OR DL_RAM LIKE '${thongtin}' OR L_RAM LIKE '${thongtin}' OR TD_RAM LIKE '${thongtin}' OR SL_RAM LIKE '${thongtin}' OR LD_DIACUNG LIKE '${thongtin}' OR DL_DIACUNG LIKE '${thongtin}' OR DOHOA LIKE '${thongtin}' OR KT_MANHINH LIKE '${thongtin}' OR CN_MANHINH LIKE '${thongtin}' OR CU_MANHINH LIKE '${thongtin}' OR AMTHANH LIKE '${thongtin}' OR DIAQUANG LIKE '${thongtin}' OR GIAOTIEP LIKE '${thongtin}' OR WIFI_MANG LIKE '${thongtin}' OR KNKD_MANG LIKE '${thongtin}' OR CARDREADER LIKE '${thongtin}' OR WEBCAM LIKE '${thongtin}' OR HDH LIKE '${thongtin}' OR PIN LIKE '${thongtin}' OR THONGTINKHAC_CBVT LIKE '${thongtin}' OR THONGTINKHAC_DBP LIKE '${thongtin}' OR THONGTINKHAC_PKKT LIKE '${thongtin}' OR KICHTHUOC LIKE '${thongtin}' OR TRONGLUONG LIKE '${thongtin}' OR CHATLIEU LIKE '${thongtin}' OR BAOHANH LIKE '${thongtin}' OR CPU LIKE '${thongtin}' OR GIABAN LIKE '${thongtin}'`;
	return db.save(sql);
}

// quan li tai khoan

exports.loadAllAcc = () => {
	var sql = `select * from khachhang`
	return db.load(sql);
}

exports.loadidacc = id => {
	var sql = `select * from khachhang where MAKH = ${id}`;
	return db.load(sql);
}

exports.loadadmin = () => {
	var sql = `select * from admin `;
	return db.load(sql);
}
exports.updateadmin = admin => {
	var sql = `UPDATE admin SET USERNAME='${admin.USERNAME}',DTHOAI='${admin.DTHOAI}',EMAIL='${admin.EMAIL}',FACEBOOK='${admin.FACEBOOK}' WHERE IDADM=1  `;
	return db.load(sql);
}
exports.updatematkhau = PASSNEW => {
	var sql = `UPDATE admin SET PASSWORD='${PASSNEW}' WHERE IDADM=1  `;
	return db.load(sql);
}

exports.searchAcc = (thongtin) => {
	var sql = `select* from khachhang where MAKH LIKE '${thongtin}' or USERNAME LIKE '${thongtin}' or TEN LIKE '${thongtin}' or GIOITINH LIKE '${thongtin}' or DCHI LIKE '${thongtin}' or DTHOAI LIKE '${thongtin}' `;
	return db.load(sql);
}

exports.loadaccorder = id => {
	var sql = `select * from quanlyhoadon WHERE IDKH = ${id}`;
	return db.load(sql);
}

// quan li don hang

exports.loadAllOrder = () => {
	var sql = `SELECT IDHD, USERNAME, TEN, NGAYDATHANG, TINHTRANG , DATEDIFF(NOW(),NGAYDATHANG ) as moinhat FROM khachhang, quanlyhoadon WHERE khachhang.MAKH=quanlyhoadon.IDKH order by moinhat ASC`;
	return db.load(sql);
}

exports.searchOrder = (thongtin) => {
	var sql = `SELECT IDHD, USERNAME, TEN, NGAYDATHANG, TINHTRANG, DATEDIFF(NOW(),NGAYDATHANG ) as moinhat FROM khachhang INNER JOIN quanlyhoadon on quanlyhoadon.IDKH = khachhang.MAKH WHERE IDHD LIKE '${thongtin}' OR USERNAME LIKE '${thongtin}' OR IDKH LIKE '${thongtin}' OR TEN LIKE '${thongtin}' OR TINHTRANG LIKE '${thongtin}' order by moinhat ASC`;
	return db.load(sql);
}

exports.loadIdOrder = (id) => {
	var sql = `SELECT * FROM quanlyhoadon INNER JOIN khachhang ON quanlyhoadon.IDKH = khachhang.MAKH INNER JOIN giohang ON quanlyhoadon.IDHD = giohang.MAGH WHERE IDHD='${id}'`;
	return db.load(sql);
}

exports.loadOrderPro = (id) => {
	var sql = `SELECT * FROM giohang INNER JOIN sanpham ON giohang.MASP = sanpham.MASP WHERE MAGH='${id}'`;
	return db.load(sql);
}

exports.updateOrder = (order, id) => {
	var sql =  `update quanlyhoadon set TINHTRANG = '${order}' where IDHD = '${id}'`;
	return db.save(sql);
}
