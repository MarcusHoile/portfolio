
function initialize(){

	// global vairables
	var controller;
	var $body = $('body');
	var $stickyNavTop = $('nav').offset().top;
	setScrollPins();
	setJquerySelectors();
	profilePics();
	
	$(window).scroll(function() {
		stickyNav();
		skillsAnimation();
		taglineFade();
		console.log($body.scrollTop())
	});

	function skillsAnimation(){
		// ------- skills animation 
		if ($body.scrollTop() > 4500) {
			var duration2 = 1200		
			$('.ruby').animate({ width:"600px" }, duration2,function(){});
			$('.rails').animate({ width:"70%" }, duration2,function(){});
			$('.backbone').animate({ width:"40%" }, duration2,function(){});
			$('.css').animate({ width:"50%" }, duration2,function(){});
			$('.jquery').animate({ width:"60%" }, duration2,function(){});
		}
	} // --------- END skills animation ----------

	function taglineFade(){
		var $tagline = $('#landing-title-tagline');
		if($body.scrollTop() > 20) {
			$tagline.addClass('animated fadeOutUp');
		} else if ($body.scrollTop() < 60) {
			$tagline.removeClass('animated fadeOutUp');
		}
	}

	function setScrollPins(){
		// init controller
		controller = new ScrollMagic();
		var scrollDuration = 600;
		// build scene
		new ScrollScene({triggerElement: "#trigger1", duration: scrollDuration})
			.setPin("#about-me")
			.addTo(controller)
			.triggerHook(0)
			.addIndicators();
		new ScrollScene({triggerElement: "#trigger2", duration: scrollDuration})
			.setPin("#value-prop")
			.addTo(controller)
			.triggerHook(0)
			.addIndicators();	
		new ScrollScene({triggerElement: "#trigger3", duration: scrollDuration})
			.setPin("#projects")
			.addTo(controller)
			.triggerHook(0)
			.addIndicators();			
		new ScrollScene({triggerElement: "#trigger4", duration: scrollDuration})
			.setPin("#skills")
			.addTo(controller)
			.triggerHook(0.5)
			.addIndicators();		

	}
	function stickyNav(){
		
		var $windowScrollTop = $(window).scrollTop();
		var $nav = $('nav');

		if ($windowScrollTop > $stickyNavTop) { 
			$nav.addClass('sticky');
		} else {
			$nav.removeClass('sticky'); 
		}
	};

	function setJquerySelectors(){
		//------- hide/show project titles
		var $projectContainer = $('.project-container');
		$projectContainer.on('mouseenter', function(){
			$(this).find("h2").hide();
		});

		$projectContainer.on('mouseleave', function(){
			$(this).find("h2").show();
		}); // END HIDE/SHOW project titles --------------

		// -------animate scroll on nav clicks
		$('li a').click(function(){
			var $href = $(this).attr('href');
			var $anchor = $($href).offset();
			$body.animate({ scrollTop: $anchor.top });
			return false;
		}); // ----------- END ANIMATE NAV SCROLL-----------------

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

