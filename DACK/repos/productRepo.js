var db = require('../fn/db');
var config = require('../config/config');

exports.loadPageByCat = (catId, offset) => {
	var sql = `select sp.* from sanpham sp, sanpham sp1 where sp.NSX=sp1.NSX and sp1.MASP = ${catId} limit ${config.PRODUCTS_PER_PAGE} offset ${offset}`;
	return db.load(sql);
}

exports.countByCat = catId => {
	var sql = `select count(*) as total from sanpham sp, sanpham sp1 where sp.NSX=sp1.NSX and sp1.MASP = ${catId} `;
	return db.load(sql);
}
exports.loadPageByloai = (loai, offset) => {
	var sql = `select * from sanpham where LOAI = '${loai}' limit ${config.PRODUCTS_PER_PAGE} offset ${offset}`;
	return db.load(sql);
}
exports.countByloai = loai => {
	var sql = `select count(*) as total from sanpham  where LOAI = '${loai}' `;
	return db.load(sql);
}
exports.loadPageByhang = (hang, offset) => {
	var sql = `select * from sanpham where NSX = '${hang}' limit ${config.PRODUCTS_PER_PAGE} offset ${offset}`;
	return db.load(sql);
}
exports.countByhang = hang => {
	var sql = `select count(*) as total from sanpham  where NSX = '${hang}' `;
	return db.load(sql);
}
exports.loadPageBysearch = (thongtin, offset) => {
	var sql = `select * from sanpham where TENSP LIKE '${thongtin}' OR NSX LIKE '${thongtin}' OR LOAI LIKE '${thongtin}' OR DL_RAM LIKE '${thongtin}' OR L_RAM LIKE '${thongtin}' OR TD_RAM LIKE '${thongtin}' OR SL_RAM LIKE '${thongtin}' OR LD_DIACUNG LIKE '${thongtin}' OR DL_DIACUNG LIKE '${thongtin}' OR DOHOA LIKE '${thongtin}' OR KT_MANHINH LIKE '${thongtin}' OR CN_MANHINH LIKE '${thongtin}' OR CU_MANHINH LIKE '${thongtin}' OR AMTHANH LIKE '${thongtin}' OR DIAQUANG LIKE '${thongtin}' OR GIAOTIEP LIKE '${thongtin}' OR WIFI_MANG LIKE '${thongtin}' OR KNKD_MANG LIKE '${thongtin}' OR CARDREADER LIKE '${thongtin}' OR WEBCAM LIKE '${thongtin}' OR HDH LIKE '${thongtin}' OR PIN LIKE '${thongtin}' OR THONGTINKHAC_CBVT LIKE '${thongtin}' OR THONGTINKHAC_DBP LIKE '${thongtin}' OR THONGTINKHAC_PKKT LIKE '${thongtin}' OR KICHTHUOC LIKE '${thongtin}' OR TRONGLUONG LIKE '${thongtin}' OR CHATLIEU LIKE '${thongtin}' OR BAOHANH LIKE '${thongtin}' OR CPU LIKE '${thongtin}' OR GIABAN LIKE '${thongtin}' limit ${config.PRODUCTS_PER_PAGE} offset ${offset}`;
	return db.save(sql);
}
exports.countBysearch = thongtin => {
	var sql = `select count(*) as total from sanpham where TENSP LIKE '${thongtin}' OR NSX LIKE '${thongtin}' OR LOAI LIKE '${thongtin}' OR DL_RAM LIKE '${thongtin}' OR L_RAM LIKE '${thongtin}' OR TD_RAM LIKE '${thongtin}' OR SL_RAM LIKE '${thongtin}' OR LD_DIACUNG LIKE '${thongtin}' OR DL_DIACUNG LIKE '${thongtin}' OR DOHOA LIKE '${thongtin}' OR KT_MANHINH LIKE '${thongtin}' OR CN_MANHINH LIKE '${thongtin}' OR CU_MANHINH LIKE '${thongtin}' OR AMTHANH LIKE '${thongtin}' OR DIAQUANG LIKE '${thongtin}' OR GIAOTIEP LIKE '${thongtin}' OR WIFI_MANG LIKE '${thongtin}' OR KNKD_MANG LIKE '${thongtin}' OR CARDREADER LIKE '${thongtin}' OR WEBCAM LIKE '${thongtin}' OR HDH LIKE '${thongtin}' OR PIN LIKE '${thongtin}' OR THONGTINKHAC_CBVT LIKE '${thongtin}' OR THONGTINKHAC_DBP LIKE '${thongtin}' OR THONGTINKHAC_PKKT LIKE '${thongtin}' OR KICHTHUOC LIKE '${thongtin}' OR TRONGLUONG LIKE '${thongtin}' OR CHATLIEU LIKE '${thongtin}' OR BAOHANH LIKE '${thongtin}' OR CPU LIKE '${thongtin}' OR GIABAN LIKE '${thongtin}'`;
	return db.save(sql);
}