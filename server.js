const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const port = process.env.PORT || 3000;

let app = express();

if(port === 3000){
	app.use(express.static(__dirname + '/assets'));
}
else{
	app.use(express.static(process.cwd() + '/assets'));
}

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const routes = require('./controllers/fighters_controller.js');

app.use('/', routes);

app.listen(port);