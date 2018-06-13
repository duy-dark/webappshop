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