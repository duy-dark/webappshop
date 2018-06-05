var express = require('express'),
    categoryRepo = require('../repos/categoryRepo'),
    productRepo = require('../repos/productRepo'),
    config = require('../config/config');

var router = express.Router();


router.get('/San-pham-theo-hang/:id', (req, res) => {
    var catId = req.params.id;
    var page = req.query.page;
    if (!page) page = 1;
    if (page < 1) page = 1;

    var offset = (page - 1) * config.PRODUCTS_PER_PAGE;
    var p1 = productRepo.loadPageByCat(catId, offset);
    var p2 = productRepo.countByCat(catId);

    Promise.all([p1, p2]).then(([rows, count_rows]) => {
        var total = count_rows[0].total;
        var nPages = total / config.PRODUCTS_PER_PAGE;
        if (total % config.PRODUCTS_PER_PAGE > 0)
            nPages++;

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
        res.render('sanPham/San-pham-theo-hang', vm);
    });
<<<<<<< HEAD
=======
    
>>>>>>> e6925d4392d4f32996a088442a5461a09c3b96e7
});
router.get('/thong-tin-chi-tiet-san-pham', (req, res) => {
    var p1= categoryRepo.loadid(+req.query.id);
    var p2= categoryRepo.loadloaiid(+req.query.id);
    var p3= categoryRepo.loadnsxidttct(+req.query.id);
    Promise.all([p1, p2,p3]).then(([rows, rows1,rows2])=>
    {
        var vm = {
            sp: rows[0],
            sploai: rows1,
            spnsx: rows2
        };
        res.render('sanPham/thong-tin-chi-tiet-san-pham',vm);
    });
});


module.exports = router;

