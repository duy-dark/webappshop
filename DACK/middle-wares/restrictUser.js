module.exports = (req, res, next) => {
    if (req.session.isAdmin === true) {
        res.redirect('/dash-board/quan-li-thong-tin-shop');
    } else {
        next();
    }
}