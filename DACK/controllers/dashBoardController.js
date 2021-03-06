var express = require('express');
var dashBoard = require('../repos/dashBoardRepo');
var moment = require('moment'),
	sha256 = require('crypto-js/sha256');
var router = express.Router();
var db = require('../fn/db');

router.get('/', (req, res) => {
    res.render('dashBoard/dash-board');
});

// QUAN LY HANG HOA

router.get('/quan-li-hang-hoa', (req, res) => {
	dashBoard.loadAllPro().then(rows => {
		var vm = {
        	products: rows
        }
        res.render('quanLiHangHoa/quan-li-hang-hoa', vm);
	});
});

router.get('/quan-li-hang-hoa/thong-tin-chi-tiet-hang-hoa', (req, res) => {
	dashBoard.loadidpro(+req.query.id).then(rows =>{
		var vm ={
			sp: rows[0]

		}
		res.render('quanLiHangHoa/thong-tin-chi-tiet-hang-hoa',vm)
	});
});

router.get('/quan-li-hang-hoa/them-san-pham', (req, res) => {
    res.render('quanLiHangHoa/them-san-pham')
});

router.post('/quan-li-hang-hoa/thong-tin-chi-tiet-hang-hoa', (req, res) => {
    dashBoard.updateSP(req.body,+req.query.id).then(value => {
        res.redirect('/dash-board/quan-li-hang-hoa/thong-tin-chi-tiet-hang-hoa?id='+req.query.id);
    });
});

router.post('/quan-li-hang-hoa/them-san-pham', (req, res) => {

    dashBoard.add(req.body).then(value => {
        res.redirect('/dash-board/quan-li-hang-hoa');
    });
});

router.post('/quan-li-hang-hoa/del', (req, res) => {
	dashBoard.del(+req.body.proId).then(rows => {
        res.redirect('/dash-board/quan-li-hang-hoa');
	});
});

//TIM KIEM HANG HOA

router.post('/quan-li-hang-hoa/search', (req, res) => {
	dashBoard.searchPro(req.body.search).then(rows => {
		var vm={
			products: rows
		}
        res.render('quanLiHangHoa/quan-li-hang-hoa',vm);
	});
});
//TIM KIEM  LSP
router.post('/quanLiLSP/search', (req, res) => {
	dashBoard.searchLSP(req.body.search).then(o => {
		var o2=[];
		if(o!==null){
			o2.push(o);
		}

		var vm={
			dt: o2
		}
        res.render('quanLiLSP/quanLiLSP',vm);
	});
});
//TIM KIEM NSX
router.post('/quanLiNSX/search', (req, res) => {
	dashBoard.searchNSX(req.body.search).then(o => {
		var o2=[];
		if(o!==null){
			o2.push(o);
		}
		console.log(o);
		var vm={
			dt: o2
		}
        res.render('quanLiNSX/quanLiNSX',vm);
	});
});
// QUAN LY DON HANG

router.get('/quan-li-hoa-don-hang', (req, res) => {
	dashBoard.loadAllOrder().then(rows => {
		var vm = {
			orders: rows
		}
		res.render('quanLiHoaDonHang/quan-li-hoa-don-hang',vm);
	});
});


router.get('/quan-li-hoa-don-hang/thong-tin-chi-tiet-hoa-don-hang', (req, res) => {
	var p1 = dashBoard.loadIdOrder(+req.query.id);
	var p2 = dashBoard.loadOrderPro(+req.query.id);
	Promise.all([p1, p2]).then(([row ,rows]) =>{
		var vm={
		orders: row[0],
		pro: rows
		}
		res.render('quanLiHoaDonHang/thong-tin-chi-tiet-hoa-don-hang',vm);
	}); 
});

router.post('/quan-li-hoa-don-hang/thong-tin-chi-tiet-hoa-don-hang', (req, res) => {
	var sql4 =  `update quanlyhoadon set TINHTRANG = '${req.body.tinhtrang}' where IDHD = '${+req.query.id}'`;
	db.load(sql4).then(roww=>{
    dashBoard.updateOrder(req.body.tinhtrang,+req.query.id);
	res.redirect('/dash-board/quan-li-hoa-don-hang/thong-tin-chi-tiet-hoa-don-hang?id='+req.query.id);
	});
    
});

router.post('/quan-li-hoa-don-hang/search', (req, res) => {
	dashBoard.searchOrder(req.body.search).then(rows => {
		var vm={
			orders: rows
		}
        res.render('quanLiHoaDonHang/quan-li-hoa-don-hang',vm);
	});
});

// QUAN LY KHACH

