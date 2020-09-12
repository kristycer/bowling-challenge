$(document).ready(function() {
    var bowling = new Bowling();


    $(document).ready(function() {
      
      $('.submit').on('click', function(event) {
        event.preventDefault();
        scorecard.nextFrame();
        scorecard.latestFrame().knocksPins($('#knocked-pins').val());
        $('#total-score').text(scorecard.updateScore());
    
        if (scorecard.latestFrame() === scorecard.frames[0]) {
          $('#score1').text(scorecard.calcFrameScore(0));
          if(scorecard.frames[0].rolls === 1) {
            $('#roll1').text(scorecard.frames[0].knockedPins(0));
          }
          if(scorecard.frames[0].rolls === 0) {
            $('#roll2').text(scorecard.frames[0].knockedPins(1));
          }
        }