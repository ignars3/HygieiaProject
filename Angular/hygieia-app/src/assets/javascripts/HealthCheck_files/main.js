(function($){
	'use strict';


/* --------------------------------------------------
	Initialization
-------------------------------------------------- */

    // Initialize all functions when the document is ready.
	$(document).ready(function(){

		initNavbar();
		initAnimation();
		initCircleCharts();
		initNbrCounters();
		initSliders();
		initGallery();
		initScroller();

		if ( document.getElementById('shop-slider-range') ) {
			initRangeSlider();
		}

		// Parallax disabled for mobile screens
		if ($(window).width() >= 1260 ) {

			$(window).stellar({
				hideDistantElements: false
			});
		}

	});

	// Initialize functions after elements are loaded.
	$(window).load(function() {

		// Preloader
		$('.preloader img').fadeOut(); // will first fade out the loading animation
		$('.preloader').delay(350).fadeOut('slow', function() {

		});

		initPortfolio();
		initBlogMasonry();

	});


/* --------------------------------------------------
	WordPress - Custom Edits 
-------------------------------------------------- */

	// Sidebar post single - serach widget icon
	$('.widget_search input[type="submit"]').after('<i class="fa fa-search search_widget_icon"></i>');
	$('.widget_search form input[type="text"]').attr('placeholder', 'Search...');

	// Footer Widgets - newsletter plane icon
	$('input[type="submit"].newsletter-widget-send-btn').before('<i class="fa fa-send-o footer_newsletter_send_icon"></i>');

	// Add class to open the Magnific Lightbox for the gallery items in blog post
	$('.bp-content .gallery .gallery-item .gallery-icon a').addClass('open-gallery');


/* --------------------------------------------------
	Navigation | Navbar
-------------------------------------------------- */
	
	function initNavbar () {

		// Sticky Nav & Transparent Background
		$(window).scroll(function(){
			
			if ($(window).scrollTop() > 40) {
				$('nav').removeClass('navbar-trans', 300);
				$('nav').removeClass('navbar-trans-dark');
				$('nav').addClass('navbar-small', 300);
			}
			else {
				$('nav:not(.mobile-nav)').addClass('navbar-trans', 300);
				$('nav').removeClass('navbar-small', 300);

				if ($('nav').hasClass('trans-helper')) {
					$('nav:not(.mobile-nav)').addClass('navbar-trans-dark');
				}
			}

			$('nav:not(.navbar-fixed-top)').removeClass('navbar-trans navbar-small navbar-trans-dark');
			if ($('nav').hasClass('navbar-trans-off')) {
				$('nav').removeClass('navbar-trans');
			}
		});


		// Nav on mobile screens
		$(window).resize(function() {
	        if ($(window).width() <= 1259) {
				$('nav').addClass('mobile-nav');
		    } else {
		    	$('nav').removeClass('mobile-nav');
		    }

    		if ($('nav').hasClass('mobile-nav')) {
    			$('nav').removeClass('navbar-trans');
    			$('nav').removeClass('navbar-trans-dark');
    		} else {
    			if ($(window).width() >= 1259 && $(window).top) {
    				$('nav').addClass('navbar-trans');
    			}
    		}

    		// Remove dropdown open on hover for small screens
    		if ($('nav').hasClass('mobile-nav')) {

    			$('.dropdown-toggle').on('mouseover', function(e){    
    			        e.preventDefault();

    			        $('.dropdown').removeClass('open');

    			    e.stopPropagation();
    			});
    		}

    		// Close mobile menu when clicked link
    		// var isNotDropdown = $('nav:not(.mobile-nav)');

    		if (!$('.nav a').hasClass('dropdown-toggle')) {

    			$('.nav a').on('click', function(){ 
			        if($('.navbar-toggle').css('display') !='none'){
			            $(".navbar-toggle").trigger( "click" );
			        }
			    });

    		}

	    }).resize();

		// Bugfix for iOS not scrolling on open menu
	    $(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });

	    $(document).ready(function(){
	    	$('.navbar-toggle').click(function(){
	    		$(this).toggleClass('open');
	    	});
	    });


	} // initNavbar


/* --------------------------------------------------
	Counters Circles
-------------------------------------------------- */

	function initCircleCharts () {

		$('.chart').easyPieChart({
			size: '150',
			lineWidth: 2,
			lineCap: 'square',
			trackColor: '',
		    barColor: '#f8f8f8',
		    scaleColor: false,
		    easing: 'easeOutBack',
		    animate: {
		    	duration: 1600,
		    	enabled: true 
		    }
		});
	}


/* --------------------------------------------------
	Number Counters
-------------------------------------------------- */

	function initNbrCounters () {

		$('.count-nbr').each(function () {
		    $(this).prop('Counter',0).animate({
		        Counter: $(this).text()
		    }, {
		        duration: 4700,
		        easing: 'easeOutBack',
		        step: function (now) {
		            $(this).text(Math.ceil(now));
		        }
		    });
		});
	}


/* --------------------------------------------------
	Sliders
-------------------------------------------------- */
	
	function initSliders() {

		// Testimonials Sliders
		$('.t-slider').each( function() {
			var t_slider = $(this);
			var arrows = $(this).data('arrows');
			var speed = $(this).data('speed');
			var autoplay = $(this).data('autoplay');
			var autoplay_speed = $(this).data('autoplay_speed');
			var animation = $(this).data('animation');
			var adaptive_height = $(this).data('adaptive_height');

			t_slider.slick({
				speed: speed,
				autoplay: autoplay,
				autoplaySpeed: autoplay_speed,
				fade: animation,
				slidesToShow: 1,
				slidesToScroll: 1,
				adaptiveHeight: adaptive_height,
				dots: false,
				arrows: arrows,
				prevArrow: '<button type="button" class="t-slider-nav slick-prev"><span class="linea-arrows-slim-left"></span></button>',
				nextArrow: '<button type="button" class="t-slider-nav slick-next"><span class="linea-arrows-slim-right"></span></button>',
			});
		});

		// Brands/Clients Slider
		$('.clients-slider').each( function() {
			var clients_slider = $(this);
			var speed = $(this).data('speed');
			var autoplay = $(this).data('autoplay');
			var autoplay_speed = $(this).data('autoplay_speed');
			var adaptive_height = $(this).data('adaptive_height');
			var slides_to_show = $(this).data('slides_to_show');
			var slides_to_scroll = $(this).data('slides_to_scroll');

			clients_slider.slick({
				speed: speed,
				autoplay: autoplay,
				autoplaySpeed: autoplay_speed,
				adaptiveHeight: adaptive_height,
				slidesToShow: slides_to_show, // 5
				slidesToScroll: slides_to_scroll, // 1
				dots: false,
				arrows: false,
				responsive: [
				    {
				      breakpoint: 999,
				      settings: {
				        slidesToShow: 3,
				        slidesToScroll: 2,
				        infinite: true,
				      }
				    },
				    {
				      breakpoint: 770,
				      settings: {
				        slidesToShow: 2,
				        slidesToScroll: 1
				      }
				    },
				    {
				      breakpoint: 599,
				      settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1
				      }
				    }
				]
			});
		});

		// Portfolio Single Slider
		$('.single-img-slider').each( function() {
			var single_img_slider = $(this);
			var speed = $(this).data('speed');
			var arrows = $(this).data('arrows');
			var dots = $(this).data('dots');
			var autoplay = $(this).data('autoplay');
			var autoplay_speed = $(this).data('autoplay_speed');
			var animation = $(this).data('animation');
			var adaptive_height = $(this).data('adaptive_height');
			var slides_to_show = $(this).data('slides_to_show');
			var slides_to_scroll = $(this).data('slides_to_scroll');

			single_img_slider.slick({
				speed: speed,
				autoplay: autoplay, // true
				autoplaySpeed: autoplay_speed, // 4000
				slidesToShow: slides_to_show, // 1
				slidesToScroll: slides_to_scroll, // 1
				adaptiveHeight: adaptive_height, // true
				fade: animation, // false
				dots: dots, // false
				arrows: arrows, // true
				prevArrow: '<button type="button" class="slider-nav sl-prev"><span class="linea-arrows-slim-left"></span></button>',
				nextArrow: '<button type="button" class="slider-nav sl-next"><span class="linea-arrows-slim-right"></span></button>',
			});
		});

	} // initSliders


