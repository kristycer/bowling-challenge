'use strict';

var Bowling = function(){
   this._score = 0;
   this._frame = 1;
   this._rollsThisFrame = 0;
 };
// nextFrame(){
// this.nowFrame += 1
// }
// nowFrame(){
//     return this.nowFrame
// }
// isFirstRoll(){
//     return this.firstRoll == true;
// }
// secondRoll(){
//  this.isFirstRoll() ? this.firstRoll = 2 : this.firstRoll = 1;
// }
// // sumRolls(){

// }
Bowling.prototype.roll = function(rollScore){
   if (rollScore <= 10){
     this._score += rollScore;
     this._rollsThisFrame ++;
     this.rollCounted();

   } else {
     throw 'Not allowed score';
   };
 };

 Bowling.prototype.score = function(){
   return this._score;
 };

 Bowling.prototype.frame = function(){
     return this._frame;

 };

 Bowling.prototype.rollCounted = function(){
     if (this._rollsThisFrame < 2 ){
         this._rollsThisFrame ++;
     } else {
         this._frame ++;
     };
 };