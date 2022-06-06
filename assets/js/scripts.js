	

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
    $('body').click(function() {
		$('.map-tab-dot').removeClass("active");
		$('.mobil-view-absolute').removeClass("active");
        $('.map-tab__list').removeClass('mobile-margin');
	});
	$('.mobil-view-absolute').click(function(event) {
		event.stopPropagation(); // prevents executing the above event
	});
	$('.map-tab-dot').click(function(event) {
		event.stopPropagation(); // prevents executing the above event
	});
    // mobile tabs end
    $('.map-toggle__input').click(function(){
        if($(this).prop("checked") == true){
            $('.map-tab-dots').addClass('show');
        }
        else if($(this).prop("checked") == false){
            $('.map-tab-dots').removeClass('show');
        }
    });
    $('.map-tab-dot').click(function(){
        if($(this).hasClass("active")){
            $('.map-tab__list').addClass('mobile-margin');
        }
        else{
            $('.map-tab__list').removeClass('mobile-margin');
        }
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
    $('.form-box__input:not(.email)').keyup(function () {
        if ($(this).val().length === 0) {
            $(this).val($.trim($(this).val()));
            $(this).removeClass('field-blue');
            $(this).removeClass('field-red');
        } else if ($(this).val().length > 1) {
            $(this).addClass('field-blue');
            $(this).removeClass('field-red');
        } else {
            $(this).val($.trim($(this).val()));
            $(this).removeClass('field-blue');
            $(this).addClass('field-red');
        }
    })
    $(".email").keyup(function(){
        var email = $(".email").val();
        if(isValidEmailAddress(email))
        {
            $('.email').addClass('field-blue');
            $('.email').removeClass('field-red');
        } else {
            $('.email').addClass('field-red');
            $('.email').removeClass('field-blue');
        }
    });
    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
    }
    $('.form-box__input.name').keyup(function () {
        if(
            $(this).hasClass('field-blue')  &&
            $('.form-box__input.phone').hasClass('field-blue') &&
            $('.form-box__input.message').hasClass('field-blue') &&
            $('.form-box__input.email').hasClass('field-blue')
        ){
            $('.submit-btn').removeClass('disabled');
        }else{
            $('.submit-btn').addClass('disabled');
        }
    });
    $('.form-box__input.email').keyup(function () {
        if(
            $(this).hasClass('field-blue')  &&
            $('.form-box__input.phone').hasClass('field-blue') &&
            $('.form-box__input.name').hasClass('field-blue') &&
            $('.form-box__input.message').hasClass('field-blue')
        ){
            $('.submit-btn').removeClass('disabled');
        }else{
            $('.submit-btn').addClass('disabled');
        }
    });
    $('.form-box__input.phone').keyup(function () {
        if(
            $(this).hasClass('field-blue')  &&
            $('.form-box__input.email').hasClass('field-blue') &&
            $('.form-box__input.name').hasClass('field-blue') &&
            $('.form-box__input.message').hasClass('field-blue')
        ){
            $('.submit-btn').removeClass('disabled');
        }else{
            $('.submit-btn').addClass('disabled');
        }
    });
    $('.form-box__input.message').keyup(function () {
        if(
            $(this).hasClass('field-blue')  &&
            $('.form-box__input.email').hasClass('field-blue') &&
            $('.form-box__input.name').hasClass('field-blue') &&
            $('.form-box__input.phone').hasClass('field-blue')
        ){
            $('.submit-btn').removeClass('disabled');
        }else{
            $('.submit-btn').addClass('disabled');
        }
    });
});


		