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

module.exports = router;