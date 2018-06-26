var express = require('express'),
	categoryRepo = require('../repos/categoryRepo');

var router = express.Router();

router.get('/', (req, res) => {
    
    var p1=categoryRepo.loadspmoinhat();
	var p2=categoryRepo.loadxemnhieunhat();
	var p3=categoryRepo.loadbanchay();
	Promise.all([p1, p2, p3]).then(([rows,rows1,rows2]) =>{
        var vm = {
            moi: rows,
            banchay: rows2,
            xemnhieu: rows1
        };
        res.render('home/index', vm);
    });
});

module.exports = router;