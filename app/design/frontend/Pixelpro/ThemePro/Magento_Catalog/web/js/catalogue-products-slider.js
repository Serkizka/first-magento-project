define(["jquery", "slick"], function ($, slick) {
    "use strict";
    $(document).ready(function () {
        $("#catalogue-products-list-slider").slick({
            slidesToScroll: 1,
            swipeToSlide: true,
            slidesToShow: 6,
            dots: false,
            infinite: false,
            arrows: true,
        });
    });
});
