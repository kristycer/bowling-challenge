'use strict';

var Bowling = function(){
   this._finalScore = 0;
   this._rolls = [];
   this._scores = [];

 };

Bowling.prototype.roll = function(rollScore){
      if (rollScore > 10) throw 'Not allowed score';
     this._rolls.push(rollScore);
     this.rollDone(rollScore);
 };

 Bowling.prototype.finalScore = function(){
//    return this._finalScore;
   var total = this._scores.reduce(function(a, b){
         return a + b

   });
   return total;
 };
 Bowling.prototype.frame = function(){
     return this._scores.length + 1;

 };

 Bowling.prototype.rollDone = function(rollScore){
//    

     //normal game
     if (rollScore == 10){
            this._scores.push(rollScore);

     // spare 
     } else if (rollScore + this._rolls[this._rolls.length] === 10){
        this._scores.push(rollScore);

      // strike
     } else {
       this._scores.push(rollScore);
     };
 };