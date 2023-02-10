function mostrar()
{
	let mesDelAño;
	let mensaje; 

	mesDelAño = document.getElementById("txtIdMes").value;

	switch(mesDelAño){
		case "Enero":      
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre": 
			mensaje = "Este mes tiene 31 dias";
			break
		case "Febrero":
			mensaje = "Este mes tiene 28 dias";
			break
		default: 
			mensaje = "Este mes tiene 30 dias";
	}


	alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN