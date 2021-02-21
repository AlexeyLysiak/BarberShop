$(document).ready(function (e) {
	btnBurger();
  swiper();
});

function btnBurger(e) {
	$('.hamburger').on('click', function() {
		const $this = $(this);
		const $parent = $this.parents('.header');

		if ($this.hasClass('is-active')) {
			$this.removeClass('is-active');
			$parent.removeClass('open-menu');
      $('.wrapper').removeClass('lock');
		} else {
			$this.addClass('is-active');
      $parent.addClass('open-menu');
      $('.wrapper').addClass('lock');
		}
	})
	$('.wrapper').on('click', function(e) {
		if (!$(e.target).closest('.hamburger, .nav-list').length) {
			if ($('.header').hasClass('open-menu')) {
				$('.hamburger').removeClass('is-active');
				$('.header').removeClass('open-menu');
        $('.wrapper').removeClass('lock');
			}
		}
	});
}


function swiper() {
  // const swiper = new Swiper('.swiper-container', {
  //   direction: 'vertical',
  //   loop: true,
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  // });

  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    loop: true,
    spaceBetween: 30,
  });
}