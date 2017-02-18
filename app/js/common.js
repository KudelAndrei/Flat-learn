$(function() {

	$(".toggle-menu").click(function(){
		$(this).siblings().toggleClass("active");
		$(".menu").slideToggle();
	});

	$(".toggle-close").click(function(){
		$(".menu-wrap").toggleClass("active");
		$(".menu").hide(1);
	});

	$(".menu-wrap .menu").click(function(){
		$(".menu-wrap").toggleClass("active");
		$(".menu").hide(1);
	});


	$(".search i").click(function(){
		$(".search").toggleClass("on");
		$(".search input").attr("autofocus", "");
	});

	$(".slider-header").slick({
		arrows: true,
		prevArrow: '<div class="header-nav nav-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
		nextArrow: '<div class="header-nav nav-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
		asNavFor: '.header-nav',
		responsive: [
		 {
			breakpoint: 1150,
			settings: {
				infinite: true,
				arrows: false,
			}}
		]
	});
		$('.header-nav').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		asNavFor: '.slider-header',
		dots: false,
		prevArrow: '<div class="header-navigation navigation-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
		nextArrow: '<div class="header-navigation navigation-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
		focusOnSelect: true,
		 responsive: [
		 {
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				infinite: true,
			},
			breakpoint: 880,
			settings: {
				arrows: false,
			}
		 }]
	});

	$(".bottom").click(function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
	});


});
