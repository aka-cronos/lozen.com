$(document).ready(function() {
  $('.slider').unslider({
    autoplay: true,
    delay: 6000,
    infinite: true,
    nav: false,
    arrows: {
      prev: '<a class="unslider-arrow prev"><img src="/img/arrow-left.png" alt="" /></a>',
      next: '<a class="unslider-arrow next"><img src="/img/arrow-right.png" alt="" /></a>'
    }
  });

  $(document).ready(function() {
    $('.mainNav-trigger').bigSlide({
      menu: "#mainNav__mobile",
      side: "right",
      menuWidth: "100%"
    });
  });
});