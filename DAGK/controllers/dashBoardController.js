var express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
    res.render('dashBoard/dash-board');
});

router.get('/quan-li-hang-hoa', (req, res) => {
   res.render('quanLiHangHoa/quan-li-hang-hoa');
});

router.get('/quan-li-hoa-don-hang', (req, res) => {
  res.render('quanLiHoaDonHang/quan-li-hoa-don-hang');
});


router.get('/quan-li-hoa-don-hang/thong-tin-chi-tiet-hoa-don-hang', (req, res) => {
  res.render('quanLiHoaDonHang/thong-tin-chi-tiet-hoa-don-hang');
});

router.get('/quan-li-khach-hang/', (req, res) => {
  res.render('quanLiKhachHang/quan-li-khach-hang');
});



router.get('/quan-li-khach-hang/thong-tin-chi-tiet-tai-khoan', (req, res) => {
  res.render('quanLiKhachHang/Thong-tin-chi-tiet-tai-khoan-chu-shop-xem');
});


router.get('/quan-li-thong-tin-shop', (req, res) => {
  res.render('quanLiThongTinShop/quan-li-thong-tin-shop');
});
module.exports = router;