/* --------------------------------------------------
	Portfolio
-------------------------------------------------- */
	
	function initPortfolio () {

		// Filters
		$('.portfolio-filters a').click(function (e) {
			  e.preventDefault();

			  $('li').removeClass('active');
			  $(this).parent().addClass('active');
		});

		
		// Full Width Gallery (3 columns)
		function pfolio3colFW () {
			
			var $container = $('#pfolio');
			// init
			$container.isotope({
				// options
				itemSelector: '.portfolio-item',
			});

			// Filter items
			$('#pfolio-filters').on( 'click', 'a', function() {
				var filterValue = $(this).attr('data-filter');
				$container.isotope({ filter: filterValue });
			});

		} // fwNogap3col


		function pfolioMasonry () {
			
			var $container = $('.pfolio-items');
			// init
			$container.isotope({
				// options
				itemSelector: '.p-item',
			    percentPosition: true,
			    layoutMode: 'packery',
			    masonry: {
			      columnWidth: '.grid-sizer'
			    }				
			});

			// Filter items
			$('#pfolio-filters').on( 'click', 'a', function() {
				var filterValue = $(this).attr('data-filter');
				$container.isotope({ filter: filterValue });
			});

		}


		pfolio3colFW();
		pfolioMasonry();

	} // initPortfolio


