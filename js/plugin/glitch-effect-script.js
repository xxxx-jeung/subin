$(window).load(function(){
  // Glitch Timeline Function
  var filter = document.querySelector('.svg-sprite');
  var turb = document.querySelector('#filter feTurbulence');
  var turbVal = { val: 0.000001 };
  var turbValX = { val: 0.000001 };

  var glitchTimeline = function() {
      var timeline = new TimelineMax({
          repeat: -1,
          repeatDelay: 2,
          paused: true,
          onUpdate: function () {
              turb.setAttribute('baseFrequency', turbVal.val + ' ' + turbValX.val);
          }
      });
  
      timeline
          .to(turbValX, 0.1, { val: 0.5 })
          .to(turbVal, 0.1, { val: 0.02 });
      timeline
          .set(turbValX, { val: 0.000001 })
          .set(turbVal, { val: 0.000001 });
      timeline
          .to(turbValX, 0.2, { val: 0.4 }, 0.4)
          .to(turbVal, 0.2, { val: 0.002 }, 0.4);
      timeline
          .set(turbValX, { val: 0.000001 })
          .set(turbVal, { val: 0.000001 });
  
      return {
          start: function() {
              timeline.play(0);
          },
          stop: function() {
              timeline.pause();
          }
      };
  };
  
  btnGlitch = new glitchTimeline();
  
  setInterval(function() {
    btnGlitch.start();
  }, 3000);
});