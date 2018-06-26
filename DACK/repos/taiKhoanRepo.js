var db = require('../fn/db');

exports.add = user => {
	var sql = `insert into khachhang( TEN, DTHOAI, USERNAME, PASSWORD,EMAIL,NGAYSINH,CMND,GIOITINH,DCHI) 
	values('${user.TEN}', '${user.DTHOAI}', '${user.USERNAME}', '${user.PASSWORD}', '${user.EMAIL}', '${user.NGAYSINH}',
	'${user.CMND}','${user.GIOITINH}','${user.DCHI}')`;
	return db.save(sql);
}
exports.checkExist = user => {

	var sql = `select * from khachhang KH,admin A where KH.USERNAME = '${user.USERNAME}' and KH.PASSWORD = '${user.PASSWORD}'
	 or A.USERNAME = '${user.USERNAME}' and A.PASSWORD = '${user.PASSWORD}'`;
	return db.load(sql);
}
exports.login = user => {
	var sql = `select * from khachhang where USERNAME = '${user.USERNAME}' and PASSWORD = '${user.PASSWORD}'`;
	return db.load(sql);
}
exports.checkAdmin = user => {
	var sql = `select * from admin where USERNAME = '${user.USERNAME}' and PASSWORD = '${user.PASSWORD}'`;
	return db.load(sql);
}