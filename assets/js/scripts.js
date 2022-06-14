

$(document).ready(function () {

    // animation on scroll
    var owl = $('.slider-wrapper');
    owl.owlCarousel({
        animateOut: 'animate__fadeOutLeft',
        animateIn: 'animate__fadeInRight',
        loop: true,
        rtl: true,
        dots: true,
        nav: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000
    });

    $('.map-tab-dot1').click(function () {
        $(this).toggleClass('active');
        $(this).prevAll().removeClass('active');
        $(this).nextAll().removeClass('active');
        $('.mobil-view-absolute1').toggleClass('active');
        $('.mobil-view-absolute2').removeClass('active');
        $('.mobil-view-absolute3').removeClass('active');
        $('.mobil-view-absolute4').removeClass('active');
        $('.mobil-view-absolute5').removeClass('active');
    });
    $('.map-tab-dot2').click(function () {
        $(this).toggleClass('active');
        $(this).prevAll().removeClass('active');
        $(this).nextAll().removeClass('active');
        $('.mobil-view-absolute1').removeClass('active');
        $('.mobil-view-absolute2').toggleClass('active');
        $('.mobil-view-absolute3').removeClass('active');
        $('.mobil-view-absolute4').removeClass('active');
    });
    $('.map-tab-dot3').click(function () {
        $(this).toggleClass('active');
        $(this).prevAll().removeClass('active');
        $(this).nextAll().removeClass('active');
        $('.mobil-view-absolute1').removeClass('active');
        $('.mobil-view-absolute2').removeClass('active');
        $('.mobil-view-absolute3').toggleClass('active');
        $('.mobil-view-absolute4').removeClass('active');
    });
    $('.map-tab-dot4').click(function () {
        $(this).toggleClass('active');
        $(this).prevAll().removeClass('active');
        $(this).nextAll().removeClass('active');
        $('.mobil-view-absolute1').removeClass('active');
        $('.mobil-view-absolute2').removeClass('active');
        $('.mobil-view-absolute3').removeClass('active');
        $('.mobil-view-absolute4').toggleClass('active');
    });
    $('body').click(function () {
        $('.map-tab-dot').removeClass("active");
        $('.mobil-view-absolute').removeClass("active");
        $('.map-tab__list').removeClass('mobile-margin');
    });
    $('.mobil-view-absolute').click(function (event) {
        event.stopPropagation(); // prevents executing the above event
    });
    $('.map-tab-dot').click(function (event) {
        event.stopPropagation(); // prevents executing the above event
    });
    // mobile tabs end
    $('.map-toggle__input').click(function () {
        if ($(this).prop("checked") == true) {
            $('.map-tab-dots').addClass('show');
        }
        else if ($(this).prop("checked") == false) {
            $('.map-tab-dots').removeClass('show');
        }
    });
    $('.map-tab-dot').click(function () {
        if ($(this).hasClass("active")) {
            $('.map-tab__list').addClass('mobile-margin');
        }
        else {
            $('.map-tab__list').removeClass('mobile-margin');
        }
    });
    // select color
    $('.map-view__select-box').change(function () {
        $(this).removeClass('arrow-off-white-icon');
        $(this).addClass('choclate-color arrow-icon');
    });
    $('.map-view__select-box').focus(function () {
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
    $(".email").keyup(function () {
        var email = $(".email").val();
        if (isValidEmailAddress(email)) {
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
        if (
            $(this).hasClass('field-blue') &&
            $('.form-box__input.phone').hasClass('field-blue') &&
            $('.form-box__input.message').hasClass('field-blue') &&
            $('.form-box__input.email').hasClass('field-blue')
        ) {
            $('.submit-btn').removeClass('disabled');
        } else {
            $('.submit-btn').addClass('disabled');
        }
    });
    $('.form-box__input.email').keyup(function () {
        if (
            $(this).hasClass('field-blue') &&
            $('.form-box__input.phone').hasClass('field-blue') &&
            $('.form-box__input.name').hasClass('field-blue') &&
            $('.form-box__input.message').hasClass('field-blue')
        ) {
            $('.submit-btn').removeClass('disabled');
        } else {
            $('.submit-btn').addClass('disabled');
        }
    });
    $('.form-box__input.phone').keyup(function () {
        if (
            $(this).hasClass('field-blue') &&
            $('.form-box__input.email').hasClass('field-blue') &&
            $('.form-box__input.name').hasClass('field-blue') &&
            $('.form-box__input.message').hasClass('field-blue')
        ) {
            $('.submit-btn').removeClass('disabled');
        } else {
            $('.submit-btn').addClass('disabled');
        }
    });
    $('.map-tab__img-holder').hover(function () {
        $(this).toggleClass('active');
    });
    $('.form-box__input.message').keyup(function () {
        if (
            $(this).hasClass('field-blue') &&
            $('.form-box__input.email').hasClass('field-blue') &&
            $('.form-box__input.name').hasClass('field-blue') &&
            $('.form-box__input.phone').hasClass('field-blue')
        ) {
            $('.submit-btn').removeClass('disabled');
        } else {
            $('.submit-btn').addClass('disabled');
        }
    });

    // Loader
    var i = 0;
    function move() {
        $('.main-progress').css('z-index', '999');
        // $('.main-progress').removeClass('d-none');
        // $('.hide-on-load').css('display', 'block');
        var widths = 1;
        var opacity = 1;
        if (i == 0) {
            i = 1;
            var elem = document.getElementById("bar");
            var mainElem = document.getElementById("myProgress");
            var logoHolder = document.getElementById("logo-holder");
            var id = setInterval(frame, 50);
            function frame() {
                // if (widths >= 100) {
                $('.main-progress').css('z-index', '0');
                // $('.main-progress').addClass('d-none');
                $('body').css('overflow', 'unset');
                clearInterval(id);
                $('.hide-on-load').fadeTo(1000, 1);
                $(".main-progress").fadeTo(1200, 0);

                // setTimeout(() => {
                $('.hide-on-load').css('visibility', 'visible');
                $('.hide-blur').css('display', 'block');
                $('.header__content-img').addClass('okImg-animate');
                // banner slider end
                AOS.init({
                    offset: 200,
                    duration: 1000
                });
                gsap.from('.header__img-chocolate', { duration: 1.5, delay: 0.5, backgroundPosition: '-1350px 0' });
                gsap.from('.header__content-img', { duration: 1.5, delay: 1, y: 700 });
                gsap.from('.header__img-green', { duration: 1.5, delay: 1.5, x: 1000 });
                gsap.from('.header__blur-box', { duration: 1.5, delay: 2, x: '1350px' });
                // }, 1000);


                // } else {
                //     $('body').css('overflow', 'hidden');
                //     $(".main-progress").css('display', 'block')
                //     widths++;
                //     opacity++;
                //     $('#myBar').html(widths + " %");
                //     $('#myProgress').css(opacity + " %");
                //     $('.logo-holder').css(opacity + " %");
                //     // $('.progress-bar').css("width", widths + "%");
                //     elem.style.width = widths + "%";
                //     mainElem.style.opacity = opacity + "%";
                //     logoHolder.style.opacity = opacity + "%";
                // }
            }
        }
    }
    move();
    $('.map-part').click(function () {
        $(this).prevAll().attr("class", "deactive");
        $(this).nextAll().attr("class", "deactive");
        $(this).attr("class", "pathactive");
    })

    // Add Location on map
    $('#map-view path').on("click", function (e) {
        let x = e.pageX;
        let y = e.pageY;

        Swal.fire({
            title: 'هل تريد الاستمرار؟',
            icon: 'question',
            iconHtml: '؟',
            confirmButtonText: 'نعم',
            cancelButtonText: 'لا',
            showCancelButton: true,
            showCloseButton: true
        }).then((result) => {
            if (result.isConfirmed) {
                addLocation(x, y);
            }
        })
    });

    function addLocation(x, y) {
        // let e = document.createElement('dot');
        // $(e).addClass("map-dot");
        let map = document.createElement('div');
        let dot = document.createElement('div');
        let outerDot = document.createElement('div');
        let innerDot = document.createElement('div');

        map.classList.add('map-dot');
        dot.classList.add('dot-relative');
        outerDot.classList.add('map-tab-dot__bg');
        innerDot.classList.add('map-tab-dot__inner');

        dot.appendChild(outerDot);
        dot.appendChild(innerDot);
        map.appendChild(dot);

        let adjX = x - 15; //click happens in center
        let adjY = y - 10;

        $(map).css("left", adjX);
        $(map).css("top", adjY);

        $('#map-view .container').append(map);
        // $('.map-part').append(map);

        return map;
    }

});