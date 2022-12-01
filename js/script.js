var ready = (callback) => {
    if (document.readyState != "loading") {
        callback();
    }
    else {
        document.addEventListener("DOMContentLoaded", callback);
    }
}
ready(() => {
    new Swiper('.slider__swiper', {
        loop: true,
        navigation: {
            prevEl: '.slider__button--prev',
            nextEl: '.slider__button--next'
        },
        pagination: {
            el: '.slider__button--pg',
            type: 'fraction',
        }
    });
});