$(document).ready(function($){
    $('.justifiedGallery').each(function(i) {
        $(this).find('.jg-box').each(function() {
            $(this).addClass('justified-gallery');
        });
    });
    if (!!$.prototype.justifiedGallery) {  // if justifiedGallery method is defined
        var options = {
            rowHeight: 120,
            margins: 5,
            lastRow: 'justify'
        };
        $('.justified-gallery').justifiedGallery(options);
    }
});