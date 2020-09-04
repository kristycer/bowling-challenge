'use strict';

describe('BowlingGame', function(){
    var bowling;

beforeEach(function(){
    bowling = new Bowling();
    
});

it('starts at frame 1', function(){
    expect(bowling.startFrame).toEqual(1)
});

});

