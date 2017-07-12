/**
 * Created by Pompo on 07.05.2017.
 */

function swiperInit(){
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        autoplay: 4000,

        // If we need pagination
        pagination: '.swiper-pagination',
        paginationClickable: true
    });

    var mySwiper = new Swiper ('.swiper-doctor', {
        slidesPerView: 4,
        spaceBetween: 20,

        breakpoints: {
            // when window width is <= 320px
            480: {
                slidesPerView: 1
            },
            // when window width is <= 480px
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is <= 640px
            1024: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        },

        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    })
}

function mobileMenu(){
    var $mobileBtn = $('.js-mobile'),
        $mobileMenu = $('.js-mobile-menu');
    $mobileBtn.click(function(){
        $(this).toggleClass('open');
        $mobileMenu.toggleClass('is-open');
    })

}

function popupForm(){
    $('.js-popup-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });
}

function popupGallery(){
    $(document).ready(function() {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Загрузка изборажения #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            }
        });
    });
}

function sendForm() {
    if($('#order-form').length){
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



$(document).ready(function(){
    swiperInit();
    mobileMenu();
    popupForm();
    popupGallery();
    sendForm();
});