// Get the modal element and close button
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");
const searchInput = document.getElementById('gallerySearch');
const galleryItems = document.querySelectorAll('.gallery-item');

// Function to open the modal with the clicked image
function openModal(element) {
    modal.style.display = "flex";
    modalImg.src = element.src; // Set the modal image source to the clicked image's source
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Event listener for the close button
closeBtn.addEventListener("click", closeModal);

// Ensure the modal is hidden when the page loads
window.onload = function() {
    modal.style.display = "none"; // Ensure modal is hidden on page load
};