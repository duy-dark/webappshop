var db = require('../fn/db');

exports.loadspmoinhat = () => {
	var sql = `select * from sanpham order by SOLUONGSPDABAN DESC  limit 4 OFFSET 0`;
	return db.load(sql);
}
exports.loadid = id => {
	var sql = `select * from sanpham where MASP = ${id}`;
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
exports.loadnsx = () => {
	var sql = `select NSX from sanpham group by NSX`;
	return db.load(sql);
}
exports.loadnsx = () => {
	var sql = `select LOAI from sanpham group by LOAI`;
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

exports.update = sanpham => {
	var sql = `update sanpham set TENSP=${sanpham.TENSP},NSX=${sanpham.NSX},LOAI=${sanpham.LOAI},DLRAM=${sanpham.DLRAM},L_RAM=${sanpham.L_RAM},TD_RAM=${sanpham.TD_RAM},SL_RAM=${sanpham.SL_RAM},LD_DIACUNG=${sanpham.LD_DIACUNG},DL_DIACUNG=${sanpham.DL_DIACUNG},DOHOA=${sanpham.DOHOA},KT_MANHINH=${sanpham.KT_MANHINH},CN_MANHINH=${sanpham.CN_MANHINH},CU_MANHINH=${sanpham.CU_MANHINH},AMTHANH=${sanpham.AMTHANH},DIAQUANG=${sanpham.DIAQUANG},GIAOTIEP=${sanpham.GIAOTIEP},WIFI_MANG=${sanpham.WIFI_MANG},KNKD_MANG=${sanpham.KNKD_MANG},CARDREADER=${sanpham.CARDREADER},WEBCAM=${sanpham.WEBCAM},HDH=${sanpham.HDH},PIN=${sanpham.PIN},THONGTINKHAC_CBVT=${sanpham.THONGTINKHAC_CBVT},THONGTINKHAC_DBP=${sanpham.THONGTINKHAC_DBP},sanpham.THONGTINKHAC_PKKT=${sanpham.THONGTINKHAC_PKKT},KICHTHUOC=${sanpham.KICHTHUOC},TRONGLUONG=${sanpham.TRONGLUONG},CHATLIEU=${sanpham.CHATLIEU},BAOHANH=${sanpham.BAOHANH},GIAMUA=${sanpham.GIAMUA},CPU=${sanpham.CPU},SOLUONGSPCON=${sanpham.SOLUONGSPCON},GIABAN=${sanpham.GIABAN} where CatID = ${category.CatID}`;
	return db.save(sql);
}
