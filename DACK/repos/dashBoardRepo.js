var db = require('../fn/db');
var config = require('../config/config');

exports.loadAllPro = () => {
	var sql ='select * from sanpham'
	return db.load(sql);
}
exports.loadid = id => {
	var sql = `select * from sanpham where MASP = ${id} `;
	return db.load(sql);
}

exports.updateSP = (sanpham, id) => {
	var sql =  `update sanpham set TENSP='${sanpham.TENSP}',NSX='${sanpham.NSX}',LOAI='${sanpham.LOAI}',DL_RAM='${sanpham.DL_RAM}',L_RAM='${sanpham.L_RAM}',TD_RAM='${sanpham.TD_RAM}',SL_RAM='${sanpham.SL_RAM}',LD_DIACUNG='${sanpham.LD_DIACUNG}',DL_DIACUNG='${sanpham.DL_DIACUNG}',DOHOA='${sanpham.DOHOA}',KT_MANHINH='${sanpham.KT_MANHINH}',CN_MANHINH='${sanpham.CN_MANHINH}',CU_MANHINH='${sanpham.CU_MANHINH}',AMTHANH='${sanpham.AMTHANH}',DIAQUANG='${sanpham.DIAQUANG}',GIAOTIEP='${sanpham.GIAOTIEP}',WIFI_MANG='${sanpham.WIFI_MANG}',KNKD_MANG='${sanpham.KNKD_MANG}',CARDREADER='${sanpham.CARDREADER}',WEBCAM='${sanpham.WEBCAM}',HDH='${sanpham.HDH}',PIN='${sanpham.PIN}',THONGTINKHAC_CBVT='${sanpham.THONGTINKHAC_CBVT}',THONGTINKHAC_DBP='${sanpham.THONGTINKHAC_DBP}',sanpham.THONGTINKHAC_PKKT='${sanpham.THONGTINKHAC_PKKT}',KICHTHUOC='${sanpham.KICHTHUOC}',TRONGLUONG='${sanpham.TRONGLUONG}',CHATLIEU='${sanpham.CHATLIEU}',BAOHANH='${sanpham.BAOHANH}',GIAMUA='${sanpham.GIAMUA}',CPU='${sanpham.CPU}',SOLUONGSPCON='${sanpham.SOLUONGSPCON}',GIABAN='${sanpham.GIABAN}' where MASP = ${id}`;
	return db.save(sql);
}

exports.loadAllAcc = () => {
	var sql = `select * from khachhang`
	return db.save(sql);
}

