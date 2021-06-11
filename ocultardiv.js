$(document).ready(function(){
	$("#ocultar").click(function(evento){
       evento.preventDefault();
       $("#ocultar1").hide(5000);
	});

	$("#mostrar").click(function(evento){
       evento.preventDefault();
       $("#ocultar1").show(3000);
	});

	$("#img").fadeOut(5000, function(){
		$("#img").css({'top':300, 'left':200});
		$("#img").fadeIn(5000);
	});

	$("#ocultar1").fadeOut(5000, function(){
		$("#ocultar1").css({'top':300, 'left':200});
		$("#ocultar1").fadeIn(5000);
	});
});