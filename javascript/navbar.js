//NOTE: For nav bar to appear correctly when switching between mobile and desktop, the page must refresh
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
  if ($(window).width() > 600) {
    $('#hamburger').hide();
    $('#nav-navigation').css( {
      "display": "block"
    });
  }
});
$(window).resize(function() {
  if ($(window).width() > 600) {
    $('#hamburger').hide();
    $('#nav-navigation').css( {
      "display": "block"
    });
  } else {
    $('#hamburger').show();
    $('#nav-navigation').css( {
      "display": "none"
    });
  }
});