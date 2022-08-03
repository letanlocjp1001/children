;(function ($) {
  $(window).on('load', function () {
    var lazy = '.lazy'
    var lazy_txt = '.lazy_txt'
    var lazy_txt_spd = 20
    var view_num = 1.1

    var wy = $(window).scrollTop()
    _view_lazy_open(wy)

    $(window).bind('resize', function (e) {
      var wy = $(window).scrollTop()
      _view_lazy_open(wy)
    })

    $(window).bind('scroll', function () {
      var y = $(this).scrollTop()
      _view_lazy_open(y)
    })

    function _view_lazy_open(y) {
      var wh = $(window).height()
      $('body')
        .find(lazy)
        .each(function () {
          var lazy_t = $(this).offset().top - (y + parseInt(wh / view_num))
          if (lazy_t <= 0) {
            if (!$(this).hasClass('on')) {
              $(this).addClass('on')
            }
          }
        })
    }
  })
})(jQuery)
