$(document).ready(function($){
    $('.lightGallery').each(function(i) {
        $(this).find('img').each(function() {
            $(this).wrap('<a href="' + this.src + '" title="' + this.alt + '" class="gallery-item"></a>');
            $(this).after('<span class="caption">' + this.alt + '</span>');
        });
    });
    if (lightGallery) {
        var options = {
            selector: '.gallery-item',
        };
        $('.lightGallery').each(function(i, entry) {
            lightGallery(entry, options);
        });
    }
});
