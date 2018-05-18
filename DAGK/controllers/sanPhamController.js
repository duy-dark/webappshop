var express = require('express');

var router = express.Router();

router.get('/san-pham-theo-hang', (req, res) => {
    res.render('sanPham/San-pham-theo-hang');
});


router.get('/thong-tin-chi-tiet-san-pham', (req, res) => {
    res.render('sanPham/thong-tin-chi-tiet-san-pham');
});

module.exports = router;