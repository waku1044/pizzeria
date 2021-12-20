$(function(){
	$('.btn-menu').click(function(){
		$('.submenu').slideToggle(500);
	});
	$('#pizzas').click(function(){
		$('.pizza1, .pizza2, .pizza3').slideToggle(500);
	});
	$('#empanadas').click(function(){
		$('.empa1, .empa2, .empa3').slideToggle(500);
	});
	$('#bebidas').click(function(){
		$('.bebida1,.bebida2,.bebida3').slideToggle(500);
	});
	$('#postres').click(function(){
		$('.postre1, .postre2, .postre3').slideToggle(500);
	});
});