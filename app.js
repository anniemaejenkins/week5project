const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
  secret: 'stuff'
  , resave: false
  , saveUninitialized: true
}));

app.get('/', function(req, res){
  res.render('index', {});
});

app.listen(3000, function(){
  console.log("started stuff!");
});
