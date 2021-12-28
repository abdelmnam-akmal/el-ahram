$(function () {
    'use strict';

    // scroll to the section about
    $('.more-about').on('click', function () {
        $('html, body').animate({
            scrollTop: $('.about-us').offset().top
        }, 400);
    });

});