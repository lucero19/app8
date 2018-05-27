// JavaScript Document
 
$(document).ready(function(e) {
   document.addEventListener("deviceready",function(){
	    $('#izquierda').on("swipeleft", function(){
			navigator.notification.alert("deslizó hacia la Izquierda",function(){"aplicacion7","ok"} );
         });
		 $('#derecha').on("swiperight", function() {
			 navigator.notification.confirm("¿Qué quieres hacer?",function(opt){
				 switch(opt)
				 {
					 case 1:
					 navigator.notification.beep(1);
					 break;
					 
					 case 2:
					 navigator.notification.vibrate(3000);
					 break;
				 }
			 },"aplicacion7","Beep,vibrar,cancelar");
		 });
   },false);//cierre deviceready
});//cierre del ready