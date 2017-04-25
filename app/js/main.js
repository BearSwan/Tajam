$(document).ready(function(){
    /*MENU BURGER*/
    $('.burg-wrapper').click(function () {
        $('.header-nav').fadeToggle();
        $(".burg-wrapper").toggleClass('change');
        $('body').toggleClass('overflow-hidden');
    });

    /*intro-slider*/
    $('.intro-wrap').slick({
        dots: true,
        prevArrow: false,
        nextArrow: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1
    });

    /*portfolio-slider*/
    $('.portfolio-wrap').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: false,
        nextArrow: false,
        infinite: true,
        speed: 500,
        rows: Rows,
        slidesToShow: Slides,
        slidesToScroll: Slides
    });

    /*testimonials slider for feedbacks*/
    $('.testimonials-feedback-wrap').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.testimonials-photo-wrap'
    });

    /*testimonials slider for photos*/
    $('.testimonials-photo-wrap').slick({
        slidesToShow: 5,
        speed: 300,
        slidesToScroll: 1,
        asNavFor: '.testimonials-feedback-wrap',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        variableWidth: true
    });

    /*play/stop button*/
    $('.video').parent().click(function () {
        if($(this).children(".video").get(0).paused){
            $(this).children(".video").get(0).play();
            $(this).children(".playpause").fadeOut();
        }else{
            $(this).children(".video").get(0).pause();
            $(this).children(".playpause").fadeIn();
        }
    });


});

/*portfolio slider responsive view (change rows)*/
var viewportWidth = $(window).width();
if( viewportWidth > 768 ){
    var Rows = 2;
    var Slides = 6;
} else if( viewportWidth < 500 ){
    var Rows = 2;
    var Slides = 2;
}

/*wow effects initialize*/
new WOW().init();



