const path = require('path'),
    express = require('express'),
    twig = require('twig'),
    bodyParser = require('body-parser');

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('', (req, res) => {
    res.render('home.twig')
});


app.listen(3000);