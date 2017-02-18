$(function() {

	$(".toggle-menu").click(function(){
		$(this).parent().toggleClass("active");
		$(".menu-wrap").css({'left': '0'});
		$(".menu").slideToggle();
	});

	$(".search i").click(function(){
		$(".search").toggleClass("on");
		$(".search input").attr("autofocus", "");
	});

	$(".slider-header").slick({
		arrows: true,
		prevArrow: '<div class="header-nav nav-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
		nextArrow: '<div class="header-nav nav-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
		asNavFor: '.header-nav'
	});
		$('.header-nav').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		asNavFor: '.slider-header',
		dots: false,
		prevArrow: '<div class="header-navigation navigation-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
		nextArrow: '<div class="header-navigation navigation-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
		focusOnSelect: true
	});


});
