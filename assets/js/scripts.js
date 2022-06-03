	

$(document).ready(function() {
        
   
    // banner slider end
    AOS.init({
		offset: 200, 
		duration: 1000
	});
    // animation on scroll
    var owl = $('.slider-wrapper');
        owl.owlCarousel({
        animateOut: 'animate__fadeOutLeft',
        animateIn: 'animate__fadeInRight',
        loop: true,
        dots: true,
        nav: false,
        items: 1,
        autoplay: false,
        autoplayTimeout: 5000,
        smartSpeed: 1000
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



       // select color
       $('.map-view__select-box').change(function(){
        $(this).removeClass('arrow-off-white-icon');
        $(this).addClass('choclate-color arrow-icon'); 
    });
    $('.map-view__select-box').focus(function(){
        $(this).removeClass('arrow-off-white-icon');
        $(this).addClass('choclate-color arrow-icon');
    });

    // form validation
    // $('.form-control').keyup(function(){
    //    var val = $(this).value();
    //     if(val.length() > 0){
    //         $(this).removeClass('disabled'); 
    //     }
    //     $(this).removeClass('arrow-off-white-icon');
    // });

});


		