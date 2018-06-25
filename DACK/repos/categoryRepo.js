var db = require('../fn/db');

exports.loadspmoinhat = () => {
	var sql = `select *,DATEDIFF(NOW(),NGAYNHAP ) as moinhat from sanpham order by moinhat ASC  limit 4 OFFSET 0`;
	return db.load(sql);
}
exports.loadid = id => {
	var sql = `select * from sanpham where MASP = ${id} `;
	return db.load(sql);
}
exports.loadloai = LOAI => {
	var sql = `select * from sanpham where LOAI = '${LOAI}'`;
	return db.load(sql);
}
exports.loadloaiid = id => {
	var sql = `select sp.* from sanpham sp, sanpham sp1 where sp.LOAI = sp1.LOAI and sp1.MASP = ${id} limit 5 OFFSET 0`;
	return db.load(sql);
}
exports.loadnsxid = id => {
	var sql = `select sp.* from sanpham sp, sanpham sp1 where sp.NSX = sp1.NSX and sp1.MASP = ${id}`;
	return db.load(sql);
}
exports.loadnsxidttct = id => {
	var sql = `select sp.* from sanpham sp, sanpham sp1 where sp.NSX = sp1.NSX and sp1.MASP = ${id} limit 5 OFFSET 0`;
	return db.load(sql);
}
exports.loadbanchay = () => {
	var sql = `select * from sanpham order by SOLUONGSPDABAN DESC  limit 4 OFFSET 0 `;
	return db.load(sql);
}
exports.loadxemnhieunhat = () => {
	var sql = `select * from sanpham order by LUOTXEM DESC  limit 4 OFFSET 0 `;
	return db.load(sql);
}

exports.add = sanpham => {
	var sql = `insert into sanpham(TENSP,NSX,LOAI,DLRAM,L_RAM,TD_RAM,SL_RAM,LD_DIACUNG,DL_DIACUNG,DOHOA,KT_MANHINH,DP_MANHINH,CN_MANHINH,CU_MANHINH,AMTHANH,DIAQUANG,GIAOTIEP,WIFI_MANG,KNKD_MANG,CARDREADER,WEBCAM,HDH,PIN,THONGTINKHAC_CBVT,THONGTINKHAC_DBP,THONGTINKHAC_PKKT,KICHTHUOC,TRONGLUONG,CHATLIEU,BAOHANH,LUOTXEM,LUOTTHICH,GIABAN,CPU,SOLUONGSPCON,GIAMUA,SOLUONGSPDABAN,NGAYNHAP) 
				values('${sanpham.TENSP}','${sanpham.NSX}','${sanpham.LOAI}','${sanpham.DLRAM}','${sanpham.L_RAM}','${sanpham.TD_RAM}','${sanpham.SL_RAM}','${sanpham.LD_DIACUNG}','${sanpham.DL_DIACUNG}','${sanpham.DOHOA}','${sanpham.KT_MANHINH}','${sanpham.CN_MANHINH}','${sanpham.CU_MANHINH}','${sanpham.AMTHANH}','${sanpham.DIAQUANG}','${sanpham.GIAOTIEP}','${sanpham.WIFI_MANG}','${sanpham.KNKD_MANG}','${sanpham.CARDREADER}','${sanpham.WEBCAM}','${sanpham.HDH}','${sanpham.PIN}','${sanpham.THONGTINKHAC_CBVT}','${sanpham.THONGTINKHAC_DBP}','${sanpham.THONGTINKHAC_PKKT}','${sanpham.KICHTHUOC}','${sanpham.TRONGLUONG}','${sanpham.CHATLIEU}','${sanpham.BAOHANH}','${0}','${0}','${sanpham.GIAMUA}','${sanpham.CPU}','${sanpham.SOLUONGSPCON}','${sanpham.GIABAN}','${0}','${sanpham.NGAYNHAP}')`;
	return db.save(sql);
}

exports.delete = id => {
	var sql = `delete from sanpham where MASP = ${id}`;
	return db.save(sql);
}
