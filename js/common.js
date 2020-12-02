var isHamActive = false;
var isMobileStyle = false;
var websiteName = 'cerealbeverage';

function commonResizeDo() {
  ww = window.innerWidth;
  wh = window.innerHeight;
  // console.log("ww:" + ww)
  // console.log("wh:" + wh)


  if ((ww <= 960) && !isMobileStyle) {
    isMobileStyle = true;

  } else if (ww > 960 && isMobileStyle) {
    isMobileStyle = false;

  }

}

function preload() {
  var queue = new createjs.LoadQueue();
  var preloadImages = [
    "images/nav_logo.png",
    "images/product_bg.png",
    "images/arrow_left.png",
    "images/arrow_right.png",
    "images/characteristic_hook.png",
    "images/characteristic_num.png",
    "images/characteristic_num_01.png",
    "images/characteristic_num_02.png",
    "images/characteristic_num_03.png",
    "images/characteristic_num_04.png",
    "images/characteristic_pic_01.png",
    "images/characteristic_pic_02.png",
    "images/characteristic_pic_03.png",
    "images/characteristic_pic_04.png",
    "images/characteristic_three_.png",
    "images/drink_icon_01.png",
    "images/drink_icon_02.png",
    "images/drink_pic_01.png",
    "images/drink_pic_02.png",
    "images/header_ham.png",
    "images/header_icon_01.png",
    "images/header_icon_02.png",
    "images/header_icon_03.png",
    "images/header_icon_04.png",
    "images/loading.png",
    "images/loadingbg.png",
  ];
  queue.on("complete", function (event) {
    sessionStorage.setItem('isLoad', 1);
    setTimeout(function () {
      $('.loadingloading').fadeOut(500);
      banner();
    }, 500)
  });
  queue.on("progress", function (event) {
    $('.loadingloading .load_status').text(Math.round(event.progress * 100) + '%');
    $('.loadingloading .loader').css({ 'width': Math.round(event.progress * 100) + '%' });
  });
  queue.on("error", function (event) {
    console.log(event);
  });
  queue.loadManifest(preloadImages);
}

$(document).ready(function () {
  commonResizeDo();
  window.addEventListener('resize', commonResizeDo);

  $('.ham').on('click', function () {
    if (isHamActive) {
      isHamActive = false;
      $(this).removeClass('active');
      $('nav').hide();
    } else {
      isHamActive = true;
      $(this).addClass('active');
      $('nav').show();
    }
  })

  var isLoad = parseInt(sessionStorage.getItem('isLoad'));
  if (!isLoad) {
    $('.loadingloading').show();
    preload();
  }





})




