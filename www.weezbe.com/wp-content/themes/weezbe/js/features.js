jQuery(document).ready(function() {
	
	jQuery('.sidebar a').click( function(e) {
		
		e.preventDefault();
		jQuery('html, body').animate( { scrollTop: jQuery(jQuery(this).attr('href')).offset().top - jQuery('#branding').height() - 38 }, 750 );
		return false;
		
	});
	
	jQuery(window).on('scroll', function(e) {
		
		var bottom_window = jQuery(window).scrollTop() + jQuery(window).height();
		var bottom_sidebar = jQuery('.sidebar').offset().top + jQuery('.sidebar > ul').outerHeight(true) + jQuery('.back-top').outerHeight(true) + 15;
		var bottom_page = jQuery('#primary').offset().top + jQuery('#primary').outerHeight(true);
		
		if(bottom_window > bottom_page) {
			jQuery('.back-top').css({'position': 'relative', 'top': bottom_page - bottom_sidebar});
		} else if(bottom_window > bottom_sidebar) {
			jQuery('.back-top').css({'position': 'fixed', 'top': jQuery(window).height() - jQuery('.back-top').outerHeight(true)});
		} else {
			jQuery('.back-top').css({'position': 'relative', 'top': 'auto'});
		}
		
	});
	jQuery(window).scroll();
	
});