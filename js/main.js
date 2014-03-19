


$(document).ready(function() {

	$('.project-container').on('mouseenter', function(){
		$(this).find("h2").hide();
	});

	$('.project-container').on('mouseleave', function(){
		$(this).find("h2").show();
	});

	// -------animate scroll on nav clicks ---------
	$('li a').click(function(){
	    var $href = $(this).attr('href');
	    var $anchor = $($href).offset();
	    $('body').animate({ scrollTop: $anchor.top });
	    return false;
	});

	// ----------- END ANIMATE NAV SCROLL-----------------

	$('#profile-pic').on('mouseover', function(){
		$(this).attr('src', 'images/TechnoTim.gif')
	})
	$('#profile-pic').on('mouseleave', function(){
		$(this).attr('src', 'images/profilepic.jpg')
	})	


	// ---------    sticky nav  ----------------
	var stickyNavTop = $('nav').offset().top;

	var stickyNav = function(){
		var scrollTop = $(window).scrollTop();

		if (scrollTop > stickyNavTop) { 
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky'); 
		}
	};

	stickyNav();

	$(window).scroll(function() {
		stickyNav();
	});
// ------> end of sticky nav ------------------

	// --- scroll triggers and animations --------
	$(window).on("scroll", function(){
		if($("body").scrollTop() > 20) {
			$('#landing-title-tagline').addClass('animated fadeOutUp');
		} else if ($("body").scrollTop() < 60) {
			$('#landing-title-tagline').removeClass('animated fadeOutUp');
		}
		//----------- END tagline fade in/out -----------

		// -------- value prop animations ----------
		if($("body").scrollTop() > 1000) {
			var duration1 = 800;
			$('.col1').animate({ marginTop: 0 }, duration1, function(){});
		}
		// ----- END value prop animations -------

		// ------- skills animation -----------
	  if($("body").scrollTop() > 2100){
			var duration2 = 1200		
			$('.ruby').animate({ width:"80%" }, duration2,function(){});
			$('.rails').animate({ width:"70%" }, duration2,function(){});
			$('.javascript').animate({ width:"60%" }, duration2,function(){});
			$('.css').animate({ width:"40%" }, duration2,function(){});
			$('.jquery').animate({ width:"30%" }, duration2,function(){});
	  }
	  // --------- END skills animation ----------
	});

	// ------ END SCROLL TRIGGERS ------------


	

});