router.get('/quan-li-khach-hang', (req, res) => {
	dashBoard.loadAllAcc().then(rows => {
		var vm = {
        	accounts: rows
        }
		res.render('quanLiKhachHang/quan-li-khach-hang',vm);
	});
});
router.get('/quan-li-phan-hoi', (req, res) => {
	dashBoard.loadAlllienhe().then(rows => {
		var vm = {
        	lienhe: rows
        }
		res.render('quanLiKhachHang/quan-li-phan-hoi',vm);
	});
});
router.get('/quan-li-khach-hang/thong-tin-chi-tiet-tai-khoan', (req, res) => {
	dashBoard.loadidacc(+req.query.id).then(rows =>{
		var vm = rows[0]
		res.render('quanLiKhachHang/Thong-tin-chi-tiet-tai-khoan',vm);
	});
});

router.get('/quan-li-khach-hang/Thong-tin-chi-tiet-tai-khoan-chu-shop-xem', (req, res) => {
	var p1 = dashBoard.loadidacc(+req.query.id);
	var p2 = dashBoard.loadaccorder(+req.query.id)
	Promise.all([p1, p2]).then(([row ,rows]) =>{
		var vm={
		acc: row[0],
		orders: rows
		}
		res.render('quanLiKhachHang/Thong-tin-chi-tiet-tai-khoan-chu-shop-xem',vm);
	});
});
	
router.post('/quan-li-khach-hang/search', (req, res) => {
	dashBoard.searchAcc(req.body.search).then(rows => {
		var vm={
			accounts: rows
		}
        res.render('quanLiKhachHang/quan-li-khach-hang',vm);
	});
});
router.post('/quan-li-phan-hoi/search', (req, res) => {
	dashBoard.searchlienhe(req.body.search).then(rows => {
		var vm={
			lienhe: rows
		}
        res.render('quanLiKhachHang/quan-li-phan-hoi',vm);
	});
});
//QUAN LY THONG TIN SHOP

router.get('/quan-li-thong-tin-shop', (req, res) => {
	dashBoard.loadadmin().then(rows => {
		var vm={
			accadmin:rows[0]
		};
		res.render('quanLiThongTinShop/quan-li-thong-tin-shop',vm);
	});
   
});
router.post('/quan-li-thong-tin-shop/update', (req, res) => {
   	dashBoard.updateadmin(req.body).then(rows=>{
   		dashBoard.loadadmin().then(row2=>{
   		            req.session.curUser = row2[0];   
   		res.redirect('/dash-board/quan-li-thong-tin-shop');
   		});

   	});
});
router.post('/quan-li-thong-tin-shop/updatematkhau', (req, res) => {
	var pold=req.body.PASSOLD;
	var pnew=req.body.PASSNEW;
	var pnew1=req.body.PASSNEW1;
	dashBoard.loadadmin().then(rows => {
		if(rows[0].PASSWORD===sha256(pold).toString() && pnew===pnew1)
		{
			dashBoard.updatematkhau(sha256(pnew).toString()).then(rows1=>{
				res.redirect('/dash-board/quan-li-thong-tin-shop');
		   	});
		}
		else {
			var vm={
				NHAPSAI: true
			};
			res.render('quanLiThongTinShop/doimatkhau',vm);
		}
		
	});
   	
});

router.get('/doimatkhau', (req, res) => {
   res.render('quanLiThongTinShop/doimatkhau');
});

router.get('/quanLiNSX', (req, res) => {
	dashBoard.loadAllNsx().then(rows => {
		var p1=dashBoard.loadSlt(rows);
		var p2=dashBoard.loadSldb(rows);
		Promise.all([p1, p2]).then(([n,m]) =>{
			var data=[];
			for(var i=0;i<rows.length;i++){
				var o={
					nsx:rows[i].NSX,
					slt:n[i],
					sldb:m[i]
				}
				data.push(o);
			}
			var vm = {
			dt:data
			}
		res.render('quanLiNSX/quanLiNSX',vm);
	});

	});
});

router.get('/quanLiLSP', (req, res) => {
	dashBoard.loadAllLsp().then(rows => {
		var p1=dashBoard.loadSltLsp(rows);
		var p2=dashBoard.loadSldbLsp(rows);
		Promise.all([p1, p2]).then(([n,m]) =>{
			var data=[];
			for(var i=0;i<rows.length;i++){
				var o={
					lsp:rows[i].LOAI,
					slt:n[i],
					sldb:m[i]
				}
				data.push(o);
			}
			var vm = {
			dt:data
			}
		res.render('quanLiLSP/quanLiLSP',vm);
	});

	});
});
module.exports = router;