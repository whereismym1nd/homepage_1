$(function()  {
    var burger = $('.header .burger');
    var modal = $('.modal_menu');
    var close = $('.modal_close');
    var search = $('.search__icon');
    var searchLine = $('.header_container  .search');
    var searchClose = $('.close-search');
    burger.click(function() {
        if(burger.css('display') == "block") {
            burger.css({
                "visibility" : "hidden"
            });
            modal.fadeIn();
        }
    })

    close.click(function() {
        burger.css({
            "visibility" : "visible"
        });
        modal.fadeOut();
    }) 
    
    search.click(function() {
        $('.header_container .wrapper1__logo').fadeOut();
        burger.fadeOut();
        $('.right__tab').fadeOut();
        $('.right__personal').fadeOut();
        search.fadeOut();
        searchLine.fadeIn(2000);
    })

    searchClose.click(function() {
        searchLine.fadeOut(00);
        $('.header_container .wrapper1__logo').fadeIn();
        burger.fadeIn();
        $('.right__tab').fadeIn();
        $('.right__personal').fadeIn();
        search.fadeIn();
    })




});