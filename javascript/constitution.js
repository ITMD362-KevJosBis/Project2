// This function hides or reveals the content of each article
function articleView(view) {
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
	if (button === "btn-preamble") {
		status = document.getElementById("preamble-content");
		articleView(status);
	} else if (button === "btn-article1") {
		status = document.getElementById("article1-content");
		articleView(status);
	} else if (button === "btn-article2") {
		status = document.getElementById("article2-content");
		articleView(status);
	} else if (button === "btn-article3") {
		status = document.getElementById("article3-content");
		articleView(status);
	} else if (button === "btn-article4") {
		status = document.getElementById("article4-content");
		articleView(status);
	} else if (button === "btn-article5") {
		status = document.getElementById("article5-content");
		articleView(status);
	} else if (button === "btn-article6") {
		status = document.getElementById("article6-content");
		articleView(status);
	} else if (button === "btn-article7") {
		status = document.getElementById("article7-content");
		articleView(status);
	} else if (button === "btn-article8") {
		status = document.getElementById("article8-content");
		articleView(status);
	} else if (button === "btn-article9") {
		status = document.getElementById("article9-content");
		articleView(status);
	}
}

// These are listeners to detect which button was clicked
document.getElementById("btn-preamble").onclick = onClick;
document.getElementById("btn-article1").onclick = onClick;
document.getElementById("btn-article2").onclick = onClick;
document.getElementById("btn-article3").onclick = onClick;
document.getElementById("btn-article4").onclick = onClick;
document.getElementById("btn-article5").onclick = onClick;
document.getElementById("btn-article6").onclick = onClick;
document.getElementById("btn-article7").onclick = onClick;
document.getElementById("btn-article8").onclick = onClick;
document.getElementById("btn-article9").onclick = onClick;