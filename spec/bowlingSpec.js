'use strict';

describe('BowlingGame', function(){
    var bowling;

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
});

