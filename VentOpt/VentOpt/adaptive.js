$(window).resize(function() {
    if (window.matchMedia('(max-width: 761px)').matches) {
        $('.catalog_products').prependTo('.catalog_container');
    }
    if (window.matchMedia('(min-width: 761px)').matches) {
        $('.catalog_products').prependTo('.row2_left');
    }
    if (window.matchMedia('(max-width: 721px)').matches) {
        $('.wrapper1__logo').prependTo('.header_container');
        
    }
    if (window.matchMedia('(min-width: 721px)').matches) {
        $('.wrapper1__logo').prependTo('.wrapper1_container');
        // $('.catalog_products').prependTo('.row2_left');
    }
    // if (window.matchMedia('(max-width: 461px)').matches) {
    //     $('.wrapper1160_container').prependTo('.modal_menu');
    //     $('.ober').css({"display" : "none"});
    //     $('.catalog_products').prependTo('.modal_menu');
    //     $('.row2').prependTo('.catalog');

    // }
    // if (window.matchMedia('(min-width: 461px)' && '(max-width: 761px)').matches) {
    //     $('.wrapper1160_container').prependTo('.wrapper_1160');
    //     $('.ober').css({"display" : "flex"});
    //     $('.row2').prependTo('.catalog_container');

    //     $('.catalog_products').prependTo('.catalog_container ');
    // }

    if (window.matchMedia('(max-width: 461px)').matches) {
        $('.wrapper1160_container').prependTo('.modal_menu');
        $('.ober').css({"display" : "none"});
        $('.catalog_products').prependTo('.modal_menu');
        $('.row2').prependTo('.catalog');
    }
    // if (window.matchMedia('(min-width: 461px)').matches) {
    //     $('.wrapper1160_container').prependTo('.wrapper_1160');
    //     $('.ober').css({"display" : "flex"});
    //     $('.catalog_products').prependTo('.catalog_container ');
    //     $('.row2').prependTo('.catalog_container');
    // }
})

$(function() {
    if (window.matchMedia('(max-width: 761px)').matches) {
        $('.catalog_products').prependTo('.catalog_container');
    }
    // if (window.matchMedia('(min-width: 761px)').matches) {
    //     $('.catalog_products').prependTo('.row2_left');
    // }
})


$(function() {
    if (window.matchMedia('(max-width: 721px)').matches) {
        $('.wrapper1__logo').prependTo('.header_container');
    }
    // if (window.matchMedia('(min-width: 721px)').matches) {
    //     $('.wrapper1__logo').prependTo('.wrapper1_container');
    // }
})


$(function() {
    if (window.matchMedia('(max-width: 461px)').matches) {
        $('.wrapper1160_container').prependTo('.modal_menu');
        $('.ober').css({"display" : "none"});
        $('.catalog_products').prependTo('.modal_menu');
        $('.row2').prependTo('.catalog');
    }
    // if (window.matchMedia('(min-width: 461px)').matches) {
    //     $('.wrapper1160_container').prependTo('.wrapper_1160');
    //     $('.ober').css({"display" : "flex"});
    //     $('.catalog_products').prependTo('.catalog_container ');
    // }
})



