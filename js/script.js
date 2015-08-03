$(document).ready(function () {
  if (($(window).width()) > 1024) {
    makeAnimations();
  }

  var fromTop = 600;
  if (($(window).width()) < 1367) {
    fromTop = 500;
  }

  var after = 'js-after';
  var showCircle = 'js-show-circle';

  var animations = [
    {
      "element": "js-hidden",
      "type": "js-show-hidden"
    },
    {
      "element": "js-hidden-line",
      "type": "js-show-hidden-line"
    },
    {
      "element": "js-upperLine",
      "type": "js-show-upperLine",
      "condition": "js-first-circles"
    }
  ];



  function basicAnimation(options) {
    $('.' + options.element).each(function () {
      var elementPosition = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();

      if (elementPosition < topOfWindow + fromTop) {
        $(this).addClass(options.type);
        $(this).removeClass(options.element);
        var self = $(this);


        if($(this).hasClass("sectionCompany-upperLine")) {
          var firstCircle = self.next().next();
          var secondCircle = self.next();

          if(!($(this).hasClass("js-first-circles"))){
            firstCircle = self.next();
            secondCircle = self.next().next();
          }
            setTimeout(function () {
              firstCircle.addClass(showCircle);
              setTimeout(function () {
                firstCircle.addClass(after);
              }, 450);
              setTimeout(function () {
                secondCircle.addClass(showCircle);
                setTimeout(function () {
                  secondCircle.addClass(after);
                  if(!(self.hasClass("js-first-circles"))) {
                    setTimeout(function () {
                      $('.sectionCompany-clients').addClass(after);
                    }, 1400);
                  }
                }, 600);
              }, 600);
            }, 450);
        }
      }
    });
  };

  function makeAnimations() {

    $(window).scroll(function () {

      animations.forEach(function (animation) {
        basicAnimation(animation);
      });

      //$('.js-hidden').each(function () {
      //  var elementPosition = $(this).offset().top;
      //  var topOfWindow = $(window).scrollTop();
      //
      //  if (elementPosition < topOfWindow + fromTop) {
      //    $(this).addClass("js-show-hidden");
      //    $(this).removeClass("js-hidden");
      //  }
      //});
      //
      //$('.js-hidden-line').each(function () {
      //  var elementPosition = $(this).offset().top;
      //  var topOfWindow = $(window).scrollTop();
      //
      //  if (elementPosition < topOfWindow + fromTop) {
      //    $('.sectionCompany').addClass(after);
      //    $(this).addClass("js-show-hidden-line");
      //  }
      //});
      //$('.upperLine').each(function () {
      //  var elementPosition = $(this).offset().top;
      //  var topOfWindow = $(window).scrollTop();
      //
      //  if (elementPosition < topOfWindow + fromTop) {
      //    var self = $(this);
      //    $(this).addClass("js-upperLine");
      //
      //    if (self.hasClass('js-first-circles')) {
      //      setTimeout(function () {
      //        self.next().next().addClass("js-show-circle");
      //        setTimeout(function () {
      //          self.next().next().addClass(after);
      //        }, 450);
      //        setTimeout(function () {
      //          self.next().addClass("js-show-circle");
      //          setTimeout(function () {
      //            self.next().addClass(after);
      //          }, 600);
      //        }, 600);
      //      }, 450);
      //    } else {
      //      setTimeout(function () {
      //        self.next().addClass("js-show-circle");
      //        setTimeout(function () {
      //          self.next().addClass(after);
      //        }, 450);
      //        setTimeout(function () {
      //          self.next().next().addClass("js-show-circle");
      //          setTimeout(function () {
      //            self.next().next().addClass(after);
      //            setTimeout(function () {
      //              $('.sectionCompany-clients').addClass(after);
      //            }, 1400);
      //          }, 600);
      //        }, 600);
      //      }, 450);
      //    }
      //  }
      //});
    });
  };
});
