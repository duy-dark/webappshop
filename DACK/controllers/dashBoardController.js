var express = require('express');
var dashBoard = require('../repos/dashBoardRepo');
var moment = require('moment'),
	sha256 = require('crypto-js/sha256');
var router = express.Router();


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
		res.render('quanLiHangHoa/thong-tin-chi-tiet-hang-hoa',vm);
		
	});
});
router.get('/quan-li-hang-hoa/them-san-pham', (req, res) => {
    res.render('quanLiHangHoa/them-san-pham')
});
router.post('/quan-li-hang-hoa/thong-tin-chi-tiet-hang-hoa', (req, res) => {
    dashBoard.updateSP(req.body,+req.query.id).then(value => {
        res.redirect('/dash-board/quan-li-hang-hoa');
    });
});

router.post('/quan-li-hang-hoa/them-san-pham', (req, res) => {
    var day = moment(req.body.day,'DD/MM/YYYY').format('YYYY-MM-DD');
    dashBoard.add(req.body,day).then(value => {
        res.redirect('/dash-board/quan-li-hang-hoa');
    });
});

router.post('/quan-li-hang-hoa/del', (req, res) => {
	dashBoard.del(+req.body.proId).then(rows => {
        res.redirect('/dash-board/quan-li-hang-hoa');
	});
});

// QUAN LY DON HANG

// router.get('/quan-li-hoa-don-hang', (req, res) => {
//   res.render('quanLiHoaDonHang/quan-li-hoa-don-hang');
// });


// router.get('/quan-li-hoa-don-hang/thong-tin-chi-tiet-hoa-don-hang', (req, res) => {
//   res.render('quanLiHoaDonHang/thong-tin-chi-tiet-hoa-don-hang');
// });

// QUAN LY KHACH

router.get('/quan-li-khach-hang', (req, res) => {
	dashBoard.loadAllAcc().then(rows => {
		var vm = {
        	accounts: rows
        }
		res.render('quanLiKhachHang/quan-li-khach-hang',vm);
	});
});

router.get('/quan-li-khach-hang/thong-tin-chi-tiet-tai-khoan', (req, res) => {
	dashBoard.loadidacc(+req.query.id).then(rows =>{
		var vm = rows[0]
		res.render('quanLiKhachHang/Thong-tin-chi-tiet-tai-khoan',vm);
	});
});

router.get('/quan-li-khach-hang/Thong-tin-chi-tiet-tai-khoan-chu-shop-xem', (req, res) => {
	dashBoard.loadidacc(+req.query.id).then(rows =>{
		var vm ={ 
			acc: rows[0] 
		}
		res.render('quanLiKhachHang/Thong-tin-chi-tiet-tai-khoan-chu-shop-xem',vm);
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
   		res.redirect('/dash-board/quan-li-thong-tin-shop');
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
		   		var vm={
					accadmin:rows[0],
					NHAPSAI: false
				};
				res.render('quanLiThongTinShop/quan-li-thong-tin-shop',vm);
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
module.exports = router;