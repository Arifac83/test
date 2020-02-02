    // WOW JS 
    new WOW().init();

    // Counter JS
	$('.counter').counterUp({
		delay: 10,
        time: 1000
    });
    
    // Magnific Images
	$('.click-link').magnificPopup(
		{
			type:'image',
			gallery:{
				enabled:true
			}
		}
    );
    
    // Magnific Video
	$('.video-link').magnificPopup(
		{
			type:'iframe'
		}
    );
    
    // Responsive Menu
	$('#menu').slicknav();

	// One Page Js
	$('#menu').onePageNav();


	// Sticky Header Js
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 20) {
			$('.header-fixed').addClass("sticky");
		} else {
			$('.header-fixed').removeClass("sticky");
		}
	});
