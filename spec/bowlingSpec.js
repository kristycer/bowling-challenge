'use strict';

describe('BowlingGame', function(){
    let bowling;

beforeEach(function(){
    bowling = new Bowling();
    
});

it('starts at frame 1', function(){
    expect(bowling.startFrame).toEqual(1)
});
it('can move on to another frame', function(){
    bowling.nextFrame();
    expect(bowling.nowFrame).toEqual(2);
})
it('has a scorecard which stores up to 2 rolls', function(){
    expect(bowling.scoreCard).toEqual([0, 0]);
})
it('starts at first roll', function(){
    expect(bowling.isFirstRoll()).toBe(true);
});
it('can move on to a second roll', function(){
    bowling.secondRoll();
    expect(bowling.isFirstRoll()).toBe(false);

});
// describe('scores', function(){
//     it('gives a score after rolling', function(){
//         bowling.isFirstRoll(2);
//         bowling.secondRoll(3);
//         bowling.scoreCard;
//         expect(bowling.roll()).toEqual([2, 3]);
//     })
// })
});

