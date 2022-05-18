"use strict";

var _$$owlCarousel, _$$owlCarousel2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// nav more hover option
$('#option').mouseover(function () {
  $('.option-modal').css("display", "block");
});
$('.option-modal').mouseout(function () {
  $('.option-modal').css("display", "none");
}); // owl carousel

$('.owl-carousel-for-services').owlCarousel((_$$owlCarousel = {
  loop: true,
  margin: 50,
  nav: false,
  items: 3
}, _defineProperty(_$$owlCarousel, "loop", true), _defineProperty(_$$owlCarousel, "autoplay", true), _defineProperty(_$$owlCarousel, "autoplayHoverPause", true), _defineProperty(_$$owlCarousel, "center", true), _$$owlCarousel));
$('.owl-carousel-for-about').owlCarousel((_$$owlCarousel2 = {
  loop: true,
  margin: 50,
  nav: false,
  items: 1
}, _defineProperty(_$$owlCarousel2, "loop", true), _defineProperty(_$$owlCarousel2, "autoplay", true), _defineProperty(_$$owlCarousel2, "autoplayHoverPause", true), _defineProperty(_$$owlCarousel2, "center", true), _$$owlCarousel2)); // owl carousel next and preview event

var owl = $('.owl-carousel');
owl.owlCarousel();
$('.customNextBtn').click(function () {
  owl.trigger('next.owl.carousel');
});
$('.customPrevBtn').click(function () {
  owl.trigger('prev.owl.carousel', [300]);
}); // pricing card

var card = document.querySelectorAll('.pricing-main-content .card');
card.forEach(function (button) {
  button.addEventListener('click', function () {
    card.forEach(function (btn) {
      return btn.classList.remove('card-active');
    });
    this.classList.add('card-active');
  });
}); // common

$(document).click(function (e) {
  $('.option-modal').css("display", "none");
});