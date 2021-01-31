jQuery('a[href^="#main"]').click( function(){
    var scroll_el = jQuery(this).attr('href');
    var destination = jQuery(scroll_el).offset().top;
    if (jQuery(scroll_el).length != 0) {
        jQuery('html, body').animate( { scrollTop: destination }, 1100 );
    }
    return false;
});
jQuery('a[href^="#production"]').click( function(){
    var scroll_el = jQuery(this).attr('href');
    var destination = jQuery(scroll_el).offset().top;
    if (jQuery(scroll_el).length != 0) {
        jQuery('html, body').animate( { scrollTop: destination }, 1100 );
    }
    return false;
});
jQuery('a[href^="#equipment"]').click( function(){
    var scroll_el = jQuery(this).attr('href');
    var destination = jQuery(scroll_el).offset().top;
    if (jQuery(scroll_el).length != 0) {
        jQuery('html, body').animate( { scrollTop: destination }, 1100 );
    }
    return false;
});
jQuery('a[href^="#advantages"]').click( function(){
    var scroll_el = jQuery(this).attr('href');
    var destination = jQuery(scroll_el).offset().top;
    if (jQuery(scroll_el).length != 0) {
        jQuery('html, body').animate( { scrollTop: destination }, 1100 );
    }
    return false;
});
jQuery('a[href^="#contacts"]').click( function(){
    var scroll_el = jQuery(this).attr('href');
    var destination = jQuery(scroll_el).offset().top;
    if (jQuery(scroll_el).length != 0) {
        jQuery('html, body').animate( { scrollTop: destination }, 1100 );
    }
    return false;
});