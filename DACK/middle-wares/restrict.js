module.exports = (req, res, next) => {
    if (req.session.isLogged === false) {
        res.redirect('/taiKhoan/dangNhap?retUrl=' + req.originalUrl);
    } else {
        next();
    }
}