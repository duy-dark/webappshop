var express = require('express'),
    categoryRepo = require('../repos/categoryRepo'),
    productRepo = require('../repos/productRepo'),
    config = require('../config/config');

var router = express.Router();

router.get('/San-pham-theo-hang/search', (req, res) => {

    var page = req.query.page;
    if (!page) page = 1;
    if (page < 1) page = 1;
    if(page===1)
    {
        config.PRODUCTS_SEARCH="%"+ req.query.timkiem +"%";
    }
    
    var catId =config.PRODUCTS_SEARCH;
    var offset = (page - 1) * config.PRODUCTS_PER_PAGE;
    var p1 = productRepo.loadPageBysearch(catId,offset);
    var p2 = productRepo.countBysearch(catId);

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
        var a=null;
        if(count_rows[0].total>0)
        {
            a=true;
        }
        else
        {
            a=false;
        }
        
        var vm = {
            products: rows,
            noProducts: a,
            page_numbers: numbers,
            page_last: numbers.length
        };
        res.render('sanPham/San-pham-theo-hang', vm);
    });
});
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
        var a=null;
        if(count_rows[0].total>0)
        {
            a=true;
        }
        else
        {
            a=false;
        }
      
        var vm = {
            products: rows,
            noProducts: a,
            page_numbers: numbers,
            page_last: numbers.length
        };
        res.render('sanPham/San-pham-theo-hang', vm);
    });
});
router.get('/San-pham-theo-hang/danhsachloai/:id', (req, res) => {
    var catId = req.params.id;
    var page = req.query.page;
    if (!page) page = 1;
    if (page < 1) page = 1;

    var offset = (page - 1) * config.PRODUCTS_PER_PAGE;
    var p1 = productRepo.loadPageByloai(catId, offset);
    var p2 = productRepo.countByloai(catId);

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
        var a=null;

        if(count_rows[0].total>0)
        {
            a=true;
        }
        else
        {
            a=false;
        }
        
        var vm = {
            products: rows,
            noProducts: a,
            page_numbers: numbers,
            page_last: numbers.length
        };
        res.render('sanPham/San-pham-theo-hang', vm);
    });
});
router.get('/San-pham-theo-hang/danhsachhang/:id', (req, res) => {
    var catId = req.params.id;
    var page = req.query.page;
    if (!page) page = 1;
    if (page < 1) page = 1;

    var offset = (page - 1) * config.PRODUCTS_PER_PAGE;
    var p1 = productRepo.loadPageByhang(catId, offset);
    var p2 = productRepo.countByhang(catId);

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
        var a=null;

        if(count_rows[0].total>0)
        {
            a=true;
        }
        else
        {
            a=false;
        }
        
        var vm = {
            products: rows,
            noProducts: a,
            page_numbers: numbers,
            page_last: numbers.length
        };
        res.render('sanPham/San-pham-theo-hang', vm);
    });
});
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
        var a=null;

        if(count_rows[0].total>0)
        {
            a=true;
        }
        else
        {
            a=false;
        }
       
        var vm = {
            products: rows,
            noProducts: a,
            page_numbers: numbers,
            page_last: numbers.length
        };
        res.render('sanPham/San-pham-theo-hang', vm);
    });
});
router.get('/thong-tin-chi-tiet-san-pham', (req, res) => {
    var p1= categoryRepo.loadid(+req.query.id);
    var p2= categoryRepo.loadloaiid(+req.query.id);
    var p3= categoryRepo.loadnsxidttct(+req.query.id);
    var p4=categoryRepo.loadcomment(+req.query.id);
    Promise.all([p1, p2,p3,p4]).then(([rows, rows1,rows2,rows3])=>
    {
        
        var vm = {
            sp: rows[0],
            sploai: rows1,
            spnsx: rows2,
            cm:rows3
        };
        res.render('sanPham/thong-tin-chi-tiet-san-pham',vm);
    });
});
router.post('/thong-tin-chi-tiet-san-pham/themcomment',(req,res)=>{
    categoryRepo.addcomment(req.body).then(rows=>{
       res.redirect(req.headers.referer);
    });
});

module.exports = router;

