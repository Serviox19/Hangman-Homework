function Letter (){
  this. let;
  this.charac;
  this.appear = false;
  this.letterRender = function(){
    if (this.appear == false) {
      return("_");
    }else{
      console.log(this.charac);
    };
  }
};

module.exports = Letter;