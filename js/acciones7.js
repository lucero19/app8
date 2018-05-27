// JavaScript Document
 //tap sonar  
$(document).ready(function(e) {
   document.addEventListener("deviceready",function(){//Escuchador de Eventos
	    $('#izquierda').on("swipeleft", function(){//deslizar a la izquierda
			navigator.notification.alert("desliz+o hacia la Izquierda",function(){"aplicacion7","Ok"} );
         });
		 //tap  de vibrar
		 $('#derecha').on("swiperight", function(){
			 navigator.notification.confirm("¿Que quires hacer?",function(op){           switch(op)
		 {
			 case 1: 
			 navigator.notificacion.beep(1);//suene el dispositivo
			 break;
			 
			 case 2:
			 navigator.notification.vibrate(3000);//vibrar el dispositivo
		     break
		 }
			 },"aplicacion7","Beepear,Vibrar,Cancelar");//vibra en mili segundos
		 });
   },false);//cierre deviceready
});//cierre del ready