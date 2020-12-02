var switchArr = [false, false, false];
var owl;


function isMobile() {
  var a = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s)|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg(g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
}
function resizeDo() {
  ww = window.innerWidth;
  wh = window.innerHeight;
  // console.log("ww:" + ww)
  // console.log("wh:" + wh)

  if ((ww <= 559) && !switchArr[0]) {
    switchArr = [true, false, false];
    // $('.arrow').show();
    setCarousel(2)
  } else if ((ww <= 768) && ww > 559 && !switchArr[1]) {
    switchArr = [false, true, false];
    // $('.arrow').show();
    setCarousel(3)
  } else if (ww > 768 && !switchArr[2]) {
    switchArr = [false, false, true];
    // $('.arrow').show();
    setCarousel(4)
  }

}

function setCarousel(num) {
  if ($('#box .item').length > num) {
    $('#box').addClass("owl-carousel");
    $('.carousel_view').removeClass("none_carousel")
    $('.other_product .arrow').css({ "display": "inline-block" });

    owl = $('.owl-carousel').owlCarousel({
      loop: false,
      margin: 10,
      responsiveClass: true,
      responsive: {
        320: {
          items: 2,
          nav: true
        },
        560: {
          items: 3,
          nav: false
        },
        768: {
          items: 4,
          nav: true,
          loop: false,
          margin: 30
        }
      }
    })

    $('.arrow_right').click(function () {
      owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.arrow_left').click(function () {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      owl.trigger('prev.owl.carousel', [300]);
    })
  } else {
    $('#box').trigger('destroy.owl.carousel').removeClass('owl-carousel');
    $('.other_product .arrow').css({ "display": "none" });
    $('.carousel_view').addClass("none_carousel");
  }
}

$(document).ready(function () {
  resizeDo();
  window.addEventListener('resize', resizeDo);


  /* Line 分享按鈕 */
  //桌機
  if (isMobile()) {
    $('#line_btn').on('click', function (e) {
      e.preventDefault();
      window.open('line://msg/text/' + encodeURIComponent(window.location.href), "_blank", "toolbar=yes,location=yes,directories=no,status=no, menubar=yes,scrollbars=yes,resizable=no, copyhistory=yes,width=600,height=400");
    });
  } else {
    $('#line_btn').on('click', function (e) {
      e.preventDefault();
      window.open('https://lineit.line.me/share/ui?url=' + encodeURIComponent(window.location.href), "_blank", "toolbar=yes,location=yes,directories=no,status=no, menubar=yes,scrollbars=yes,resizable=no, copyhistory=yes,width=600,height=400");
    });
  }

  /* FB */
  $('#fb_btn').on('click', function (e) {
    e.preventDefault();
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href) + '&t=short%20title', "_blank", "width=600,height=400");
    // window.open('https://www.facebook.com/sharer/sharer.php?u=https://www.google.com&t=short%20title',"_blank","width=600,height=400");
  });
})