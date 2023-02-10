function mostrar()
{	
	let estacion;
	let destino;
	let mensaje;

	estacion = document.getElementById("txtIdEstacion").value; 
	destino = document.getElementById("txtIdDestino").value;


	switch (estacion){
		case "Invierno": 
			
			switch(destino){
				case "Bariloche": 
						mensaje = "Se viaja";
						break
				case "Mar del plata":
				case "Cataratas": 
				case "Cordoba": 
						mensaje = "No se viaja";
						break
			}
			break

		case "Verano":
			
			switch(destino){
				case "Mar del plata":
				case "Cataratas": 
					mensaje = "Se viaja";
					break
				case "Bariloche": 
				case "Cordoba":	
					mensaje = "No se viaja";
					break
				 
			}
			break

		case "Otoño":
			default: 
					mensaje ="Se viaja";
					break
		case "Primavera":
			switch(destino){
				case "Bariloche": 
					mensaje = "No se viaja";
					break
				default:
					mensaje = "Se viaja";
					break
			}
			break
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN