// Get the modal
const modalparent = document.getElementsByClassName("modal_multi");
// const modalAddDesc = document.getElementByClassName("modal_addDesc");
// const modalUpdateDesc = document.getElementsById("modal_updateDesc");

// Get the button that opens the modal
const modal_btn_multi = document.getElementsByClassName("myBtn_multi");
// var addDescBtn = document.getElementsById("addDescBtn");
// var updateDescBtn = document.getElementsById("updateDescBtn");

// Get the <span> element that closes the modal
const span_close_multi = document.getElementsByClassName("close_multi");
// var span = document.getElementsByClassName("close")[0];
// var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal
// addDescBtn.onclick = function() {
//     modalAddDesc.style.display = "block";
// }
// updateDescBtn.onclick = function() {
//     modalUpdateDesc.style.display = "block";
// }

function setDataIndex() {
    for (i = 0; i < modal_btn_multi.length; i++)
    {
        modal_btn_multi[i].setAttribute('data-index', i);
        // modalparent[i].setAttribute('data-index', i);
        // span_close_multi[i].setAttribute('data-index', i);
    }
}

for (i = 0; i < modal_btn_multi.length; i++)
{
    modal_btn_multi[i].onclick = function() {
        var ElementIndex = this.getAttribute('data-index');
        modalparent[ElementIndex].style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    // span_close_multi[i].onclick = function() {
    //     var ElementIndex = this.getAttribute('data-index');
    //     modalparent[ElementIndex].style.display = "none";
    // };

}

// span.onclick = function() {
//     modalAddDesc.style.display = "none";
// }
// span2.onclick = function() {
//     modalUpdateDesc.style.display = "none";
// }

window.onload = function() {
    setDataIndex();
};

window.onclick = function(event) {
    if (event.target === modalparent[event.target.getAttribute('data-index')]) {
        modalparent[event.target.getAttribute('data-index')].style.display = "none";
    }
    // if (event.target == modalAddDesc) {
    //     modalAddDesc.style.display = "none";
    // }
    // if (event.target == modalUpdateDesc) {
    //     modalUpdateDesc.style.display = "none";
    // }
};