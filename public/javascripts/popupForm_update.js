// Get the modal
const modalUpdateDesc = document.getElementById("modal_updateDesc");

// Get the button that opens the modal
const updateDescBtn = document.getElementById("updateDescBtn");

// Get the <span> element that closes the modal
const closeUpdate = document.getElementById("closeUpdate");

// When the user clicks the button, open the modal
if (updateDescBtn) {
    updateDescBtn.onclick = function() {
        modalUpdateDesc.style.display = "block";
    }
}
closeUpdate.onclick = function() {
    modalUpdateDesc.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalUpdateDesc) {
        modalUpdateDesc.style.display = "none";
    }
};