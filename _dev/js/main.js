/**
 * Created by Pompo on 07.05.2017.
 */

function swiperInit(){
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: '.swiper-pagination',

        // Navigation arrows
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    })

    var mySwiper = new Swiper ('.swiper-doctor', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    })
}

$(document).ready(function(){
    swiperInit();
});