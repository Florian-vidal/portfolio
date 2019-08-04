(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict



var sections = [];               // Nos sections correspondants aux ancres
var $navbar = $('.navbar-nav');  // L'élément contenant nos liens
var $navbara = $('a', $navbar);  // Nos liens

$navbara.each(function(){
  // On incrémente notre super tableau section avec les sections correspondant aux liens
  // <a href="HREF"...
  // $(HREF) <= l'élément correspondant au lien dans mon code HTML
  sections.push($($(this).attr('href')));
});


// On écoute le scroll
$(window).scroll(function(e){
  var scrollTop = $(this).scrollTop() + ($(window).height() / 2); // La position du scroll + moitié de la fenêtre
  // On parcourt nos sections stocké préalablement
  for(var i in sections){
    var section = sections[i];
    // cette section est dépassé par le scroll ?
    if (scrollTop > section.offset().top) {
      scrolled_id = section.attr('id');   // On stocke son ID
    }
  }
});


$navbara.removeClass('current');
$('a[href="#' + scrolled_id + '"]', $navbar).addClass('current');