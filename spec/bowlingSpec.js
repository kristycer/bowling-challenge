'use strict';

describe('Bowling scoresheet', function(){


    describe('can incerase a frame', function(){

    var bowling;

    beforeEach(function(){
    bowling = new Bowling
    
    });


 
it('can move on to a second frame when strike', function(){
    bowling.roll(10);
    expect(bowling.frame()).toBe(2);
    });

it('can move on to a second frame when normal game', function(){
    bowling.roll(3);
    bowling.roll(2);
    expect(bowling.frame()).toBe(2);
    });

it('can move on to a second frame when spare', function(){
    bowling.roll(5);
    bowling.roll(5);
    expect(bowling.frame()).toBe(2);
    });
});


    describe('score', function(){

    var bowling;
    beforeEach(function(){
    bowling = new Bowling

    });

it('can display a score from a single roll', function(){
    bowling.roll(3);
    expect(bowling.finalScore()).toBe(3);
    
    });

it('can display a score from a normal game', function(){
    bowling.roll(3);
    bowling.roll(2)
    expect(bowling.finalScore()).toBe(5);
    
    });

it('calculates a score from a strike', function(){
    bowling.roll(10);
    expect(bowling.finalScore()).toBe(10);
    });

it('can displays a score from a strike and spare at once', function(){
    bowling.roll(10);
    bowling.roll(5);
    bowling.roll(5);
    expect(bowling.finalScore()).toBe(20);
    
    });

});

    describe('cannot do certain things', function(){

    var bowling;
    beforeEach(function(){
    bowling = new Bowling

    });

it('score cannot go above 10', function(){
    expect(function(){bowling.roll(12)}).toThrow('Not allowed score');
   
    });
 });
});