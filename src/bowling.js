'use strict';

class Bowling {
    constructor(){
        this.startFrame = 1;
         this.nowFrame = 1;
         this.scoreCard = [0, 0]
         this.firstRoll = true;
         this.sumRolls = [];
    
    }

nextFrame(){
this.nowFrame += 1
}
nowFrame(){
    return this.nowFrame
}
isFirstRoll(){
    return this.firstRoll == true;
}
secondRoll(){
 this.isFirstRoll() ? this.firstRoll = 2 : this.firstRoll = 1;
}
// sumRolls(){

// }
addRollScore(){
 this.addRollScore;
 this.sumRolls; 
}
roll(){
this.scoreCard === [2, 3]
}
}