/* --------------------------------------------------
	Light Gallery
-------------------------------------------------- */

	function initGallery () {

		// Image Lightbox
		var hasPopup = $('a').hasClass('open-gallery');

		if (hasPopup) {

			$('.open-gallery').magnificPopup({
				type:'image',
				gallery: {
				    enabled: true
				}
			});
			
		}

		// Single Image Slider Lightbox
		var hasSISPopup = $('a').hasClass('sis-open-gallery');

		if (hasSISPopup) {

			$('.sis-open-gallery').magnificPopup({
				type:'image',
				gallery: {
				    enabled: true
				}
			});
			
		}

		// Video Lightbox
		var hasVideoPopup = $('a').hasClass('popup-video');

		if (hasVideoPopup) {

			$('.popup-video').magnificPopup({
	          	disableOn: 700, 
	         	type: 'iframe',
	          	mainClass: 'mfp-fade',
	          	removalDelay: 160,
	          	preloader: false,

	          	fixedContentPos: false
			});

		}

	} // initGallery


/* --------------------------------------------------
	Blog Masonry Layout
-------------------------------------------------- */

	function initBlogMasonry () {

		var $container = $('.blog-container');
			// init
			$container.isotope({
				// options
				itemSelector: '.blog-selector',
				percentPosition: true
			});
	}
	

/* --------------------------------------------------
  Contact Pages
-------------------------------------------------- */

	$('.show-map').on('click', function(e){
	  e.preventDefault();
	  $('.contact-info-wrapper').toggleClass('map-open');
	  $('.show-info-link').toggleClass('info-open');
	});

	$('.show-info-link').on('click', function(e){
	  e.preventDefault();
	  $('.contact-info-wrapper').toggleClass('map-open');
	  $(this).toggleClass('info-open');
	});


/* --------------------------------------------------
	Scroller
-------------------------------------------------- */

	function initScroller () {

		$('a[href*="#"]')
		  // Remove links that don't actually link to anything
		  .not('[href="#"]')
		  .not('[href="#0"]')
		  .click(function(event) {
		    // On-page links
		    if (
		      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		      && 
		      location.hostname == this.hostname
		    ) {
			      var target = $(this.hash);
			      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			      if (target.length) {
			        event.preventDefault();
			        $('html, body').animate({
			          scrollTop: target.offset().top,
			        }, 1050, function() {
				          var $target = $(target);
				          $target.focus();
				          if ($target.is(":focus")) { // Checking if the target was focused
				            return false;
				          } else {
				            $target.attr('tabindex','-1');
				            $target.focus();
				        }
			        });
			    }
		    }
		});
	} // initScroller


/* --------------------------------------------------
	Animation
-------------------------------------------------- */

	function initAnimation () {
		
		new WOW().init();

	}

})(jQuery);