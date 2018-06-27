var express = require('express');
var taiKhoanRepo = require('../repos/taiKhoanRepo');

var router = express.Router();

router.get('/', (req, res) => {
	taiKhoanRepo.loadAdmin().then(rows=>{
		var vm={
			admin:rows[0]
		};
		res.render('lienHe/lien-he',vm);
	});
    
});
router.post('/send', (req, res) => {
	console.log('1');
	taiKhoanRepo.addmessage(req.body).then(rows=>{
		res.redirect('/home');
	});
    
});

module.exports = router;