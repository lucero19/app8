// JavaScript Document

//app1
$(document).ready(function(e){
	document.addEventListener ("deviceready",function(){
		$('#disp table td').eq(3).text(device.model);
		$('#disp table td').eq(5).text(device.cordova);
		$('#disp table td').eq(7).text(device.platform);
		$('#disp table td').eq(9).text(device.version);
		$('#disp table td').eq(11).text(device.uuid);
		document.addEventListener("pause",function(){
	escribehistoria ('la app se pausò');
		},false);//pause
		document.addEventListener("resume",function(){
			escribehistoria ('la app se reiniciò');
		},false);//resume
		document.addEventListener("online",function(){
			escribehistoria('la app se conecto a la red');
		},false);//se conecto
		document.addEventListener("offline",function(){
			escribehistoria('la app se desconecto a la red');
		},false);//se desconecto
		

	},false);//ready device
	
	
});//document

function escribehistoria(accion){
	$('#eHistoria').append('<li>'+accion+'</li>');
}

//app5
//tap sonar  
$(document).ready(function(e) {
   document.addEventListener("deviceready",function(){
	    $('#sonar').tap(function(){
			navigator.notification.beep(2);
         });
		 //tap  de vibrar
		 $('#vibrar').tap(function(){
			 navigator.notification.vibrate(2000);//vibra en mili segundos
		 });
   },false);//cierre deviceready
});//cierre del ready
//app7
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