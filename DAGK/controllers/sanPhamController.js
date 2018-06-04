var express = require('express'),
    categoryRepo = require('../repos/categoryRepo');

var router = express.Router();

router.get('/thong-tin-chi-tiet-san-pham', (req, res) => {
    categoryRepo.loadid(+req.query.id).then(rows =>{
        var vm={
            sp:rows[0]
        }
        res.render('sanPham/thong-tin-chi-tiet-san-pham',vm);
    });
});


module.exports = router;

