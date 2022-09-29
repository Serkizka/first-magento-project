let modal = document.getElementById("modal");
let btn = document.getElementById("langs-wrapper");
let overlay = document.getElementById("overlay");
let closeBtn = document.getElementById("modal-close");

btn.addEventListener("click", clicked);
overlay.addEventListener("click", close);
closeBtn.addEventListener("click", close);

function clicked(ev) {
    overlay.classList.toggle("active");
    modal.classList.toggle("active");
}

function close() {
    overlay.classList.toggle("active");
    modal.classList.toggle("active");
}

// function close(ev) {
//     modal.classList.removeClass("active");
// }
