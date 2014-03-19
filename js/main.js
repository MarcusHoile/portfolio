


$(document).ready(function() {

	$('.project-container').on('mouseenter', function(){
		$(this).find("h2").hide();
	});

	$('.project-container').on('mouseleave', function(){
		$(this).find("h2").show();
	});



// ------- skills animation -----------

var duration = 1200
	$('.skill').on('click', function(){
		console.log('clicked');
		$('.ruby').animate({ width:"80%" }, duration,function(){});
		$('.rails').animate({ width:"70%" }, duration,function(){});
		$('.javascript').animate({ width:"60%" }, duration,function(){});
		$('.css').animate({ width:"40%" }, duration,function(){});
		$('.jquery').animate({ width:"30%" }, duration,function(){});
	});
// ----- end of skills animation ----------



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


});


