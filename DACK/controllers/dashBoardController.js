var express = require('express');
var dashBoard = require('../repos/dashBoardRepo');
var router = express.Router();



router.get('/', (req, res) => {
    res.render('dashBoard/dash-board');
});

router.get('/quan-li-hang-hoa', (req, res) => {
	dashBoard.loadAllPro().then(rows => {
		var vm = {
        	products: rows
        }
        res.render('quanLiHangHoa/quan-li-hang-hoa', vm);
	});
});

router.get('/quan-li-hang-hoa/thong-tin-chi-tiet-hang-hoa', (req, res) => {
	dashBoard.loadid(+req.query.id).then(rows =>{
		
		var vm ={
			sp: rows[0]

		}
		res.render('quanLiHangHoa/thong-tin-chi-tiet-hang-hoa',vm);
		
	});
});

router.post('/quan-li-hang-hoa/thong-tin-chi-tiet-hang-hoa', (req, res) => {
    dashBoard.updateSP(req.body,+req.query.id).then(value => {
        res.redirect('/dash-board/quan-li-hang-hoa');
    });
});
// router.get('/quan-li-hoa-don-hang', (req, res) => {
//   res.render('quanLiHoaDonHang/quan-li-hoa-don-hang');
// });


// router.get('/quan-li-hoa-don-hang/thong-tin-chi-tiet-hoa-don-hang', (req, res) => {
//   res.render('quanLiHoaDonHang/thong-tin-chi-tiet-hoa-don-hang');
// });

router.get('/quan-li-khach-hang', (req, res) => {
	dashBoard.loadAllAcc().then(rows => {
		var vm = {
        	accounts: rows
        }
		res.render('quanLiKhachHang/quan-li-khach-hang',vm);
	});
	// dashBoard.loadAllAcc().then(rows =>{
	// 	var vm = {
	// 		accounts: rows
	// 	};
	// });
  
});



// router.get('/quan-li-khach-hang/thong-tin-chi-tiet-tai-khoan', (req, res) => {
//   res.render('quanLiKhachHang/Thong-tin-chi-tiet-tai-khoan-chu-shop-xem');
// });


// router.get('/quan-li-thong-tin-shop', (req, res) => {
//   res.render('quanLiThongTinShop/quan-li-thong-tin-shop');
// });
module.exports = router;