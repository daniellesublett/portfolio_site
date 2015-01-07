
( function( $ ) {

	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$body = $('body');

    //FadeIn all sections
	$body.imagesLoaded( function() {
		setTimeout(function() {

		      // Resize sections
		      adjustWindow();

		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');

		}, 800);
	});

	function adjustWindow(){

		// Init Skrollr


		// Get window size
	    winH = $window.height();

	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		}

	    // Resize our slides
	    $slide.height(winH);

	    // Refresh Skrollr after resizing our sections


	}

} )( jQuery );

// click to reveal bio
( function( $ ){
	$("h3").on("click", function(){
		var bio = $(this).siblings(".bio-reveal");
			bio.toggle("fast");
	})
})(jQuery);

( function( $ ){
	$(".glyphicon-chevron-down").on("click", function(){
			$(this).toggleClass("glyphicon-chevron-down glyphicon-chevron-up");
	})
})(jQuery);