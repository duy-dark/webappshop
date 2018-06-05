var db = require('../fn/db');


exports.load = (NSX) =>{
	var sql = `select * from sanpham where NSX = ${NSX}`;
	return db.load(sql);
}

