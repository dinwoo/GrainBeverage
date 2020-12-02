
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}
function doCookieSetup(name, value) {
  var expires = new Date();
  //有效時間保存 2 天 2*24*60*60*1000
  expires.setTime(expires.getTime() + 604800000);
  document.cookie = name + "=" + escape(value) + ";expires=" + expires.toGMTString()
}
$(document).ready(function () {
  if (parseInt(getCookie(websiteName)) === 1) {
    doCookieSetup(websiteName, 1)
  } else {
    $('.cookie_box').show();
  }
  $(document).on('click', function () {
    // document.cookie = websiteName + "=1";
    doCookieSetup(websiteName, 1)
    $('.cookie_box').hide();
  })
})