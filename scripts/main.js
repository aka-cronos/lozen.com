$(document).ready(function() {
  $('.slider').unslider({
    autoplay: true,
    infinite: true,
    nav: false,
    arrows: {
      prev: '<a class="unslider-arrow prev"><img src="/img/arrow-left.png" alt="" /></a>',
      next: '<a class="unslider-arrow next"><img src="/img/arrow-right.png" alt="" /></a>'
    }
  });

  $('.detail').click(function () {
    var $currentElement = $(this);
    
    if ($currentElement.hasClass('is-open')) {
      $currentElement.removeClass('is-open');
    } else {
      $('.detail').removeClass('is-open');
      $currentElement.addClass('is-open');
    }
  });

  $('#gallery-trigger').click(function() {
    var $slider = $('.unslider');

    $slider.addClass('sliderFixed');
  });
});