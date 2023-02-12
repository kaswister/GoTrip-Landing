const owl = $('.owl-carousel');

owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    items: 3,

});

$('.slider__btn__prev').click(function() {
    owl.trigger('prev.owl.carousel');
})

$('.slider__btn__next').click(function() {
    owl.trigger('next.owl.carousel');
})

