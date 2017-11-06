$(document).ready(function() {
	// fix menu when passed
	fixmenu();
	function fixmenu() {
		if ($(document).scrollTop() > 10) {
			$('.fixed.navbar').addClass('lightnav');
		} else {
			$('.fixed.navbar').removeClass('lightnav');
		}
	}
	$(window).scroll(fixmenu);

	// Hide navbar when scroll down
	navbarAnimate(function(direction) {
		if (direction === 'up') {
			$('.fixed.navbar').animate({
				top: '0px'
			});
		} else if (direction === 'down') {
			var height = $('.fixed.navbar').height() + 3;
			$('.fixed.navbar').animate({
				top: '-' + height + 'px'
			});
		}
	});

	function navbarAnimate( fn ) {
		var beforeScrollTop = $(document).scrollTop(),
			direction = 'up';
		$(window).scroll(function () {
			var afterScrollTop = $(document).scrollTop(),
				delta = afterScrollTop - beforeScrollTop;
			if( delta === 0 ) return false;
			beforeScrollTop = afterScrollTop;
			var _d = delta > 0 ? 'down' : 'up';
			if (direction != _d) {
				direction = _d;
				fn(_d);
			}
		});
	}
});