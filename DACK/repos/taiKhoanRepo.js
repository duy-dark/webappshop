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
exports.loadaccount = id => {
	var sql = `select * from khachhang where MAKH=${id}`;
	return db.load(sql);
}
exports.loadhoadonkh = id => {
	var sql = `select qlhd.*,gh.MASP,sp.TENSP,gh.SOLUONG,gh.THANHTIEN,DATEDIFF(NOW(),qlhd.NGAYDATHANG ) as moinhat from quanlyhoadon qlhd,giohang gh,sanpham sp where qlhd.IDKH=${id} and qlhd.IDHD=gh.MAGH and gh.MASP=sp.MASP order by moinhat ASC `;
	return db.load(sql);
}

exports.updateaccount = account => {
	var sql = `UPDATE khachhang SET TEN='${account.TEN}',DTHOAI='${account.DTHOAI}',EMAIL='${account.EMAIL}',CMND='${account.CMND}',GIOITINH='${account.GIOITINH}',
								NGAYSINH='${account.NGAYSINH}',DCHI='${account.DCHI}' where MAKH=${account.MAKH}`;
	return db.load(sql);
}
exports.updatematkhau = (PASSNEW,id) => {
	var sql = `UPDATE khachhang SET PASSWORD='${PASSNEW}' WHERE MAKH=${id}  `;
	return db.load(sql);
}
exports.loadTTmuahang = id => {
	var sql = `select ql.MAKH,ql.MAGH,ql.NGAYDATHANG,gh.MASP,gh.SOLUONG,gh.THANHTIEN from quanlyhoadon ql,giohang gh where ql.MAKH=${id} and  ql.MAGH=gh.MAGH  `;
	return db.load(sql);
}

exports.addmessage = person => {
	var sql = `insert into lienhe ( TEN, DTHOAI,EMAIL,DCHI,TINNHAN)  values('${person.TEN}','${person.DTHOAI}','${person.EMAIL}','${person.DCHI}','${person.TINNHAN}' )`;
	return db.load(sql);
}
exports.loadAdmin = () => {
	var sql = `select * from admin where IDADM=1`;
	return db.load(sql);
}
