$(function(){
	
	// Subscribe
	var s = $('#sf_guard_user_email_address')
	 	sVal = $(s).val();
	$(s).focus(function(){
		if($(this).val() == sVal){
			$(this).val('');
		}
	});
	$(s).blur(function(){
		if($(this).val() == ''){
			$(this).val(sVal);
		}
	});
	
	// Client slider
	$('#clients .slider').vulsaiSlider({prev:'#clientPrev', next:'#clientNext', transition:'slide', automatic:false});
	
	// Scroll to top
	$('#goUp a').click(function(e){
		e.preventDefault();
		var anchor = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(anchor).offset().top
		}, 1500);
	})
	
	// Scroll to WhyRingcaptcha
	$('#WhyButton a').click(function(e){
		var anchor = $(this).attr('href');
                anchor = anchor.substring(anchor.indexOf('#'));
                if ($(anchor).length !== 0) {
                    $('html, body').animate({
			scrollTop: $(anchor).offset().top
                    }, 1500);
                    e.preventDefault();
                }	
	});
});