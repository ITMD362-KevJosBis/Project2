function myFunction() {
  var x = document.getElementById("nav-navigation");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});