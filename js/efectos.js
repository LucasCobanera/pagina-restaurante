$(document).ready(function () {
	console.log("hola");
	//Efecto del menu nav
	$(".menu-nav a").each(function (index, elemento) {
		$(this).css({
			top: "-200px",
		});
		$(this).animate(
			{
				top: "0px",
			},
			1500 + index * 500
		);
	});
	//Efecto del header
	if ($(window).width() > 800) {
		$(".presentacion").css({
			opacity: "0",
			marginTop: "0",
		});
		$(".presentacion").animate(
			{
				opacity: "1",
				marginTop: "-52px",
			},
			1500
		);
	}

	//Efectos de scroll
	var acercaDe = $("#acerca-de").offset().top,
		menu = $("#platos").offset().top,
		galeria = $("#galeria").offset().top,
		ubicacion = $("#ubicacion").offset().top;

	$("#btn-acerca-de").on("click", function (e) {
		e.preventDefault();
		$("html, body").animate(
			{
				scrollTop: acercaDe - 100,
			},
			500
		);
	});
	$("#btn-menu").on("click", function (e) {
		e.preventDefault();
		$("html, body").animate(
			{
				scrollTop: menu + 550,
			},
			500
		);
	});
	$("#btn-galeria").on("click", function (e) {
		e.preventDefault();
		$("html, body").animate(
			{
				scrollTop: galeria,
			},
			500
		);
	});
	$("#btn-ubicacion").on("click", function (e) {
		e.preventDefault();
		$("html, body").animate(
			{
				scrollTop: ubicacion,
			},
			500
		);
	});
});
