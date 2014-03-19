


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

	// --- scroll trigger and skill animation --------
	$(window).on("scroll", function(){
	  if($("body").scrollTop() > 2100){
	  	console.log("scroll triggered")
	    $(window).off("scroll");
	    // Do some stuff here ..
	    // ------- skills animation -----------
			var duration = 1200		
			$('.ruby').animate({ width:"80%" }, duration,function(){});
			$('.rails').animate({ width:"70%" }, duration,function(){});
			$('.javascript').animate({ width:"60%" }, duration,function(){});
			$('.css').animate({ width:"40%" }, duration,function(){});
			$('.jquery').animate({ width:"30%" }, duration,function(){});
	  }
	});

});


