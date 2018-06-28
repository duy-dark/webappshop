var express = require('express'),
    sha256 = require('crypto-js/sha256'),
    moment = require('moment');

var restrict = require('../middle-wares/restrict');
var restrictDangNhap = require('../middle-wares/restrictDangNhap');
var restrictUser = require('../middle-wares/restrictUser');
var taiKhoanRepo = require('../repos/taiKhoanRepo');
var categoryRepo = require('../repos/categoryRepo');

var router = express.Router();


router.get('/dangKi', (req, res) => {
    res.render('taiKhoan/dangKi');
});

router.post('/dangKi', (req, res) => {

    var gt=(req.body.fgioiTinh==='nam')?'Nam':'Nữ';
    var user = {
        TEN:req.body.fhoTen,
        PASSWORD: sha256(req.body.fpasswordDk).toString(),
        USERNAME:req.body.fuserNameDk,
        GIOITINH:gt,
        NGAYSINH:req.body.fngaySinh,
        DTHOAI:req.body.fsdt,
        EMAIL:req.body.femail,
        CMND:req.body.fcmnd,
        DCHI:req.body.fdiachi
    };

    taiKhoanRepo.checkExist(user).then(rows => {
    if (rows.length !== 0) {
         var vm = {
                        isExist: true
                    };
        res.render('taiKhoan/dangKi',vm);
    }
    else{    
            taiKhoanRepo.add(user).then(value => {
            res.redirect('/taiKhoan/dangKiThanhCong');
            });
    }  
    });

});
router.get('/dangNhap',restrictDangNhap, (req, res) => {
    res.render('taiKhoan/dangNhap');
});

router.post('/dangNhap', (req, res) => {
    var user = {
        USERNAME: req.body.fuserName,
        PASSWORD: sha256(req.body.fpassword).toString()
    };
    taiKhoanRepo.login(user).then(rows => {
        var url='/';
        if (rows.length > 0) {
            req.session.isLogged = true;
            req.session.curUser = rows[0];
            req.session.cart = [];
            var t=''+req.query.retUrl;
            if(t.indexOf('/gio-hang/add')===-1){
            if (req.query.retUrl) {
                url = req.query.retUrl;
            }
            }


            res.redirect(url);
        } else {
            taiKhoanRepo.checkAdmin(user).then(rows2 => {
                if (rows2.length > 0) {
                    req.session.isLogged = true;
                    req.session.isAdmin=true;
                     req.session.curUser = rows2[0];
                    if (req.query.retUrl) {
                        url = req.query.retUrl;
                    }
                    res.redirect(url);
                }
                else{

                    var vm = {
                        showError: true
                    };
                    res.render('taiKhoan/dangNhap', vm);
                }
            });


        }
    });
});
router.get('/dangKiThanhCong', (req, res) => {
    res.render('taiKhoan/dangKiThanhCong');
});
router.post('/dangXuat', (req, res) => {
    req.session.isLogged = false;
    req.session.isAdmin=false;
    req.session.curUser = null;
    req.session.cart = [];
    if(req.headers.referer.indexOf("/taiKhoan/yeuCauDangXuat") > -1){
        res.redirect('/');
    }else{
    res.redirect(req.headers.referer);}
});

router.get('/profile', restrict,restrictUser, (req, res) => {

  res.render('taiKhoan/profile');
       

   
});
router.post('/profile/update', (req, res) => {
    taiKhoanRepo.updateaccount(req.body).then(rows=>{
         taiKhoanRepo.loadaccount(req.session.curUser.MAKH).then(rows2 => {     
            req.session.curUser = rows2[0];       
            res.redirect(req.headers.referer);         
        });
    });
    
});
router.get('/doimatkhau', (req, res) => {
    var vm={
        MAKH:req.query.id
    };
   res.render('taiKhoan/doimatkhau',vm);
});
router.post('/profile/updatematkhau', (req, res) => {
    var pold=req.body.PASSOLD;
    var pnew=req.body.PASSNEW;
    var pnew1=req.body.PASSNEW1;
    taiKhoanRepo.loadaccount(req.body.MAKH).then(rows => {
        if(rows[0].PASSWORD===sha256(pold).toString() && pnew===pnew1)
        {
            taiKhoanRepo.updatematkhau(sha256(pnew).toString(),req.body.MAKH).then(rows1=>{
                req.session.curUser = rows[0];
                res.redirect('/taiKhoan/profile');
            });
        }
        else {
            var vm={
                NHAPSAI: true
            };
            res.render('taiKhoan/doimatkhau',vm);
        }
        
    });
    
});
router.get('/yeuCauDangXuat', restrict,(req, res) => {
    res.render('taiKhoan/dangXuat');
});

module.exports = router;