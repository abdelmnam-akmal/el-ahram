$(function () {
    'use strict';

    // Add Class Active on Navbar Links and scroll to the section
    $('.nav-item .nav-link').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('active').parent().siblings().find('.nav-link').removeClass('active');
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top + 1
        }, 500);
    });
});