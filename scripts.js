// See this pen in context:
// http://viget.com/extend/getting-started-with-inline-svg
window.addEventListener('load', function() {
    console.log('its loaded')
    var draw = document.getElementById('shape');
    console.log(draw);


    var loghi = function () {
        console.log('hi')
    };
    var rotate = function() {
        console.log('hi2')
      var circle = document.getElementById('circle');
      circle
        .animate(3000, '-')
        .during(function(pos, morph) {
          this.transform({
            rotation: morph(0, 359)
          });
          var first = pos < 0.5;
          this.attr({
            'stroke-opacity': first ? morph(0.5, 1) : morph(1, 0.5),
            'stroke-width': first ? morph(20, 40) : morph(40, 20)
          });
        });
    };
    draw.addEventListener("click", loghi);
    console.log(rotate)
    draw.addEventListener("click", rotate);
})

var circle1 = draw.circle(130).attr({
  cx: 125,
  cy: 125,
  fill: 'none',
  stroke: "#fa5",
  'stroke-width': 40,
  'stroke-dasharray': 4
});

var circle2 = draw.circle(130).attr({
  cx: 125, 
  cy: 125,
  fill: '#006791'
});

var animateFill = function() {
  circle2
    .animate(3000).attr({
      fill: '#fa5'
    })
    .after(function(){
      this.animate(3000).attr({
        fill: '#006791'
      });
    });
};



rotate();
window.setInterval(rotate, 3000);

animateFill();
window.setInterval(animateFill, 6000);

