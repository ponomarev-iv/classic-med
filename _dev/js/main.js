/**
 * Created by Pompo on 07.05.2017.
 */

function swiperInit() {
    if ($('.swiper-container').length) {


        var mySwiper = new Swiper('#main-slider', {
            autoplay: {
                delay: 3000
            },

            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        });

        var mySwiper = new Swiper('#swiper-doctor', {
            slidesPerView: 3,
            spaceBetween: 32,

            breakpoints: {

                480: {
                    slidesPerView: 1
                },

                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },

                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        })
    }
}

function mobileMenu() {
    if($('.js-mobile').length){
        var $mobileBtn = $('.js-mobile'),
            $mobileMenu = $('.js-mobile-menu');
        $mobileBtn.click(function () {
            $(this).toggleClass('open');
            $mobileMenu.toggleClass('is-open');
        })
    }
}

function popupForm() {
    if($('.js-popup-form').length){
        $('.js-popup-form').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#name',

            // When elemened is focused, some mobile browsers in some cases zoom in
            // It looks not nice, so we disable it:
            callbacks: {
                beforeOpen: function () {
                    if ($(window).width() < 700) {
                        this.st.focus = false;
                    } else {
                        this.st.focus = '#name';
                    }
                }
            }
        });
    }

}

function popupGallery() {
    if($('.popup-gallery').length){
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Загрузка изборажения #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            }
        });
    }
}

function sendForm() {
    if ($('#order-form').length) {
        $("#order-form").submit(function () {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(this).serialize()
            }).done(function () {

                $("#order-form").trigger("reset");

                $.magnificPopup.open({
                    items: {
                        src: '#order-success'
                    },
                    type: 'inline'
                });
            });
            return false;
        });
    }
    else {
        return false;
    }
}

function addClassNavLink() {
    if($('.navigation__wrap').length){
        var location = window.location.href;
        var cur_url = '/' + location.split('/').pop();

        $('.navigation__wrap a').each(function () {
            var link = $(this).attr('href');

            if (cur_url == link) {
                $(this).addClass('is-active');
            }
        })
    }
}


$(document).ready(function () {
    swiperInit();
    mobileMenu();
    popupForm();
    popupGallery();
    sendForm();
    addClassNavLink();
});