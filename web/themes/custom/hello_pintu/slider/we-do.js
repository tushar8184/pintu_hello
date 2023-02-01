(function ($, window, Drupal) {
  Drupal.behaviors.wedo = {
    attach: function (context) {
      $('.we-do-card-body', context).slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow: $('.we-do__right-arrow'),
        nextArrow: $('.we-do__left-arrow'),
        variableWidth: true,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    },
  };
})(jQuery, window, Drupal);
