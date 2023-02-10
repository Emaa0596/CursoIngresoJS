function mostrar()
{
	
	let horaDelDia;
	let mensaje;

	horaDelDia = parseInt(document.getElementById("txtIdHora").value);

	switch(horaDelDia){
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje = "Es de mañana";
			break

			
	}

	alert(mensaje);
	
	



}