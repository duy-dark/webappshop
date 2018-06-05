<<<<<<< HEAD
var express = require('express'),
    categoryRepo = require('../repos/categoryRepo');

var router = express.Router();


router.get('/sanpham/san-pham-theo-hang', (req, res) => {
    res.render('sanPham/San-pham-theo-hang');
    var p1 = productRepo.load(NSX);
    var x = req.query.value
    Promise.all ([p1]).then(([rows, count_rows]) => {
        var numbers = [];
        for (i = 1; i <= nPages; i++) {
            numbers.push({
                value: i,
                isCurrentPage: i === +page
            });
        }
        var vm = {
            products: rows,
            noProducts: rows.length === 0,
            page_numbers: numbers
        };
        res.render('/sanPham/San-pham-theo-hang', vm);
    });

router.get('/thong-tin-chi-tiet-san-pham', (req, res) => {
    categoryRepo.loadid(+req.query.id).then(rows =>{
        var vm={
            sp:rows[0]
        }
        res.render('sanPham/thong-tin-chi-tiet-san-pham',vm);
    });
});


module.exports = router;

