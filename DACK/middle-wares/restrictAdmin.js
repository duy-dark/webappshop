module.exports = (req, res, next) => {
    if (req.session.isAdmin === false) {
         res.render('error/error404');
    } else {
        next();
    }
}