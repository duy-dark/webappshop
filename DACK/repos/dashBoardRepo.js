var db = require('../fn/db');
var config = require('../config/config');

//quan li hang hoa
exports.loadAllPro = () => {
	var sql =`select * from sanpham`;
	return db.load(sql);
}
exports.loadAlllienhe = () => {
	var sql =`select * from lienhe limit 10 offset 0`;
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

exports.add = (sanpham,day) => {
	var sql = `insert into sanpham(TENSP,NSX,LOAI,DL_RAM,L_RAM,TD_RAM,SL_RAM,LD_DIACUNG,DL_DIACUNG,DOHOA,KT_MANHINH,DP_MANHINH,CN_MANHINH,CU_MANHINH,AMTHANH,DIAQUANG,GIAOTIEP,WIFI_MANG,KNKD_MANG,CARDREADER,WEBCAM,HDH,PIN,THONGTINKHAC_CBVT,THONGTINKHAC_DBP,THONGTINKHAC_PKKT,KICHTHUOC,TRONGLUONG,CHATLIEU,BAOHANH,LUOTXEM,LUOTTHICH,GIABAN,CPU,SOLUONGSPCON,GIAMUA,NGAYNHAP) 
				values('${sanpham.TENSP}','${sanpham.NSX}','${sanpham.LOAI}','${sanpham.DLRAM}','${sanpham.L_RAM}','${sanpham.TD_RAM}','${sanpham.SL_RAM}','${sanpham.LD_DIACUNG}','${sanpham.DL_DIACUNG}','${sanpham.DOHOA}','${sanpham.KT_MANHINH}','${sanpham.DP_MANHINH}','${sanpham.CN_MANHINH}','${sanpham.CU_MANHINH}','${sanpham.AMTHANH}','${sanpham.DIAQUANG}','${sanpham.GIAOTIEP}','${sanpham.WIFI_MANG}','${sanpham.KNKD_MANG}','${sanpham.CARDREADER}','${sanpham.WEBCAM}','${sanpham.HDH}','${sanpham.PIN}','${sanpham.THONGTINKHAC_CBVT}','${sanpham.THONGTINKHAC_DBP}','${sanpham.THONGTINKHAC_PKKT}','${sanpham.KICHTHUOC}','${sanpham.TRONGLUONG}','${sanpham.CHATLIEU}','${sanpham.BAOHANH}',0,0,'${sanpham.GIABAN}','${sanpham.CPU}','${sanpham.SOLUONGSPCON}','${sanpham.GIAMUA}','${sanpham.day}')`;
	return db.save(sql);
}

exports.searchPro = (thongtin) => {
	var sql = `select * from sanpham where MASP LIKE '${thongtin}' OR TENSP LIKE '${thongtin}' OR NSX LIKE '${thongtin}' OR LOAI LIKE '${thongtin}' OR DL_RAM LIKE '${thongtin}' OR L_RAM LIKE '${thongtin}' OR TD_RAM LIKE '${thongtin}' OR SL_RAM LIKE '${thongtin}' OR LD_DIACUNG LIKE '${thongtin}' OR DL_DIACUNG LIKE '${thongtin}' OR DOHOA LIKE '${thongtin}' OR KT_MANHINH LIKE '${thongtin}' OR CN_MANHINH LIKE '${thongtin}' OR CU_MANHINH LIKE '${thongtin}' OR AMTHANH LIKE '${thongtin}' OR DIAQUANG LIKE '${thongtin}' OR GIAOTIEP LIKE '${thongtin}' OR WIFI_MANG LIKE '${thongtin}' OR KNKD_MANG LIKE '${thongtin}' OR CARDREADER LIKE '${thongtin}' OR WEBCAM LIKE '${thongtin}' OR HDH LIKE '${thongtin}' OR PIN LIKE '${thongtin}' OR THONGTINKHAC_CBVT LIKE '${thongtin}' OR THONGTINKHAC_DBP LIKE '${thongtin}' OR THONGTINKHAC_PKKT LIKE '${thongtin}' OR KICHTHUOC LIKE '${thongtin}' OR TRONGLUONG LIKE '${thongtin}' OR CHATLIEU LIKE '${thongtin}' OR BAOHANH LIKE '${thongtin}' OR CPU LIKE '${thongtin}' OR GIABAN LIKE '${thongtin}'`;
	return db.load(sql);
}
//TIM KIEN LOAI SAN PHAM
exports.searchLSP = (thongtin) => {
	return new Promise((resolve, reject) => {
	var sql=`select * from sanpham  where LOAI='${thongtin}'`;
	db.load(sql).then(rows=>{
		var s=0,s2=0;
		if(rows.length>=1){
		for(var i=0;i<rows.length;i++){
				s+=rows[i].SOLUONGSPCON;
				s2+=rows[i].SOLUONGSPDABAN;
			}
			var o={
				lsp:rows[0].LOAI,
				slt:s,
				sldb:s2
			}
		resolve(o);
		}
		else{
			resolve(null);
		}
		});
	});
}
//TIM KIEM NSX
exports.searchNSX = (thongtin) => {
	return new Promise((resolve, reject) => {
	var sql=`select * from sanpham  where NSX='${thongtin}'`;
	db.load(sql).then(rows=>{
		var s=0,s2=0;
		if(rows.length>=1){
		for(var i=0;i<rows.length;i++){
				s+=rows[i].SOLUONGSPCON;
				s2+=rows[i].SOLUONGSPDABAN;
			}
			var o={
				nsx:rows[0].NSX,
				slt:s,
				sldb:s2
			}
		resolve(o);
		}
		else{
			resolve(null);
		}
		});
	});
}
// quan li tai khoan

exports.loadAllAcc = () => {
	var sql = `select * from khachhang`;
	return db.load(sql);
}

exports.loadidacc = id => {
	var sql = `select * from khachhang where MAKH = ${id}`;
	return db.load(sql);
}

exports.loadadmin = () => {
	var sql = `select * from admin `;
	return db.load(sql);
}
exports.updateadmin = admin => {
	var sql = `UPDATE admin SET TEN='${admin.TEN}',DCHI='${admin.DCHI}',DTHOAI='${admin.DTHOAI}',EMAIL='${admin.EMAIL}',FACEBOOK='${admin.FACEBOOK}' WHERE IDADM=1  `;
	return db.load(sql);
}
exports.updatematkhau = PASSNEW => {
	var sql = `UPDATE admin SET PASSWORD='${PASSNEW}' WHERE IDADM=1  `;
	return db.load(sql);
}

exports.searchAcc = (thongtin) => {
	var sql = `select* from khachhang where MAKH LIKE '${thongtin}' or USERNAME LIKE '${thongtin}' or TEN LIKE '${thongtin}' or GIOITINH LIKE '${thongtin}' or DCHI LIKE '${thongtin}' or DTHOAI LIKE '${thongtin}' `;
	return db.load(sql);
}

exports.loadaccorder = id => {
	var sql = `select * from quanlyhoadon WHERE IDKH = ${id}`;
	return db.load(sql);
}
exports.searchlienhe = (thongtin) => {
	var sql = `SELECT * FROM lienhe WHERE MANG LIKE '${thongtin}' OR TEN LIKE '${thongtin}' OR DTHOAI LIKE '${thongtin}' OR DCHI LIKE '${thongtin}' OR EMAIL LIKE '${thongtin}'`;
	return db.load(sql);
}
// quan li don hang

exports.loadAllOrder = () => {
	var sql = `SELECT IDHD,IDKH, USERNAME, TEN, NGAYDATHANG, TINHTRANG ,TONGTIEN,NGUOINHAN,SDT,DIACHI, DATEDIFF(NOW(),NGAYDATHANG ) as moinhat FROM khachhang, quanlyhoadon WHERE khachhang.MAKH=quanlyhoadon.IDKH order by moinhat ASC`;
	return db.load(sql);
}

exports.searchOrder = (thongtin) => {
	var sql = `SELECT IDHD, USERNAME, TEN, NGAYDATHANG, TINHTRANG,TONGTIEN,NGUOINHAN,SDT,DIACHI, DATEDIFF(NOW(),NGAYDATHANG ) as moinhat FROM khachhang INNER JOIN quanlyhoadon on quanlyhoadon.IDKH = khachhang.MAKH WHERE IDHD LIKE '${thongtin}' OR USERNAME LIKE '${thongtin}' OR IDKH LIKE '${thongtin}' OR TEN LIKE '${thongtin}' OR TINHTRANG LIKE '${thongtin}' order by moinhat ASC`;
	return db.load(sql);
}

exports.loadIdOrder = (id) => {
	var sql = `SELECT * FROM quanlyhoadon INNER JOIN khachhang ON quanlyhoadon.IDKH = khachhang.MAKH INNER JOIN giohang ON quanlyhoadon.IDHD = giohang.MAGH WHERE IDHD='${id}'`;
	return db.load(sql);
}

exports.loadOrderPro = (id) => {
	var sql = `SELECT * FROM giohang INNER JOIN sanpham ON giohang.MASP = sanpham.MASP WHERE MAGH='${id}'`;
	return db.load(sql);
}

exports.updateOrder = (order, id) => {

			
		
	var sql=`select * from quanlyhoadon where IDHD='${id}'`;
	db.load(sql).then(row=>{
		if(row[0].TINHTRANG==='Đã hủy' && order==='Đã hủy'){
			return;
		}
		if( order==='Đã hủy'){
			var sql2=`select * from giohang where MAGH='${id}'`;
			db.load(sql2).then(rows=>{
				for(var i=0;i<rows.length;i++){
					var temp=rows[i].SOLUONG;
					var sql3=`update sanpham set SOLUONGSPCON=(SOLUONGSPCON+${temp}),SOLUONGSPDABAN=(SOLUONGSPDABAN-${temp})
								where MASP='${rows[i].MASP}'`;
					db.save(sql3);
				}
			});
		}
		if(row[0].TINHTRANG==='Đã hủy'){
			var sql2=`select * from giohang where MAGH='${id}'`;
			db.load(sql2).then(rows2=>{
				for(var i=0;i<rows2.length;i++){
					var temp=rows2[i].SOLUONG;
					var sql3=`update sanpham set SOLUONGSPCON=(SOLUONGSPCON-${temp}),SOLUONGSPDABAN=(SOLUONGSPDABAN+${temp})
								where MASP='${rows2[i].MASP}'`;
					db.save(sql3);
				}
			});
		}
			
		});
	

}


//quan li nsx
exports.loadAllNsx = () => {
	var sql = `SELECT * FROM sanpham GROUP BY NSX`;
	return db.load(sql);
}
exports.loadSlt = (nsx) => {
	return new Promise((resolve, reject) => {
			var n=[];
			for(var temp=0;temp<nsx.length;temp++){
				n.push(0);
			}

			var p=[];
			for(var i=0;i<nsx.length;i++){
				var sql = `SELECT SOLUONGSPCON FROM sanpham WHERE NSX LIKE'${nsx[i].NSX}'`;
				p.push(db.load(sql));
			}
			var kq=[];
			Promise.all(p).then(kq=>{
				for(var t=0;t<nsx.length;t++){
					var s=0;
					for(var t2=0;t2<kq[t].length;t2++){
						s+=kq[t][t2].SOLUONGSPCON;
					}
					
					n[t]=s;

				}
				resolve(n);

			});
	});
	
}
exports.loadSldb = (nsx) => {
	return new Promise((resolve, reject) => {
			var m=[];
			for(var temp=0;temp<nsx.length;temp++){
				m.push(0);
			}

			var p=[];
			for(var i=0;i<nsx.length;i++){
				var sql = `SELECT SOLUONGSPDABAN FROM sanpham WHERE NSX LIKE'${nsx[i].NSX}'`;
				p.push(db.load(sql));
			}
			var kq=[];
			Promise.all(p).then(kq=>{
				for(var t=0;t<nsx.length;t++){
					var s=0;
					for(var t2=0;t2<kq[t].length;t2++){
						s+=kq[t][t2].SOLUONGSPDABAN;
					}
					
					m[t]=s;

				}
				resolve(m);

			});
	});
	
}
//quan li loai sp
exports.loadAllLsp = () => {
	var sql = 'SELECT * FROM sanpham GROUP BY LOAI'
	return db.load(sql);
}
exports.loadSltLsp = (lsp) => {
	return new Promise((resolve, reject) => {
			var n=[];
			for(var temp=0;temp<lsp.length;temp++){
				n.push(0);
			}

			var p=[];
			for(var i=0;i<lsp.length;i++){
				var sql = `SELECT SOLUONGSPCON FROM sanpham WHERE LOAI LIKE'${lsp[i].LOAI}'`;
				p.push(db.load(sql));
			}
			var kq=[];
			Promise.all(p).then(kq=>{
				for(var t=0;t<lsp.length;t++){
					var s=0;
					for(var t2=0;t2<kq[t].length;t2++){
						s+=kq[t][t2].SOLUONGSPCON;
					}
					
					n[t]=s;

				}
				resolve(n);

			});
	});
	
}
exports.loadSldbLsp = (lsp) => {
	return new Promise((resolve, reject) => {
			var m=[];
			for(var temp=0;temp<lsp.length;temp++){
				m.push(0);
			}

			var p=[];
			for(var i=0;i<lsp.length;i++){
				var sql = `SELECT SOLUONGSPDABAN FROM sanpham WHERE LOAI LIKE'${lsp[i].LOAI}'`;
				p.push(db.load(sql));
			}
			var kq=[];
			Promise.all(p).then(kq=>{
				for(var t=0;t<lsp.length;t++){
					var s=0;
					for(var t2=0;t2<kq[t].length;t2++){
						s+=kq[t][t2].SOLUONGSPDABAN;
					}
					
					m[t]=s;

				}
				resolve(m);

			});
	});
	
}