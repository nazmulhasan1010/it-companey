"use strict";

var _$$owlCarousel, _$$owlCarousel2, _$$owlCarousel3;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var width = $(window).width(); // nav more hover option

if (width > 768) {
  $("#option").mouseover(function () {
    $(".option-modal").css("display", "block");
    $("#moreIcon").css("transform", "rotate(90deg)");
  });
  $(".option-modal").mouseout(function () {
    $(".option-modal").css("display", "none");
    $("#moreIcon").css("transform", "rotate(0deg)");
  });
} // owl carousel


$(".owl-carousel-for-services").owlCarousel((_$$owlCarousel = {
  loop: true,
  nav: false,
  items: 3
}, _defineProperty(_$$owlCarousel, "loop", true), _defineProperty(_$$owlCarousel, "autoplay", true), _defineProperty(_$$owlCarousel, "autoplayHoverPause", true), _defineProperty(_$$owlCarousel, "center", true), _defineProperty(_$$owlCarousel, "responsiveClass", true), _defineProperty(_$$owlCarousel, "responsive", {
  0: {
    items: 1
  },
  700: {
    items: 2
  },
  1000: {
    items: 3
  }
}), _$$owlCarousel));
$(".owl-carousel-for-about").owlCarousel((_$$owlCarousel2 = {
  loop: true,
  nav: false,
  items: 1
}, _defineProperty(_$$owlCarousel2, "loop", true), _defineProperty(_$$owlCarousel2, "autoplay", true), _defineProperty(_$$owlCarousel2, "autoplayHoverPause", true), _defineProperty(_$$owlCarousel2, "center", true), _$$owlCarousel2));
$(".owl-carousel-for-reviews").owlCarousel((_$$owlCarousel3 = {
  loop: true,
  margin: 50,
  nav: false,
  items: 4
}, _defineProperty(_$$owlCarousel3, "loop", true), _defineProperty(_$$owlCarousel3, "autoplay", true), _defineProperty(_$$owlCarousel3, "autoplayHoverPause", true), _defineProperty(_$$owlCarousel3, "center", true), _defineProperty(_$$owlCarousel3, "responsive", {
  0: {
    items: 1
  },
  700: {
    items: 2
  },
  1000: {
    items: 3
  }
}), _$$owlCarousel3)); // owl carousel next and preview event

var owl = $(".owl-carousel");
owl.owlCarousel();
$(".customNextBtn").click(function () {
  owl.trigger("next.owl.carousel");
});
$(".customPrevBtn").click(function () {
  owl.trigger("prev.owl.carousel", [300]);
}); // pricing card

var card = document.querySelectorAll(".pricing-main-content .card");
card.forEach(function (button) {
  if (width > 768) {
    $(".card-2").addClass("card-active");
    button.addEventListener("mouseover", function () {
      card.forEach(function (btn) {
        return btn.classList.remove("card-active");
      });
      this.classList.add("card-active");
    });
    button.addEventListener("mouseout", function () {
      card.forEach(function (btn) {
        return btn.classList.remove("card-active");
      });
      $(".card-2").addClass("card-active");
    });
  }
}); // skill bar

var indicator = document.querySelectorAll(".skill-indicator");
var indicatorPointer = document.querySelectorAll(".skill-indicator-pointer");

for (var i = 0; i < indicator.length; i++) {
  var indicatorPont = indicator[i].innerHTML;
  indicatorPointer[i].style.width = indicatorPont;
} // common


$(document).click(function (e) {
  $(".option-modal").css("display", "none");
}); // over view count value

var counterView = document.querySelectorAll(".over-view-count-value");
counterView.forEach(function (counterView) {
  var startValue = 0;
  var endValue = counterView.getAttribute("data-endVal");
  var duration = 5;
  var counter = setInterval(function () {
    startValue += 1;
    counterView.textContent = startValue + "+";

    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
}); // sticky nav bar

var navbar = document.querySelector("#header");

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.classList.add("headerSticky");
  } else {
    navbar.classList.remove("headerSticky");
  }
}; // navigation


var navButton = document.querySelector("#menuMoreIconBar"),
    navMenu = document.querySelector("#menuItems");
$("#menuMoreIconBar").click(function () {
  if (navMenu.style.display == "block") {
    navMenu.style.display = "none";
  } else {
    $("#menuItems").addClass("menu-itemsActive");
    navButton.style.display = "none";
  }
});
$("#navCross").click(function () {
  $("#menuItems").removeClass("menu-itemsActive");
  navButton.style.display = "block";
}); // more option

$("#option").click(function () {
  if ($(".option-modal-res").css("display") == "block") {
    $(".option-modal-res ").css("display", "none");
    $("#option").css("height", "30px");
    $("#moreIcon").css("transform", "rotate(0deg)");
  } else {
    $("#option").css("height", "220px");
    $(".option-modal-res ").css("display", "block");
    $("#moreIcon").css("transform", "rotate(90deg)");
  }
});