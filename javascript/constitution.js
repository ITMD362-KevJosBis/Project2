// This function hides or reveals the content of each article
function articleView(view) {
    //var status = document.getElementsByClassName("btn-articles");
    //var status2 = document.getElemen
    if (view.style.display === "block") {
        view.style.display = "none";
    } else {
        view.style.display = "block";
    }
  }

// This functiond finds the article button that was clicked in the constitution section
const onClick = function() {
	// Create variable that contains the display status of an article
	var status;
	// Create variable to get the id of the button that was clicked
	var button = this.id;

	// Find which button was clicked
	if (button === "btn-article1") {
		status = document.getElementById("article1");
		articleView(status);
	} else if (button === "btn-article2") {
		status = document.getElementById("article1");
		articleView(status);
	}
}

// These are listeners to detect which button was clicked
document.getElementById("btn-article1").onclick = onClick;
document.getElementById("btn-article2").onclick = onClick;