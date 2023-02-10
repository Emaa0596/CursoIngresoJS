function mostrar()
{
	let mesDelAño;
	let mensaje; 

	mesDelAño = document.getElementById("txtIdMes").value;

	switch(mesDelAño){
		case "Enero": 
				mensaje = "Ya pasamos el frio, ahora calor!!!."
				break
		case "Febrero": 
				mensaje = "Ya pasamos el frio, ahora calor!!!."
				break
		case "Marzo": 
				mensaje = "Ya pasamos el frio, ahora calor!!!."
				break
		case "Abril": 
				mensaje = "Falta para el invierno."
				break
		case "Mayo": 
				mensaje = "Falta para el invierno."
				break
		case "Junio": 
				mensaje = "Falta para el invierno."
				break
		case "Julio": 
				mensaje = "Abrigate que hace frio."
				break
		case "Agosto": 
				mensaje = "Abrigate que hace frio."
				break
		default: 
				mensaje = "Ya pasamos el frio, ahora calor!!!."

	}

	alert(mensaje);


}