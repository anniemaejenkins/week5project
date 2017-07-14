const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const fs = require('fs');

let context = {
  letters: [""],
  correctLetters: [""],
  wrongLetters: " ",
  replaceLetter: [],
  lettersUsed: [],
  guessesLeft: 8,
  duplicate: " ",
  gameOver: ""
};

const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");




module.export = {
  renderIndex: function (req, res){
    context.letters = [""];
    context.correctLetters = [""];
    context.gameOver = "";
    context.lettersUsed = [];
    context.guessesLeft = 8;

    let gameWord = words[Math.floor(Math.random()*words.length)];;
    let randomWord = words[gameWord];
    let letters = randomWord.split("");
    let correctLetters = randomWord.split("");


    res.render('index', context);
  },

};
