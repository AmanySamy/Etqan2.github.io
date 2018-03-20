/*global $, alert, console */

$(function() {
	'use strict';
	
	$('html').niceScroll();
	
	/*--------- /Add Scrolled class to navbar -----*/
	$(window).scroll(function(){
		var navbar = $('nav');
		if($(window).scrollTop() >= navbar.height()){
			if(!navbar.hasClass('scrolled  fixed-top')){
				navbar.addClass('scrolled  fixed-top');
			}			
		}else{
			navbar.removeClass('scrolled  fixed-top');
		}
	});
	
	/*--------- Add Active Class to Clicked Link in navbar -----*/
	$(".navbar-nav li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		
		/*--------- Make Smooth Scroll -----*/
		$('html , body').animate({
			scrollTop : ($($(this).data("link"))).offset().top - 50
		},1500);
		
	
	});
	/*--------- Call Owl Carousel -----*/
	$(".owl-carousel").owlCarousel({
		loop:true,
		rtl:true,
		dots:false, 
		nav:true,
		navText :['<i class="fa fa-chevron-up"></i>','<i class="fa fa-chevron-down"></i>'],
		items:1,
		animateOut: 'slideOutUp', 
		animateIn: 'slideInUp',
		autoplay: true,
		autoplayHoverPause: true,
		smartSpeed:1000,
		
	});

	/*--------- jQuery counterUp -----*/ 
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	/*--------- Ttiger wow Animation -----*/ 
	new WOW().init();


});