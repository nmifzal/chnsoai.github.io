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