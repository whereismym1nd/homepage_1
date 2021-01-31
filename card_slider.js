$(function() {      
    var prev = $('.catalog_wrapper .card_slider_arrows .card_arrows__left'),
    next = $('.catalog_wrapper .card_slider_arrows .card_arrows__right'), 
    cardWidth = $('.catalog_card').width() + 30; 
    var LineWidth = cardWidth;
    var ElementLength = $("div.catalog_cards").length;
    var slideWidth = $('.catalog_cards').width() * ElementLength;
    


    next.click(nextCheck);
    prev.click(prevCheck);


    function nextCheck() {
        if (LineWidth < slideWidth && LineWidth > cardWidth) {
            console.log('hello');
            prev.addClass("active");
        }
        if (LineWidth < slideWidth) {
            var marginCard = parseInt($('.slider-cards').css('marginLeft'));
            marginCard=marginCard-cardWidth;           
            $('.slider-cards').animate({marginLeft:marginCard},1000);          
            LineWidth = LineWidth+cardWidth;
            prev.addClass("active");
        }

        if (LineWidth >= slideWidth ) {
            next.removeClass("active");
        }
    }

    function prevCheck() {
        console.log(LineWidth);
        if (LineWidth <= 230) {
            console.log('hello');
            prev.removeClass("active");
        }
        if ((LineWidth - cardWidth) >= cardWidth) {
            var marginCard = parseInt($('.slider-cards').css('marginLeft'));
            marginCard=marginCard+cardWidth;           
            $('.slider-cards').animate({marginLeft:marginCard},1000);          
            LineWidth = LineWidth-cardWidth;
            if ((LineWidth - cardWidth) < cardWidth) {
                prev.removeClass("active");
            }
            next.addClass("active");
        }

        else {
            prev.removeClass("active");
        }
        
    }



});












    // next.click(function() {
        
    //     if (LineWidth < slideWidth) {

    //         console.log('sadasd');
    //         console.log(slideWidth);
    //         var marginCard = parseInt($('.slider-cards').css('marginLeft'));
    //         marginCard=marginCard-cardWidth;
            
    //         $('.slider-cards').animate({marginLeft:marginCard},1000); 
            
    //     LineWidth = LineWidth+cardWidth;

    //     function explodePrev() {
    //         next.addClass("active");
    //         prev.removeClass("active");
    //         }
    //         setTimeout(explodePrev, 1000);

    //         console.log(LineWidth);
    //     // return false;
    //     }
        
    // });
    // prev.click(function() {
    //     if (LineWidth >= slideWidth) {
    //         console.log('sadasd');
    //         var marginCard = parseInt($('.slider-cards').css('marginLeft'));
    //         marginCard=marginCard+cardWidth;
    //         $('.slider-cards').animate({marginLeft:marginCard},1000); 
    //         function explodeNext() {
    //             next.removeClass("active");
    //             prev.addClass("active");
    //             console.log(i);
    //         }
    //         setTimeout(explodeNext, 1000);
    //         LineWidth = LineWidth-cardWidth

    //         console.log(LineWidth);
    //     // return false;
    //     }
    // });