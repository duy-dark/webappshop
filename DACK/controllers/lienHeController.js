var express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
    res.render('lienHe/lien-he');
});


module.exports = router;