

function set00() {
  TweenMax.set('.left_pic', {
    // opacity: 0,
    x: -200,
    rotationZ: -30
  });
  TweenMax.set('.right_pic', {
    // opacity: 0,
    x: 200,
    rotationZ: 30,
  });
}

function act01() {
  TweenMax.to('.left_pic', .5, {
    opacity: 1,
    x: 0,
    rotationZ: 0,
    delay: 0
  });
  TweenMax.to('.right_pic', .5, {
    opacity: 1,
    x: 0,
    rotationZ: 0,
    delay: 0
  });
}


$(document).ready(function () {
  set00();
  act01();
})