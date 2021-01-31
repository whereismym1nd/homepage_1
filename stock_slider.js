$(function() {      
    var prevStock = $('.wrapper3_row3 .card_arrows__left'),
    nextStock = $('.wrapper3_row3 .card_arrows__right'), 
    stockWidth = $('.stock_card').width() + 30; 
    var StockLineWidth = stockWidth;
    var StockElementLength = $("div.stock_cards").length;
    var StockslideWidth = $('.stock_cards').width() * StockElementLength;
    


    nextStock.click(nextStockCheck);
    prevStock.click(prevStockCheck);


    function nextStockCheck() {
        console.log("hello");
        if (StockLineWidth < StockslideWidth && StockLineWidth > stockWidth) {
            console.log('hello');
            prevStock.addClass("active");
        }
        if (StockLineWidth < StockslideWidth) {
            var marginCard = parseInt($('.slider-stock').css('marginLeft'));
            marginCard=marginCard-stockWidth;           
            $('.slider-stock').animate({marginLeft:marginCard},1000);          
            StockLineWidth = StockLineWidth+stockWidth;
            prevStock.addClass("active");
        }

        if (StockLineWidth >= StockslideWidth ) {
            nextStock.removeClass("active");
        }
    }

    function prevStockCheck() {
        console.log(StockLineWidth);
        if (StockLineWidth <= 230) {
            console.log('hello');
            prevStock.removeClass("active");
        }
        if ((StockLineWidth - stockWidth) >= stockWidth) {
            var marginCard = parseInt($('.slider-stock').css('marginLeft'));
            marginCard=marginCard+stockWidth;           
            $('.slider-stock').animate({marginLeft:marginCard},1000);          
            StockLineWidth = StockLineWidth-stockWidth;
            if ((StockLineWidth - stockWidth) < stockWidth) {
                prevStock.removeClass("active");
            }
            nextStock.addClass("active");
        }

        else {
            prevStock.removeClass("active");
        }
        
    }
});