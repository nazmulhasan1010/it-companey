var width = $(window).width();
// nav more hover option
if (width > 768) {
    $("#option").mouseover(function () {
        $(".option-modal").css("display", "block");
        $("#moreIcon").css("transform", "rotate(90deg)");
    });
    $(".option-modal").mouseout(function () {
        $(".option-modal").css("display", "none");
        $("#moreIcon").css("transform", "rotate(0deg)");
    });
}

// owl carousel

$(".owl-carousel-for-services").owlCarousel({
    loop: true,
    nav: false,
    items: 3,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    center: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    },
});
$(".owl-carousel-for-about").owlCarousel({
    loop: true,
    nav: false,
    items: 1,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    center: true,
});
$(".owl-carousel-for-reviews").owlCarousel({
    loop: true,
    margin: 50,
    nav: false,
    items: 4,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    center: true,
    responsive: {
        0: {
            items: 1,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    },
});

// owl carousel next and preview event
var owl = $(".owl-carousel");
owl.owlCarousel();

$(".customNextBtn").click(function () {
    owl.trigger("next.owl.carousel");
});
$(".customPrevBtn").click(function () {
    owl.trigger("prev.owl.carousel", [300]);
});

// pricing card
const card = document.querySelectorAll(".pricing-main-content .card");
card.forEach((button) => {
    if (width > 768) {
        $(".card-2").addClass("card-active");
        button.addEventListener("mouseover", function () {
            card.forEach((btn) => btn.classList.remove("card-active"));
            this.classList.add("card-active");
        });
        button.addEventListener("mouseout", function () {
            card.forEach((btn) => btn.classList.remove("card-active"));
            $(".card-2").addClass("card-active");
        });
    }
});

// skill bar
const indicator = document.querySelectorAll(".skill-indicator");
const indicatorPointer = document.querySelectorAll(".skill-indicator-pointer");
for (let i = 0; i < indicator.length; i++) {
    const indicatorPont = indicator[i].innerHTML;
    indicatorPointer[i].style.width = indicatorPont;
}

// common

$(document).click(function (e) {
    $(".option-modal").css("display", "none");
});

// over view count value
const counterView = document.querySelectorAll(".over-view-count-value");
counterView.forEach((counterView) => {
    let startValue = 0;
    let endValue = counterView.getAttribute("data-endVal");
    let duration = 5;
    let counter = setInterval(() => {
        startValue += 1;
        counterView.textContent = startValue + "+";
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});

// sticky nav bar
var navbar = document.querySelector("#header");

window.onscroll = function () {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        navbar.classList.add("headerSticky");
    } else {
        navbar.classList.remove("headerSticky");
    }
};

// navigation
const navButton = document.querySelector("#menuMoreIconBar"),
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
});

// more option
$("#option").click(function () {
    if (width < 768) {
        if ($(".option-modal-res").css("display") == "block") {
            $(".option-modal-res ").css("display", "none");
            $("#option").css("height", "30px");
            $("#moreIcon").css("transform", "rotate(0deg)");
        } else {
            $("#option").css("height", "220px");
            $(".option-modal-res ").css("display", "block");
            $("#moreIcon").css("transform", "rotate(90deg)");
        }
    }
});