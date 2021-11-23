(function($){
  'use strict';



// Owl Carousel JS

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,
  autoplayTimeout:2500,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:2
      }
  } }) 






// mobile menu click


$('.loging-btn ul i.fa-bars').on('click', function(){
  $('.mobile-menu').fadeIn();
  $(this).fadeOut();
  $('.html').animate({ marginLeft : -500 });
  $('.loging-btn ul i.fa-times').fadeIn();
});

$('.loging-btn ul i.fa-times').on('click', function(){
  $('.mobile-menu').fadeOut();
  $(this).fadeOut();
  $('.html').animate({ marginLeft : 0 });
  $('.loging-btn ul i.fa-bars').fadeIn();
});




// wow js

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animate__animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();



// scroll top btn

$(window).scroll(function(){

  var scroll = $(window).scrollTop();

  if( scroll > 1200) {
    $('.icon').fadeIn();
  }
  else{
    $('.icon').fadeOut();
  }

  });







}) (jQuery);