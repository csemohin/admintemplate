/* ===================================================
    Author       : Cloud 
    Template Name: Ecommerce - HTML Template
    Tags: Ecommerce, Multipurpose,HTML Ecommerce 
    Version      : 1.0.0
======================================================*/
(function ( $, window, document ) {
    "use strict";
    $(document).ready(function(){
        var $body = $('body');
        $body.find('select').niceSelect();
        var tags;
        if( $body.find('.tagged').length > 0 ) {
            tags = new Tags('.tagged');
        }
    });
})( jQuery, window, document );	