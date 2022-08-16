var modal = document.getElementById("myModal");
var btn = document.getElementById("langs-wrapper");

btn.onclick = function () {
    modal.style.display = "block";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// materials-slider
define(["jquery", "slick"], function ($) {
    let materialsSlider = $(".materials > .pagebuilder-column-group");

    if (materialsSlider.length) {
        materialsSlider.slick({
            slidesToScroll: 1,
            swipeToSlide: true,
            slidesToShow: 8,
            dots: false,
            infinite: false,
            arrows: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        centerPadding: "60px",
                        centerMode: true,
                        arrows: false,
                        slidesToShow: 2,
                    },
                },
            ],
        });
    }
});
// materials-slider

