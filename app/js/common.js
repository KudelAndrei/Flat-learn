$(function() {

	$(".toggle-menu").click(function(){
		$(this).parent().toggleClass("active");
		$(".menu-wrap").css({'left': '0'});
		$(".menu").slideToggle();
	});

	$(".slider-header").slick({
		arrows: true,
		prevArrow: '<div class="slider-nav nav-prev"></div>',
		nextArrow: '<div class="slider-nav nav-next"></div>',
	});

});
