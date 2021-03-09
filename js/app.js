(function ($) {
  "use strict";
 /* ---------------------------------------------
  Navigation
  --------------------------------------------- */

  // mobile nav
  $('.navbar-toggler').on('click', function (e) {
    $('.navbar-inner').toggleClass('active');
    $('.navbar-toggler-icon').toggleClass('active');
    $('.navbar').toggleClass('active');
    $('body').toggleClass('scroll-prevent');
    e.stopPropagation();
});

// Close on outside click
$('body, .navbar-nav .nav-item').on("click", function (e) {
    $(".navbar").removeClass("active");
    $(".navbar-inner").removeClass("active");
    $(".navbar-toggler-icon").removeClass("active");
    $('body').removeClass('scroll-prevent');
});

$('body').on("click",".navbar-inner", function () {
  e.stopPropagation();
  e.preventDefault();
});


/*----------------------------------
  background image holder
-----------------------------------*/
function backgroundHolder() {
$(".background-image-holder").each(function () {
    var thesrc = $(this).attr('src');
    $(this).parent().css("background-image", "url(" + thesrc + ")");
    $(this).parent().css("background-repeat", "no-repeat");
    $(this).hide();
});
}
backgroundHolder();


/*----------------------------------
 slider
-----------------------------------*/
var $carousel = $('.carosuel-slider');

var settings = {
  dots: false,
  arrows: false,
  slide: '.slide',
  slidesToShow: 5,
  centerMode: true,
  centerPadding: '185px',

  responsive:[
    {
    breakpoint: 768,
    settings:{
      slidesToShow: 2,
      centerMode: false,
    }
  },
    {
    breakpoint: 992,
    settings:{
      slidesToShow: 4,
      centerMode: false,
    }
  },
    {
    breakpoint: 1200,
    settings:{
      slidesToShow: 4,
      centerMode: false,
    }
  },
    {
    breakpoint: 1800,
    settings:{
      slidesToShow: 5,
    }
  },
]

};


function setSlideVisibility() {
  //Find the visible slides i.e. where aria-hidden="false"
  var visibleSlides = $carousel.find('.slide[aria-hidden="false"]');
  //Make sure all of the visible slides have an opacity of 1
  $(visibleSlides).each(function() {
    $(this).css('opacity', 1);
  });

  //Set the opacity of the first and last partial slides.
  $(visibleSlides).first().prev().css('opacity', 0);
}

$carousel.slick(settings);
$carousel.slick('slickGoTo', 1);
setSlideVisibility();

$carousel.on('afterChange', function() {
  setSlideVisibility();
});

/*----------------------------------
 Timer
-----------------------------------*/
$(document).ready(function(){
  loopcounter('timer');
});



})(jQuery);

