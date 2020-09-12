$(document).ready(function() {
    var bowling = new Bowling();


    $(document).ready(function() {updateTemperature();

$('#roll').click(function () {
        bowling.roll();
        updateRoll();
      });
      
$('#finalScore').click(function () {
        bowling.finalScore();
        updateFinalScore();
      });   

$('#frame').click(function () {
        bowling.frame();
        updateFrame();
      });
      