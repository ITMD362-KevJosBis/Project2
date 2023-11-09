$('#hamburger').on("click", function () {
  var x = $("#nav-navigation");
  if (x.css("display") === "block") {
    x.css("display", "none");
  } else {
    x.css("display", "block");
  }
});
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});