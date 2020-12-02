// (function ($) {
var count = 0;
var now = -100;
var open_switch = true;
var timer;

function banner() {
  timer = setInterval(right, 5000);
}
function right() {
  stopVideo()
  if (open_switch) {
    open_switch = false;
    clearInterval(timer);
    now -= 100;
    count++;
    //重置豆豆
    for (let i = 0; i < item.length; i++) {
      // item[i].style.backgroundColor = "rgba(0,0,0,.2)";
      item[i].setAttribute('class', 'dot');
    }
    //判斷到最後張
    if (now <= (pic.length - 1) * -100) {
      box.style.transition = ".5s";
      box.style.left = now + "%";
      setTimeout(function () {
        box.style.transition = "0s";
        now = -100;
        box.style.left = now + "%";
        open_switch = true;
      }, 500);
      count = 0;
      // item[count].style.backgroundColor = "rgba(0,0,0,.5)";
      item[count].setAttribute('class', 'dot active');
      banner();
    } else {
      box.style.transition = ".5s";
      box.style.left = now + "%";
      // item[count].style.backgroundColor = "rgba(0,0,0,.5)";
      item[count].setAttribute('class', 'dot active');
      open_switch = true;
      banner();
    }
  }

}
function left() {
  stopVideo()
  if (open_switch) {
    open_switch = false;
    clearInterval(timer);
    now += 100;
    count--;
    //重置豆豆
    for (let i = 0; i < item.length; i++) {
      // item[i].style.backgroundColor = "rgba(0,0,0,.2)";
      item[i].setAttribute('class', 'dot');
    }
    //判斷到最前張
    if (now >= 0) {
      box.style.transition = ".5s";
      box.style.left = now + "%";
      setTimeout(function () {
        box.style.transition = "0s";
        now = (pic.length - 2) * -100;
        box.style.left = now + "%";
        open_switch = true;
      }, 500);
      count = item.length - 1;
      // item[count].style.backgroundColor = "rgba(0,0,0,.5)";
      item[count].setAttribute('class', 'dot active');
      banner();
    } else {
      box.style.transition = ".5s";
      box.style.left = now + "%";
      // item[count].style.backgroundColor = "rgba(0,0,0,.5)";s
      item[count].setAttribute('class', 'dot active');
      open_switch = true;
      banner();
    }
  }
}

function stopVideo() {
  $('iframe').each(function () {
    this.contentWindow.postMessage('{"event": "command", "func": "' + 'stopVideo' + '", "args": ""}', '*');
  });
}

function carouselInit() {
  $('.carousel_arrow').show();
  box = document.getElementById("box");
  pic = document.getElementsByClassName("carousel_item");
  //複製最後到前面
  var lastNode = pic[pic.length - 1].cloneNode(true);
  box.insertBefore(lastNode, pic[0]);
  //複製第二到最後
  var secondNode = pic[1].cloneNode(true);
  box.appendChild(secondNode);

  //初始
  for (var i = 0; i < pic.length - 2; i++) {
    $('.carousel_control').append('<div class="dot"></div>');
  }
  $('.dot').eq(0).addClass('active');
  pic = document.getElementsByClassName("carousel_item");
  item = document.getElementsByClassName("dot");
  box.style.width = 100 * pic.length + "%";
  $('.carousel_item').width((1 / pic.length * 100) + '%')
  document.getElementById("right").addEventListener("click", right);
  document.getElementById("left").addEventListener("click", left);

  //豆豆註冊事件
  for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", function () {
      var times = i - count;
      if (times > 0) {
        for (let j = 0; j < times; j++) {
          right();
        }
      } else if (times < 0) {
        for (let j = 0; j > times; j--) {
          left();
        }
      }
    })
  }
  box.style.left = "-100%";
  // banner();


  $('iframe').on('mouseover', function () {
    clearInterval(timer);
  })
  // $('.iframe_box').on('click', function () {
  //   $(this).find('iframe')[0].src += "&autoplay=1";
  //   clearInterval(timer);
  //   $(this).addClass('play');
  // })
}

$(document).ready(function () {
  if ($('#box .carousel_item').length !== 1) carouselInit();

})

// })($)