var db = require('../fn/db');
var config = require('../config/config');

exports.loadAllPro = () => {
	var sql ='select * from sanpham'
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

exports.loadAllAcc = () => {
	var sql = `select * from khachhang`
	return db.load(sql);
}

exports.loadidacc = id => {
	var sql = `select * from khachhang where MAKH = ${id}`;
	return db.load(sql);
}

exports.add = (sanpham,day) => {
	var sql = `insert into sanpham(TENSP,NSX,LOAI,DL_RAM,L_RAM,TD_RAM,SL_RAM,LD_DIACUNG,DL_DIACUNG,DOHOA,KT_MANHINH,DP_GMANHINH,CN_MANHINH,CU_MANHINH,AMTHANH,DIAQUANG,GIAOTIEP,WIFI_MANG,KNKD_MANG,CARDREADER,WEBCAM,HDH,PIN,THONGTINKHAC_CBVT,THONGTINKHAC_DBP,THONGTINKHAC_PKKT,KICHTHUOC,TRONGLUONG,CHATLIEU,BAOHANH,LUOTXEM,LUOTTHICH,GIABAN,CPU,SOLUONGSPCON,GIAMUA,NGAYNHAP) 
				values('${sanpham.TENSP}','${sanpham.NSX}','${sanpham.LOAI}','${sanpham.DLRAM}','${sanpham.L_RAM}','${sanpham.TD_RAM}','${sanpham.SL_RAM}','${sanpham.LD_DIACUNG}','${sanpham.DL_DIACUNG}','${sanpham.DOHOA}','${sanpham.KT_MANHINH}','${sanpham.DP_MANHINH}','${sanpham.CN_MANHINH}','${sanpham.CU_MANHINH}','${sanpham.AMTHANH}','${sanpham.DIAQUANG}','${sanpham.GIAOTIEP}','${sanpham.WIFI_MANG}','${sanpham.KNKD_MANG}','${sanpham.CARDREADER}','${sanpham.WEBCAM}','${sanpham.HDH}','${sanpham.PIN}','${sanpham.THONGTINKHAC_CBVT}','${sanpham.THONGTINKHAC_DBP}','${sanpham.THONGTINKHAC_PKKT}','${sanpham.KICHTHUOC}','${sanpham.TRONGLUONG}','${sanpham.CHATLIEU}','${sanpham.BAOHANH}',0,0,'${sanpham.GIABAN}','${sanpham.CPU}','${sanpham.SOLUONGSPCON}','${sanpham.GIAMUA}','${day}')`;
	return db.save(sql);
}

