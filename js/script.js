$(document).ready(function(){
	makeAnimations();

	$( window ).resize(function(){
		makeAnimations();
	});

	function makeAnimations (){
		var titlePosition = $('.sectionCompany-title').offset().top;

		$( window ).scroll(function() {
			$('.js-hidden').each(function(){
				var elementPosition = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				
				if (elementPosition < topOfWindow+800) {
					$(this).addClass("js-show-hidden");
					$(this).removeClass("js-hidden");
				}
			});
			$('.js-hidden-line').each(function(){
				var elementPosition = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();

				if (elementPosition < topOfWindow+800) {
					$(this).addClass("js-show-hidden-line");
				}
			});
			$('.upperLine').each(function(){
				var elementPosition = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();

				if (elementPosition < topOfWindow+800) {
					var self = $(this);
					$(this).addClass("js-upperLine");
						
					if(self.hasClass('js-first-circles')){	
						setTimeout(function(){
							self.next().next().addClass("js-show-circle");
							setTimeout(function(){
								self.next().next().addClass("js-after");
							}, 450);
							setTimeout(function(){
								self.next().addClass("js-show-circle");
								setTimeout(function(){
									self.next().addClass("js-after");
								}, 600);
							}, 600);
						}, 450);
					} else{
						setTimeout(function(){
							self.next().addClass("js-show-circle");
							setTimeout(function(){
								self.next().addClass("js-after");
							}, 450);
							setTimeout(function(){
								self.next().next().addClass("js-show-circle");
								setTimeout(function(){
									self.next().next().addClass("js-after");
									setTimeout(function(){
										$('.sectionCompany-clients').addClass('js-after');
									}, 1400);
								}, 600);
							}, 600);
						}, 450);
					}

				}
			});
		});	
	};
});
