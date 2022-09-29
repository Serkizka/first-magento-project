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
