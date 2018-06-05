var db = require('../fn/db');
var config = require('../config/config');

exports.load = (NSX) =>{
	var sql = `select * from sanpham where NSX = ${NSX}`;
	return db.load(sql);
}