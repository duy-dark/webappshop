module.exports = (req, res, next) => {
    if (req.session.isLogged === true) {
        res.redirect('/taiKhoan/yeuCauDangXuat');
    } else {
        next();
    }
}