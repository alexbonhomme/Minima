jQuery(document).ready(function ($) {

    $(window).stellar();

    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    htmlBody = $('html,body');

	slide.bind('inview', function(event, isInView) {
		dataSlide = $(this).attr('data-slide');

		if (isInView) {
			$('.navigation li[data-slide="' + dataSlide + '"]').addClass('active');
		} else {
			$('.navigation li[data-slide="' + dataSlide + '"]').removeClass('active');
		}
	});

    function goToByScroll(dataSlide) {
    	var position = $('.slide[data-slide="' + dataSlide + '"]').offset().top;
        
        // This is to compensate the padding
        // No need on the first slide because of the main menu
        if (position > 0) {
            position += 80;
        }

        htmlBody.animate({
            scrollTop: position
        }, 2000, 'easeInOutQuint');
    }


    links.click(function (e) {
        e.preventDefault();
        dataSlide = $(this).attr('data-slide');
        goToByScroll(dataSlide);
    });

    button.click(function (e) {
        e.preventDefault();
        dataSlide = $(this).attr('data-slide');
        goToByScroll(dataSlide);
    });

});
