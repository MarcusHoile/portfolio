$('.project-container').on('mouseenter', function(){
	$(this).find("h2").hide();
});

$('.project-container').on('mouseleave', function(){
	$(this).find("h2").show();
});

