$(document).ready(function() {
    var sections = $('section');
    var nav = $('#navbar-scroll');
    var navbarHeight = nav.outerHeight();

    $(window).on('scroll', function() {
    var curPos = $(this).scrollTop();

    sections.each(function() {
        var top = $(this).offset().top - navbarHeight;
        var bottom = top + $(this).outerHeight();

        if (curPos >= top && curPos <= bottom) {
        nav.find('a').removeClass('active');
        sections.removeClass('active');

        $(this).addClass('active');
        nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
        }
    });
    });
});