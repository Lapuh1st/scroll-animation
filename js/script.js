$(document).ready(function(){
	if(($( window ).width()) > 1024) {
		makeAnimations();
	}

	var viewport = 800;
	if(($( window ).width()) < 1367){
		viewport = 400;
		var mobile = true;
	}

	function makeAnimations (){

		$( window ).scroll(function() {
			$('.js-hidden').each(function(){
				var elementPosition = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				
				if (elementPosition < topOfWindow + viewport) {
					$(this).addClass("js-show-hidden");
					$(this).removeClass("js-hidden");
				}
			});
			$('.js-hidden-line').each(function(){
				var elementPosition = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				var self = $(this);
				if (elementPosition < topOfWindow + viewport) {
					if($(this).hasClass('sectionHistory-line')){
						$('.sectionCompany').addClass('js-after');
						setTimeout(function(){
							self.addClass("js-show-hidden-line");
						}, 500);
					} else{
						$(this).addClass("js-show-hidden-line");
					}
				}
			});
			$('.upperLine').each(function(){
				var elementPosition = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();

				if (elementPosition < topOfWindow + viewport) {
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
