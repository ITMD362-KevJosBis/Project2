const currentPageURL = window.location.href;

if (currentPageURL.includes('index.html')) {
    const navigationHeader = document.getElementById('navigation-header');
    navigationHeader.classList.add('darker-navigation-header');
}

document.getElementById("emailForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const confirmationText = document.getElementById("confirmation");

    if (isValidEmail(emailInput.value)) {
        confirmationText.textContent = "Thank you! Your email has been submitted.";
        emailInput.value = "";
    } else {
        confirmationText.textContent = "Please enter a valid email address.";
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
