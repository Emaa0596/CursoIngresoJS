function mostrar()
{
	let ciudad;
	let puntoCardinal;
	let mensaje; 

	ciudad = document.getElementById("txtIdDestino").value;

	switch(ciudad){
		case "Bariloche":  
		case "Ushuaia":
				mensaje = "Aqui hace frio";
				break
		case "Cataratas":
				mensaje = "Aqui hace calor";
				break
		case "Mar del plata":
				mensaje = "Aca hace calor";
				break 
	}
		alert(mensaje);

}