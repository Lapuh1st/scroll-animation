$(window).load(function() {
  var isMobile = false;
  var fromTop = $(window).height()/1.45;
  var after = 'js-after';
  var showCircle = 'js-show-circle';
  var clients = $('.sectionCompany-clients');
  var showBlock = 'js-show-block';
  var historyItem = 'sectionHistory-item';

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

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    isMobile = true;
  }
  if (!isMobile) {
    makeAnimations();
  }

  function isMobileMode() {
    var matchMedia;
    matchMedia = window.matchMedia || window.msMatchMedia;
    if( matchMedia ) {
      return matchMedia("(max-width: 1120px)").matches;
    } else {
      return $(window).width() <= 1120;
    }
  };

  if(isMobileMode()){
    $.each(animations, function(i) {
      $('.' + animations[i].element).addClass(animations[i].type);
    });
    clients.addClass(after);
    $(".sectionCompany-circle").addClass(showCircle).addClass(after);
    $('.' + historyItem).addClass(showBlock);
  }

  function basicAnimation(options) {
    $('.' + options.element).each(function () {
      var elementPosition = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (elementPosition < topOfWindow + fromTop) {
        $(this).addClass(options.type);
        $(this).removeClass(options.element);
        var self = $(this);

        if($(this).hasClass('sectionCompany-upperLine')) {
          var firstCircle = self.next().next();
          var secondCircle = self.next();
          if(!($(this).hasClass(options.condition))){
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
                if(!(self.hasClass(options.condition))) {
                  setTimeout(function () {
                    clients.addClass(after);
                  }, 1400);
                }
              }, 600);
            }, 600);
          }, 450);
        }

        if ($(this).hasClass(historyItem)) {
          self = $(this);
          setTimeout(function () {
            self.addClass(showBlock);
          }, 750);

        }
      }
    });
  };

  function makeAnimations() {
    animations.forEach(function (animation) {
      basicAnimation(animation);
    });
    $(window).scroll(function () {
      animations.forEach(function (animation) {
        basicAnimation(animation);
      });
    });
  };
});
