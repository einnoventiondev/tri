	

$(document).ready(function() {
        
   
    // banner slider end
    AOS.init({
		offset: 200, 
		duration: 1000
	});
    // animation on scroll
    var owl = $('.slider-wrapper');
    owl.owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        touchDrag: true,
        mouseDrag: false,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        dots: true
    });
    $('.map-tab-dot1').click(function(){
        $(this).toggleClass('active');
        $(this).prevAll().removeClass('active');
        $(this).nextAll().removeClass('active');
        $('.mobil-view-absolute1').toggleClass('active');
        $('.mobil-view-absolute2').removeClass('active');
        $('.mobil-view-absolute3').removeClass('active');
        $('.mobil-view-absolute4').removeClass('active');
    });
    $('.map-tab-dot2').click(function(){
        $(this).toggleClass('active');
        $(this).prevAll().removeClass('active');
        $(this).nextAll().removeClass('active');
        $('.mobil-view-absolute1').removeClass('active');
        $('.mobil-view-absolute2').toggleClass('active');
        $('.mobil-view-absolute3').removeClass('active');
        $('.mobil-view-absolute4').removeClass('active');
    });
    $('.map-tab-dot3').click(function(){
        $(this).toggleClass('active');
        $(this).prevAll().removeClass('active');
        $(this).nextAll().removeClass('active');
        $('.mobil-view-absolute1').removeClass('active');
        $('.mobil-view-absolute2').removeClass('active');
        $('.mobil-view-absolute3').toggleClass('active');
        $('.mobil-view-absolute4').removeClass('active');
    });
    $('.map-tab-dot4').click(function(){
        $(this).toggleClass('active');
        $(this).prevAll().removeClass('active');
        $(this).nextAll().removeClass('active');
        $('.mobil-view-absolute1').removeClass('active');
        $('.mobil-view-absolute2').removeClass('active');
        $('.mobil-view-absolute3').removeClass('active');
        $('.mobil-view-absolute4').toggleClass('active');
    });
});


		