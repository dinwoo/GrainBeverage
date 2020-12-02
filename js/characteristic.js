

function set00() {
  TweenMax.set('.pic_01', {
    opacity: 0,
    // x: -90,
    y: 100
  });
  TweenMax.set('.pic_02_01', {
    opacity: 0,
    // x: -90,
    y: 100
  });
  TweenMax.set('.pic_02_02', {
    opacity: 0,
    // x: -90,
    y: 100
  });
  TweenMax.set('.pic_03_01', {
    opacity: 0,
    // x: -90,
    y: 100
  });
  TweenMax.set('.pic_03_02', {
    opacity: 0,
    // x: -90,
    y: 100
  });
  TweenMax.set('.pic_03_03', {
    opacity: 0,
    // x: -90,
    y: 100
  });
  TweenMax.set('.pic_04', {
    opacity: 0,
    // x: -90,
    y: 100
  });

}

function act01() {
  TweenMax.to('.pic_01', 1, {
    opacity: 1,
    x: 0,
    y: 0,
    // delay: 1
  });
  TweenMax.to('.pic_02_01', 1, {
    opacity: 1,
    x: 0,
    y: 0,
    delay: .3
  });
  TweenMax.to('.pic_02_02', 1, {
    opacity: 1,
    x: 0,
    y: 0,
    delay: .6
  });
  TweenMax.to('.pic_03_01', 1, {
    opacity: 1,
    x: 0,
    y: 0,
    delay: .9
  });
  TweenMax.to('.pic_03_02', 1, {
    opacity: 1,
    x: 0,
    y: 0,
    delay: 1.2
  });
  TweenMax.to('.pic_03_03', 1, {
    opacity: 1,
    x: 0,
    y: 0,
    delay: 1.5
  });
  TweenMax.to('.pic_04', 1, {
    opacity: 1,
    x: 0,
    y: 0,
    delay: 1.8
  });
}


$(document).ready(function () {
  set00();
  act01();
})