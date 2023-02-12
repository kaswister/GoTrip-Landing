//carousel

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

//nav icon

const navButton = document.querySelector('.nav__toggle')
const menuIcon = document.querySelector('.menu-icon')
const nav = document.querySelector('.nav')

navButton.onclick = function(){
  nav.classList.toggle('nav--mobile')
  menuIcon.classList.toggle('menu-icon-active');
}
