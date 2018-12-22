var showModal = 0;
function showMediaModal(imglink) {
	var modal = document.getElementById("media-modal");
	var modalImage = document.getElementById("media-modal-content");

	if (showModal == 1) {
		modal.style.display = "none";
		showModal = 0;
	} else {
		modal.style.display = "flex";
		modalImage.src = imglink;
		showModal = 1;
	}
}

function closeMediaModal() {
	var modal = document.getElementById("media-modal");
	modal.style.display = "none";
	showModal = 0;
}

var showdisqus = 0;
function showComments() {
	var box = document.getElementById("disqus-box");
	
	if (showdisqus == 1) {
		box.style.display = "none";
		showdisqus = 0;
	} else {
		box.style.display = "block";
		showdisqus = 1;
	}
}