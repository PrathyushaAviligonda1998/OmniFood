alert("hddddddddddd");
$(document).ready(function () {
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').remove('sticky');

        }
    }, {
        offset: '60px;'
    });
    $('.js--scroll-to-plans').click(function () {
        $('html,body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);

    });







});
