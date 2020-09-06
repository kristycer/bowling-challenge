$(document).ready(function () {
    var bowling = new Bowling();

updateFrame();
$('#now-frame').click(function () {
    bowling.nowFrame();
    updateFrame();
  });

  function updateFrame() {
    $('#frame').text(bowling.frame);
    $('#frame').attr('class', bowling.nowFrame());
  }
});

  