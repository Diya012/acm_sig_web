jQuery(document).ready(function () {

    "use strict"
    $('.slider').ripples({
        dropRadius: 11,
        perturbance: 0.01,

    });

    $(window).scroll(function () {

        var top = $(window).scrollTop();
        if (top >= 60) {
            $("nav").addClass('secondary');
        } else
        if ($("nav").hasclass('secondary')) {
            $("nav").removeclass('secondary');
        }

    });




});