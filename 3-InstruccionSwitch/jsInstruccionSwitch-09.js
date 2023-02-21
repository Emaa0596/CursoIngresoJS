function mostrar()
{
	let estacion;
	let destino;
	let mensaje; 
	let tarifa;
	let precioFinal;
	let porcentaje;
	let descuento;

	estacion = document.getElementById("txtIdEstacion").value; 
	destino = document.getElementById("txtIdDestino").value;

	tarifa = 15000;

	switch (estacion){
		case "Invierno": 
			
			switch(destino){
				case "Bariloche": 
						porcentaje = 20;
						break
				case "Mar del plata":
						porcentaje = -20;
						break
				case "Cataratas": 
				case "Cordoba": 
						porcentaje = -10;
						break
			}
			break

		case "Verano":
			
			switch(destino){
				case "Bariloche": 
						porcentaje = -20;
						break
				case "Mar del plata":
						porcentaje = 20;
						break
				case "Cataratas": 
				case "Cordoba": 
						porcentaje = 10;
						break
			}
			break

		case "Otoño":	
		case "Primavera":
			switch(destino){
				case "Bariloche": 
				case "Cataratas": 
				case "Mar del plata":
						porcentaje = 10;
						break
				case "Cordoba": 
						porcentaje = 0;
						break
			}
			break
	}

	descuento = tarifa * ((porcentaje)/100);
	precioFinal = tarifa + descuento; 

	mensaje = "el precio final es: $" + precioFinal;
	alert(mensaje);
}
/*en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento*/