var express = require('express');
var categoryRepo = require('../repos/categoryRepo'),
    cartRepo = require('../repos/cartRepo');

var router = express.Router();

router.get('/', (req, res) => {
	var vm = {
        items: req.session.cart
    };
    res.render('gioHang/gio-hang',vm);
});
router.post('/add', (req, res) => {
    categoryRepo.loadid(req.body.proId).then(rows => {
        var item = {
            product: rows[0],
            quantity: +req.body.quantity,
            amount: rows[0].GIABAN * +req.body.quantity
        };
        cartRepo.add(req.session.cart, item);
        res.redirect(req.headers.referer);
    });
});
router.post('/remove', (req, res) => {
    cartRepo.remove(req.session.cart, +req.body.proId);
    res.redirect(req.headers.referer);
});
router.post('/edit', (req, res) => {
    cartRepo.edit(req.session.cart, +req.body.proId ,+req.body.quantity);
    res.redirect(req.headers.referer);
});
module.exports = router;