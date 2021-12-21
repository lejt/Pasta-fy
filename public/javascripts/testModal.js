// Get the modal
const modalAddDesc = document.getElementById("modal_addDesc");
const modalUpdateDesc = document.getElementById("modal_updateDesc");

// Get the button that opens the modal
const addDescBtn = document.getElementById("addDescBtn");
const updateDescBtn = document.getElementById("updateDescBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close1")[0];
// const span2 = document.getElementsByClassName("closeUpdate")[0];

// When the user clicks the button, open the modal
if (addDescBtn) {
    addDescBtn.onclick = function() {
        modalAddDesc.style.display = "block";
    }
}
if (updateDescBtn) {
    updateDescBtn.onclick = function() {
        modalUpdateDesc.style.display = "block";
    }
}
span.onclick = function() {
    modalUpdateDesc.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalAddDesc) {
        modalAddDesc.style.display = "none";
    } else if (event.target == modalUpdateDesc) {
        modalUpdateDesc.style.display = "none";
    }
};