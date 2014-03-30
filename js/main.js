


$(document).ready(function() {

	//------- hide/show project titles
	$('.project-container').on('mouseenter', function(){
		$(this).find("h2").hide();
	});

	$('.project-container').on('mouseleave', function(){
		$(this).find("h2").show();
	});
	// END HIDE/SHOW project titles --------------



	// -------animate scroll on nav clicks
	$('li a').click(function(){
	    var $href = $(this).attr('href');
	    var $anchor = $($href).offset();
	    $('body').animate({ scrollTop: $anchor.top });
	    return false;
	});
	// ----------- END ANIMATE NAV SCROLL-----------------

	var randNum;
	var randomProfileImage = randNum;
	var pics = 2

	// assign numbers to each profile pic
	var pic1 = 'images/shark_200.jpg'
	var pic2 = 'images/ashraf_200.jpg'
	var pic2 = 'images/ashraf_200.jpg'
	// generate random number and closest pic number will be used



	// profile pic animates on hover
	$('#profile-pic').on('mouseover', function(){
		$(this).attr('src', 'images/TechnoTim.gif');
		randNum = (1 + Math.floor(Math.random() * pics));
		if (randNum === 1) {
			randomProfileImage = pic1
		} else if (randNum === 	2) {
			randomProfileImage = pic2
		}	else if (randNum === 	3) {
			randomProfileImage = pic3
		}	
	})
	$('#profile-pic').on('mouseleave', function(){
		$(this).attr('src', randomProfileImage);
	});
	// END PROFILE PIC ANIMATION ------------------


	// ---------    sticky nav
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
// ------> END STICKY NAV ------------------

	// --- scroll triggers and animations 
	$(window).on("scroll", function(){
		if($("body").scrollTop() > 20) {
			$('#landing-title-tagline').addClass('animated fadeOutUp');
		} else if ($("body").scrollTop() < 60) {
			$('#landing-title-tagline').removeClass('animated fadeOutUp');
		}
		//----------- END tagline fade in/out -----------

		// -------- value prop animations 
		// if($("body").scrollTop() > 1000) {
		// 	var duration1 = 800;
		// 	$('.col1').animate({ marginTop: 0 }, duration1, function(){});
		// 	$('.col2').animate({ marginTop: 200 }, duration1, function(){});
		// }
		// ----- END value prop animations -------

		// ------- skills animation 
	  if($("body").scrollTop() > 2100){
			var duration2 = 1200		
			$('.ruby').animate({ width:"600px" }, duration2,function(){});
			$('.rails').animate({ width:"70%" }, duration2,function(){});
			$('.backbone').animate({ width:"40%" }, duration2,function(){});
			$('.css').animate({ width:"50%" }, duration2,function(){});
			$('.jquery').animate({ width:"60%" }, duration2,function(){});
	  }
	  // --------- END skills animation ----------
	});

	// ------ END SCROLL TRIGGERS ------------


	

});


