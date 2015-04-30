$(document).ready(function(){
    $("img").unveil(200);
    
	$(window).scroll($.throttle( 80, function(){
		slideIn();
	}));
});

$(window).load(slideIn);
$(window).resize(slideIn);

function slideIn() {
	$('.js-slide-in').each(function(i, el){
		if (isElementInViewport(el)) $(el).addClass('is-visible');
	});
}

function isElementInViewport (el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
 
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}