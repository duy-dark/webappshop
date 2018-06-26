var categoryRepo = require('../repos/categoryRepo')
	cartRepo = require('../repos/cartRepo');

module.exports = (req, res, next) => {

    if (req.session.isLogged === undefined) {
        req.session.isLogged = false;
    } 
    if (req.session.isAdmin === undefined) {
        req.session.isAdmin = false;
    } 
    /*
    var p1=categoryRepo.loadALLLOAI();
    var p2=categoryRepo.loadALLNSX();
   
    Promise.all([p1, p2]).then(([rows, rows1])=>{

    	res.locals.layoutVM = {
            LOAI: rows,
            NSX: rows1,
            isLogged: req.session.isLogged,
            curUser: req.session.curUser,
            cartSummary: cartRepo.getNumberOfItems(req.session.cart)
        }

        next();
    });*/
    res.locals.layoutVM = {
       curUser: req.session.curUser,
       isLogged:req.session.isLogged,
       isAdmin:req.session.isAdmin
    }
    next();
}