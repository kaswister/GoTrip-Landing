//carousel

const owl = $('.owl-carousel');

owl.owlCarousel({
    center: true,
    loop: true,
    margin: 20,
    items: 1,
    startPosition: 1,
    responsive: {
      480: {
        items: 2,
      },
      850: {
        items: 3,
      },
      1200: {
        margin: 30,
        items: 3,
      }
    }

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
  document.body.classList.toggle('no-scroll')
}
