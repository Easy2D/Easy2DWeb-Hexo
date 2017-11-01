$(document).ready(function() {
	// fix menu when passed
	fixmenu();
	function fixmenu() {
		if ($(document).scrollTop() > 10) {
			$('.fixed.navbar.menu').addClass('lightnav');
		} else {
			$('.fixed.navbar.menu').removeClass('lightnav');
		}
	}
	$(window).scroll(fixmenu);
});