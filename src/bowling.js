'use strict';

class Bowling {
    constructor(){
        this.startFrame = 1;
         this.nowFrame = 1;
         this.scoreCard = [0, 0]
         this.firstRoll = true;
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
}