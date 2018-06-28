var db = require('../fn/db');
 var config = require('../config/config');
// cart => [
// 	{
// 		product: {},
// 		quantity: 2,
//		amount: 999
// 	},
// ]

exports.getNumberOfItems = cart => {
    if (!cart) {
        return 0;
    }

    var n = 0;
    for (var i = cart.length - 1; i >= 0; i--) {

        n += cart[i].quantity;
    }

    return n;
}

exports.add = (cart, item) => {
    for (var i = cart.length - 1; i >= 0; i--) {
        if (cart[i].product.MASP === item.product.MASP) {
            cart[i].quantity += item.quantity;
            cart[i].amount += item.amount;
            return;
        }
    }

    cart.push(item);
}

exports.remove = (cart, proId) => {
    for (var i = cart.length - 1; i >= 0; i--) {
        if (proId === cart[i].product.MASP) {
            cart.splice(i, 1);
            
            return;
        }
    }
}
exports.edit = (cart, proId,quantity) => {
    for (var i = cart.length - 1; i >= 0; i--) {
        if (proId === cart[i].product.MASP) {
            cart[i].quantity=quantity;
            cart[i].amount = cart[i].product.GIABAN*quantity;
            return;
        }
    }
}
exports.cartSum = cart => {
    if(!cart){return 0;}
    var sum=0;
    for (var i = cart.length - 1; i >= 0; i--) {
        sum+=cart[i].amount;
    }
    return sum;
}
exports.saveCart=(cart,user,tttt)=>{
    config.MAGH_LAST+=1;
    for(i=0;i<cart.length;i++){
    var sql = `insert into giohang(MAGH, MASP, SOLUONG, THANHTIEN) values(${config.MAGH_LAST}, ${cart[i].product.MASP},${cart[i].quantity},'${cart[i].amount}') `;
    db.save(sql);
    }
    for(i=0;i<cart.length;i++){
    var n_slc=cart[i].product.SOLUONGSPCON-cart[i].quantity,
        n_sldb=cart[i].product.SOLUONGSPDABAN+cart[i].quantity;
    var sql = `update sanpham set SOLUONGSPCON=${n_slc},SOLUONGSPDABAN=${n_sldb}
                where MASP= ${cart[i].product.MASP}`;
    db.save(sql);
    }
    var d= new Date();
    var strDate = d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate();
    var tt='Chưa giao hàng';
    var sum=0;
    for (var i = cart.length - 1; i >= 0; i--) {
        sum+=cart[i].amount;
    }
    var sql = `insert into quanlyhoadon(IDHD, IDKH, NGAYDATHANG, TINHTRANG,TONGTIEN,NGUOINHAN,SDT,DIACHI) 
        values(${config.MAGH_LAST}, ${user.MAKH},'${strDate}','${tt}', ${sum},'${tttt.NGUOINHAN}','${tttt.SDT}','${tttt.DIACHI}')`;
    db.save(sql);
}