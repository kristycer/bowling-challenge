'use strict';

describe('Bowling scoresheet', function(){

    var bowling;

beforeEach(function(){
    bowling = new Bowling
    
});

// it('starts at frame 1', function(){
//     expect(bowling.startFrame).toEqual(1)
// });
// it('can move on to another frame', function(){
//     bowling.nextFrame();
//     expect(bowling.nowFrame).toEqual(2);
// })
// it('has a scorecard which stores up to 2 rolls', function(){
//     expect(bowling.scoreCard).toEqual([0, 0]);
// })
// it('starts at first roll', function(){
//     expect(bowling.isFirstRoll()).toBe(true);
// });
// it('can move on to a second roll', function(){
//     bowling.secondRoll();
//     expect(bowling.isFirstRoll()).toBe(false);

// });

it('can display a score based on one roll', function(){
    bowling.roll(7);
    expect(bowling.score()).toBe(7);
    
});

it('score cannot go above 10', function(){
     expect(function(){bowling.roll(11)}).toThrow('Not allowed score');
   });
 
it('can move on to a second frame', function(){
    bowling.roll(7);
    bowling.roll(7);
    expect(bowling.frame()).toBe(2);
});

});


