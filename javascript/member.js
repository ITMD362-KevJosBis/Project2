$(document).ready(function() {
  var currentPageURL = window.location.href;

  $("#emailForm").on("submit", function(event) {
    event.preventDefault();

    var emailInput = $("#email");
    var confirmationText = $("#confirmation");

    if (isValidEmail(emailInput.val())) {
      confirmationText.text("Thank you for your application!");
      emailInput.val("");
      $('#name').val("");
      $('#concern').val("");
    } else {
      confirmationText.text("Please enter a valid email address.");
    }
  });

  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});