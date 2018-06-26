var express = require('express');
var productRepo = require('../repos/categoryRepo'),
    cartRepo = require('../repos/cartRepo');

var router = express.Router();

router.get('/', (req, res) => {
	var vm = {
        items: req.session.cart
    };
    res.render('gioHang/gio-hang',vm);
});
router.post('/add', (req, res) => {
	console.log('1');
    categoryRepo.loadid(req.body.proId).then(rows => {
        var item = {
            product: rows[0],
            quantity: +req.body.quantity,
            amount: rows[0].Price * +req.body.quantity
        };
        cartRepo.add(req.session.cart, item);
        console.log(req.session.cart);
        res.redirect(req.headers.referer);
    });
});
router.post('/remove', (req, res) => {
    cartRepo.remove(req.session.cart, +req.body.proId);
    res.redirect(req.headers.referer);
});

module.exports = router;