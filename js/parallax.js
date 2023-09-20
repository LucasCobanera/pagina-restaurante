$(document).ready(function () {
	$(window).scroll(function () {
		var windowWidth = $(window).width();

		if (windowWidth > 800) {
			var scroll = $(window).scrollTop();

			$(".presentacion").css({
				transform: "translate(0px, " + scroll / 3 + "%)",
			});

			$(".acerca-de article").css({
				transform: "translate(0px, -" + scroll / 6 + "%)",
			});
		}
	});

	$(window).resize(function () {
		var windowWidth = $(window).width();
		if (windowWidth < 800) {
			$(".acerca-de article").css({
				transform: "translate(0px, 0px)",
			});
		}
	});
});
