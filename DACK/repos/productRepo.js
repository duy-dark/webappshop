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