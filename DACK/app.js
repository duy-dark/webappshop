var express = require('express');
var exphbs = require('express-handlebars');
var express_handlebars_sections = require('express-handlebars-sections');
var bodyParser = require('body-parser');
var path = require('path');
var wnumb = require('wnumb');
var  moment = require('moment');
var session = require('express-session');


var handleLayoutMDW = require('./middle-wares/handleLayout');
var handle404MDW = require('./middle-wares/handle404');
var restrict = require('./middle-wares/restrict'),
    restrictAdmin= require('./middle-wares/restrictAdmin');

var homeController = require('./controllers/homeController'),
	gioHangController=require('./controllers/gioHangController'),
	lienHeController=require('./controllers/lienHeController'),
    dashBoardController=require('./controllers/dashBoardController'),
    sanPhamController=require('./controllers/sanPhamController'),
    taiKhoanController=require('./controllers/taiKhoanController');


    

var app = express();

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: 'views/_layouts/',
    helpers: {
        section: express_handlebars_sections(),
        number_format: n => {
            var nf = wnumb({
                thousand: ','
            });
            return nf.to(n);
        },
        inc: n=>{return (n+1);},
        time_format: n=>{
            return moment(n).format('YYYY-MM-DD');
        }
    }
}));
app.set('view engine', 'hbs');

app.use(express.static(path.resolve(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
   
}));
app.use(handleLayoutMDW);
app.get('/', (req, res) => {
    res.redirect('/home');
});

app.use('/home', homeController);
app.use('/lien-he', lienHeController);
app.use('/dash-board',restrict,restrictAdmin,dashBoardController);
app.use('/sanpham',sanPhamController);
app.use('/gio-hang',restrict,gioHangController);
app.use('/taiKhoan',taiKhoanController);

app.use(handle404MDW);

app.listen(3000, () => {
    console.log('Site running on port 3000');
});