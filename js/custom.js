$(document).ready(function() {
// Smooth scroll
var $root = $('html, body');
	
$('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function() {
        window.location.hash = href;
    });
      
    return false;
});

// Remove focus from button on click
$(".btn").mouseup(function() {
    $(this).blur();
});

// END DOCUMENT READY
});