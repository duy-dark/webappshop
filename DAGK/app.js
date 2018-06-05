var express = require('express');
var exphbs = require('express-handlebars');
var express_handlebars_sections = require('express-handlebars-sections');
var bodyParser = require('body-parser');
var path = require('path');
var wnumb = require('wnumb');
var session = require('express-session');


var homeController = require('./controllers/homeController'),
	gioHangController=require('./controllers/gioHangController'),
	lienHeController=require('./controllers/lienHeController'),
    dashBoardController=require('./controllers/dashBoardController'),
    sanPhamController=require('./controllers/sanPhamController');


    

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

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.use('/home', homeController);
app.use('/gio-hang', gioHangController);
app.use('/lien-he', lienHeController);
app.use('/dash-board',dashBoardController);
app.use('/sanpham',sanPhamController);

app.listen(3000, () => {
    console.log('Site running on port 3000');
});