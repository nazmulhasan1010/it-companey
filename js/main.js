// nav more hover option

$('#option').mouseover(function () {
    $('.option-modal').css("display",
        "block"
    );
});
$('.option-modal').mouseout(function () {
    $('.option-modal').css("display",
        "none"
    );
});

// owl carousel

$('.owl-carousel-for-services').owlCarousel({
    loop: true,
    margin: 50,
    nav: false,
    items: 3,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    center: true,

})
$('.owl-carousel-for-about').owlCarousel({
    loop: true,
    margin: 50,
    nav: false,
    items: 1,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    center: true,

})

// owl carousel next and preview event

var owl = $('.owl-carousel');
owl.owlCarousel();

$('.customNextBtn').click(function () {
    owl.trigger('next.owl.carousel');
})
$('.customPrevBtn').click(function () {
    owl.trigger('prev.owl.carousel', [300]);
})

// pricing card
const card = document.querySelectorAll('.pricing-main-content .card');
card.forEach(button => {
    button.addEventListener('click', function () {
        card.forEach(btn => btn.classList.remove('card-active'));
        this.classList.add('card-active');
    });
});


// common

$(document).click(function (e) {
    $('.option-modal').css("display",
        "none"
    );
});