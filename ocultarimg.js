$(document).ready(function(){
	$("ocultar").click(function(evento){
		evento.preventDefault();
		$("ima").hide(4000);
});
	$("mostrar").click(function(evento){
		evento.preventDefault();
		$("ima").show(4000);
	});
		$("#img").fadeOut(5000, function(){
		$("#img").css({'top':300, 'left':200});
		$("#img").fadeIn(5000);
	});

	$("#CONSTRUCCION").fadeOut(5000, function(){
		$("#CONSTRUCCION").css({'top':300, 'left':200});
		$("#CONSTRUCCION").fadeIn(5000);
	});
});