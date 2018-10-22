jQuery(document).ready(function() {	

	/** Clic sur les boutons PLUS D'INFOS **/
	jQuery('.service_btn > a').click(function() {
		
		if(jQuery(this).attr('href') == '#') {
			
			/* Smooth scroll jusqu'au formulaire de Demande d'infos */
			jQuery('html, body').stop(true,false).animate({
				scrollTop: jQuery('.infos').offset().top - 100
			}, 800, 'swing');
			/* Sélection du service cliqué */
			jQuery('select[name="service_choice"] option[value="' + jQuery(this).parent().parent().children('h2').text().replace(/\n/, ' ') + '"]').attr('selected', true);
			jQuery('select[name="service_choice"]').css('color', '#666');
			jQuery('input#your-email').focus();
			return false;
			
		}
		
	});
	
	jQuery('.service, .subservice').click(function() {
		jQuery(this).find('.service_btn a').trigger('click');
	});
	
	/** Liste déroulante des services **/
	if(jQuery('select[name="service_choice"]').length > 0) {
		/* Première option de la liste déroulante : Service */
		jQuery('select[name="service_choice"] option[value=""]').text('Service');
		/* Masquage de toutes les options */
		jQuery('select[name="service_choice"] option').hide();
		/* Affichage des services de la page (basé sur le titre) */
		jQuery('.service h2, .subservice h2').each(function() {
			jQuery('select[name="service_choice"] option[value="' + jQuery(this).text().replace(/(?:\r\n|\r|\n)/g, ' ') + '"]').show();
		});
	}

});