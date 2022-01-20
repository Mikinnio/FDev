var $root = $('html, body');

$(document).ready(function() {
	$('a[href^="#"]').click(function () {
		$root.animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 500);
	
		return false;
	});
});

$(document).scroll(function() {
	$('.inside-square').each(function() {
		var y = $(document).scrollTop();
		var t = $(this).parent().offset().top;
		var width = $(window).width();
		var documentHeight = $(document).height();
		var windowHeight = $(window).height();
		var bar = document.getElementById("myBar");

		bar.style.width = y/(documentHeight-windowHeight)*100 +"%";

		if (width >= 1170)
		{
			if (y + 600 > t) {
				$(this).fadeIn();
			} else {
				$(this).fadeOut();
			}
		} else {
			$(this).fadeIn();
		}
	})

	$('.small-square-display').each(function() {
		var y = $(document).scrollTop();
		var t = $(this).parent().offset().top;

		if (y + 600 > t) {

			$(this).animate(
				{deg: 180},
				{
					duration: 1200,
					step: function(now) {
						$(this).css({transform: 'rotate(' + now + 'deg)'});
					}
				}
			)
		}
	})
})

