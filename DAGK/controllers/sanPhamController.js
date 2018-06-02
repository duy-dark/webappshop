var express = require('express'), 
	product = require('../repos/productRepo');

var router = express.Router();

router.get('/sanpham/san-pham-theo-hang', (req, res) => {
    res.render('sanPham/San-pham-theo-hang');
    var p1 = productRepo.load(NSX);
    var x = req.query.value
    Promise.all	([p1]).then(([rows, count_rows]) => {
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
});


router.get('/sanpham/thong-tin-chi-tiet-san-pham', (req, res) => {
    var proId = req.params.proId;
    productRepo.single(proId).then(rows => {
        if (rows.length > 0) {
            var vm = {
                product: rows[0]
            };
            res.render('product/detail', vm);
        } else {
            res.end('NO PRODUCT');
        }
    });
});

module.exports = router;