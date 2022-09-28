let modal = document.getElementById("modal");
let btn = document.getElementById("langs-wrapper");
let overlay = document.getElementById("overlay");

btn.addEventListener("click", clicked);

function clicked(ev) {
    overlay.classList.toggle("active");
    modal.classList.toggle("active");
}
