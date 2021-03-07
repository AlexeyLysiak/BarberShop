window.onload = init();

function init () {
  btnBurger();
  swiper();
}

function btnBurger() {
  const hamburger = document.querySelector(".hamburger");
  const parent = document.querySelector('.header');
  const wrapper = document.querySelector('.wrapper');
  hamburger.addEventListener('click', function() {
    if (hamburger.classList.contains('is-active')) {
      hamburger.classList.remove('is-active');
      parent.classList.remove('open-menu');
      wrapper.classList.remove('lock');
    } else {
      hamburger.classList.add('is-active');
      parent.classList.add('open-menu');
      wrapper.classList.add('lock')
    }
  })

  wrapper.addEventListener('click', function(e) {
    if (e.target == hamburger || e.target == document.querySelector('.nav-list')) {
      if (parent.classList.contains('open-menu')) {
        parent.classList.remove('open-menu');
        hamburger.classList.remove('is-active');
        wrapper.classList.remove('lock');
        console.log(hamburger);
      }
    }
  })
}

function swiper() {
  const swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    loop: true,
    spaceBetween: 30,
  });
}