/*--------------------------------------------------------------Redimencionar logo no scroll--------------------------------------------------------------*/

$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 40 && ($(window).width() > 767)) {
            $('header > nav').addClass(' alt-logo');
        } else {
            $('header > nav').removeClass(' alt-logo');
        }
    });
})