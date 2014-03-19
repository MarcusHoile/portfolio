


$(document).ready(function() {

	$('.project-container').on('mouseenter', function(){
		$(this).find("h2").hide();
	});

	$('.project-container').on('mouseleave', function(){
		$(this).find("h2").show();
	});







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

	// --- scroll trigger and animations --------
	$(window).on("scroll", function(){

		if($("body").scrollTop() > 1000) {
			var duration1 = 800;
			$('.col1').animate({ marginTop: 0 }, duration1, function(){});
		}

	  if($("body").scrollTop() > 2100){
	    // Do some stuff here ..
	    // ------- skills animation -----------
			var duration2 = 1200		
			$('.ruby').animate({ width:"80%" }, duration2,function(){});
			$('.rails').animate({ width:"70%" }, duration2,function(){});
			$('.javascript').animate({ width:"60%" }, duration2,function(){});
			$('.css').animate({ width:"40%" }, duration2,function(){});
			$('.jquery').animate({ width:"30%" }, duration2,function(){});
	  }
	});

});


