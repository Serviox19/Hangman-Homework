var Letter = require("./letter.js");

function word (wrd){
  this.word = wrd;
  this.lets = [];
  this.found = false;
  this.getLets = function(){
    for (var i = 0; i < this.word.length; i++) {
      var wordLetter = Letter(this.charac);
    }
      console.log(this.lets);
  }

  this.checkIfLetterFound = function(guessLetter){
    var = whatToReturn = 0;
    for (var i = 0; i < this.lets.length; i++) {
      if (Letter.charac = guessLetter) {
        Letter.appear = true;
        whatToReturn = ++;
      }
        return whatToReturn;
    }
  }

  this.didWeFindTheWord = function(){
    this.lets.every = function(curLet){
      if (curLet.appear === true) {
        this.found = true;
      }
    }
  }

  this.wordRender = function(){
    var str = "";
    for (var i = 0; i < this.lets.length; i++) {
      str += Letter.letterRender(this.lets[i]);
    };
  }
}

module.exports = Word;