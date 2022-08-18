// materials-slider
define(["jquery", "slick"], function ($) {
    let shopLookSlider = $(".shop-look > .pagebuilder-column-group");

    if (shopLookSlider.length) {
        shopLookSlider.slick({
            slidesToScroll: 1,
            swipeToSlide: true,
            slidesToShow: 5,
            dots: false,
            infinite: false,
            arrows: true,
            variableWidth: true,
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
