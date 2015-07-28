// var wow = new WOW(
//     {
//       boxClass:     'wow',      // default
//       animateClass: 'animated', // default
//       offset:       100,          // default
//       mobile:       true,       // default
//       live:         true        // default
//     }
//   )
// wow.init();

$(document).ready(function(){
	makeAnimations();

	$( window ).resize(function(){
		makeAnimations();
	});

	function makeAnimations (){
		var titlePosition = $('.sectionCompany-title').offset().top;

		$( window ).scroll(function() {
			$('.js-slide-left').each(function(){
				var elementPosition = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();

				if (elementPosition < topOfWindow+400) {
					$(this).addClass("slideLeft");
				}
			});
		});	
	};
	

	// prototype script

	// $(window).scroll(function() {
	// 	$('#animatedElement').each(function(){
	// 	var imagePos = $(this).offset().top;

	// 	var topOfWindow = $(window).scrollTop();
	// 		if (imagePos < topOfWindow+400) {
	// 			$(this).addClass("slideUp");
	// 		}
	// 	});
	// });
});
