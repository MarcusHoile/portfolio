
function initialize(){

	// global vairables
	var controller = new ScrollMagic();
	var $html = $('html');
	var $body = $('body');
	var $stickyNavTop = $('nav').offset().top;
	var $contactTop = ($('#contact').offset().top);
	// setScrollPins();
	setJquerySelectors();
	
	// profilePics();
	// addParallax();

	function addParallax() {
		var tween = new TimelineMax();
			tween.add([
				TweenMax.to("#parallaxContainer #landing-pane", 1, {backgroundPosition: "-40% 0", ease: Linear.easeNone}),
				TweenMax.to("#parallaxContainer #about-me", 1, {backgroundPosition: "-500% 0", ease: Linear.easeNone})
			]);

		// build scene
		var scene = new ScrollScene({triggerElement: "#parallaxContainer", duration: 2000, offset: 450})
						.setTween(tween)
						.setPin("#parallaxContainer")
						.addTo(controller);

		// show indicators (requires debug extension)
		scene.addIndicators();
	}
	
	$(window).scroll(function() {
		stickyNav();
		skillsAnimation();
		taglineFade();
		// skylineAnimate();
		
	});



	function skylineAnimate() {
		var $landingPane = $('#landing-pane');
		$landingPane.animate({'opacity': '0'}, 500, 'linear');
	}

	function skillsAnimation(){
		// ------- skills animation 
		if (($html.scrollTop() > 3400) || ($body.scrollTop() > 3400)) {
			var duration = 1200
			$('.ruby').animate({ width:"660px" }, {duration: duration});
			$('.rails').delay(50).animate({ width:"630px" }, duration, function(){});
			$('.jquery').delay(100).animate({ width:"530px" }, duration, function(){});
			$('.css').delay(150).animate({ width:"490px" }, duration, function(){});
			$('.ajax').delay(200).animate({ width:"430px" }, duration, function(){});
			$('.backbone').delay(250).animate({ width:"430px" }, duration, function(){});
			$('.bow-hunting').delay(500).animate({ width:"680px" }, duration, function(){});
		}
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

	function setScrollPins(){
		// init controller
		controller = new ScrollMagic();
		var scrollDuration = 1000;
		// build scene
		new ScrollScene({triggerElement: "#trigger1", duration: scrollDuration})
			.setPin("#about-me")
			.addTo(controller)
			.triggerHook(0);
		new ScrollScene({triggerElement: "#trigger4", duration: scrollDuration})
			.setPin("#skills")
			.addTo(controller)
			.triggerHook(0);		
	}

	function stickyNav(){	
		var $windowScrollTop = $(window).scrollTop();
		var $nav = $('nav');

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

