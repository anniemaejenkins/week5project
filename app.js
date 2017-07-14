const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs');
const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");
const app = express();

let gameWord = words[Math.floor(Math.random()*words.length)];;
let gameWordArray = [];
let count = 0;

for(var i = 0; i < gameWord.length; i++){
  gameWordArray.push('');
}

console.log('gameWord', gameWord);
// console.log('words', words);
app.use(express.static('public'));

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
  res.render('index', { gameWord: gameWordArray });
});


app.post('/', function(req, res){
  // let input = document.getElementById('letter').value;

  if(gameWord[i] == "a"){
    gameWordArray[i] == "a";
  }
  // get the letter
  // e.g. letter is a
  // see if the letter is in the gameWord, and find position if it is
  // e.g. gameWord is apple, a is the first letter
  // update gameWordArray to have that letter in the correct postion
  // e.g gameWordArray[0] is now equal to 'a'
  res.redirect('/');
});

app.listen(3000);
