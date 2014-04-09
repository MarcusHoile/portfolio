
function initialize(){

	// global vairables
	var controller = new ScrollMagic();
	var $html = $('html');
	var $body = $('body');
	var $stickyNavTop = $('nav').offset().top;
	var $contactTop = ($('#contact').offset().top - 50);
	var $skillsTrigger = $('#skill-trigger').offset().top;
	var $windowScrollTop = $(window).scrollTop();
	setJquerySelectors();
	
	
	$(window).scroll(function() {
		stickyNav();
		taglineFade();
		var $windowScrollTop = $(window).scrollTop();
		if ($windowScrollTop > $skillsTrigger) {
			skillsAnimation();
		}
		
	});


	function skillsAnimation(){
		// ------- skills animation 
		var duration = 1200
		$('.ruby').animate({ width:"93%" }, {duration: duration});
		$('.rails').delay(50).animate({ width:"88%" }, duration, function(){});
		$('.jquery').delay(100).animate({ width:"75%" }, duration, function(){});
		$('.css').delay(150).animate({ width:"73%" }, duration, function(){});
		$('.ajax').delay(200).animate({ width:"64%" }, duration, function(){});
		$('.backbone').delay(250).animate({ width:"64%" }, duration, function(){});
		$('.bow-hunting').delay(500).animate({ width:"98%" }, duration, function(){});
	} // --------- END skills animation ----------

	function taglineFade(){
		var $tagline = $('#landing-title-tagline');
		var $skyline = $('#landing-pane');
		if (($html.scrollTop() > 20) || ($body.scrollTop() > 20)) {
			$tagline.addClass('fadeOutUp');
		} else if (($html.scrollTop() < 20) || ($body.scrollTop() < 20)){
			$tagline.removeClass('fadeOutUp');
		}
	}


	function stickyNav(){	
		var $nav = $('nav');
		var $windowScrollTop = $(window).scrollTop();

		if ($windowScrollTop > $stickyNavTop) { 
			$nav.addClass('sticky');
		} else {
			$nav.removeClass('sticky'); 
		}
		// hide nav when on contact section
		if ($windowScrollTop > $contactTop) {
			$nav.removeClass('sticky'); 	
		}
	};

	function setJquerySelectors(){
		// -------animate scroll on nav clicks
		$('li a').click(function(){
			var $href = $(this).attr('href');
			var $anchor = $($href).offset();
			$html.animate({ scrollTop: $anchor.top });
			$body.animate({ scrollTop: $anchor.top });
			return false;
		}); // ----------- END ANIMATE NAV SCROLL-----------------

		// arrow on landing pane
		$('#scroll-indicator').click(function(){
			console.log('clicked');
			var href = '#about-me';
			var $anchor = $(href).offset();
			$html.animate({ scrollTop: $anchor.top }, 800);
			$body.animate({ scrollTop: $anchor.top }, 800);

			return false;
		})
	}

	function profilePics(){	
		var $profilePic = $('#profile-pic');
		var randNum;
		var randomProfileImage = randNum;
		var pics = 2
		// assign numbers to each profile pic
		var pic1 = 'images/shark_200.jpg'
		var pic2 = 'images/ashraf_200.jpg'
		var pic2 = 'images/ashraf_200.jpg'

		// generate random number and closest pic number will be used
		// profile pic animates on hover
		$profilePic.on('mouseover', function(){
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
		$profilePic.on('mouseleave', function(){
			$(this).attr('src', randomProfileImage);
		}); // END PROFILE PIC ANIMATION ------------------	

	} // profilePics ---------

}

