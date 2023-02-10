function mostrar()
{
	let ciudad;
	let puntoCardinal;
	let mensaje; 

	ciudad = document.getElementById("txtIdDestino").value;

	switch(ciudad){
		case "Bariloche":  
		case "Ushuaia":
				mensaje = "Usted esta en el sur";
				break
		case "Cataratas":
				mensaje = "Usted esta en el norte";
				break
		case "Mar del plata":
				mensaje = "Usted esta en el este";
				break 
	}
		alert(mensaje);
}