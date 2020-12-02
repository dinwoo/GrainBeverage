

function set00() {
  TweenMax.set('.title_box', {
    opacity: 0,
    // x: -90,
    rotationY: 90
  });
  TweenMax.set('.milk_01', {
    opacity: 0,
    // x: -90,
    y: 100
  });
  TweenMax.set('.milk_02', {
    opacity: 0,
    // x: -90,
    y: 100
  });
  TweenMax.set('.tea_01', {
    opacity: 0,
    // x: -90,
    y: 100
  });
  TweenMax.set('.tea_02', {
    opacity: 0,
    // x: -90,
    y: 100
  });
}

function act01() {
  TweenMax.to('.title_box', .5, {
    opacity: 1,
    rotationY: 0,
    delay: 0
  });
  TweenMax.to('.milk_01', 1, {
    opacity: 1,
    x: 0,
    y: 0,
    delay: .5
  });
  TweenMax.to('.milk_02', 1, {
    opacity: 1,
    x: 0,
    y: 0,
    delay: .5
  });
  TweenMax.to('.tea_01', 1, {
    opacity: 1,
    x: 0,
    y: 0,
    delay: .5
  });
  TweenMax.to('.tea_02', 1, {
    opacity: 1,
    x: 0,
    y: 0,
    delay: .5
  });
}


$(document).ready(function () {
  set00();
  act01();
})