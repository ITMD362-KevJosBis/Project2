function myFunction() {
    var links = document.getElementsByClassName("nav-navigation");
    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
  }