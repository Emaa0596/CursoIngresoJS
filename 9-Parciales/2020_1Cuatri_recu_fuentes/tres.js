/*
Recu 2020 3 bis: /*Vacaciones en Familia" 
Nos ingresan una cantidad indeterminada de estadías de vacaciones, 
validando los datos ingresados:
nombre del pasajero titular, 
destino( “Brasil”, “Caribe” o “Europa”), 
temporada(“alta”,”baja”,“media”),
cantidad de pasajeros que viajan.
Informar:
a)El destino más elegido.
b)El nombre del pasajero titular que lleva menos pasajeros.
c)El promedio de personas, que viajan en temporada alta.
d)El total de personas que viajaron a Europa.
*/

function mostrar()
{
	let nombre;
	let cantidadPasajeros;
	let destino;
	let temporada;
	let destinoMasElegido
	let nombrePasajeroMenosFamilia;
	let promedioTempoAlta;
	let menosCantidadPasajeros = 0;
	let banderaMenosFamilia = true;
	let contadorBrasil = 0;
	let contadorEuropa =0;
	let contadorCaribe =0;
	let acumuladorTemporadaAlta = 0;
	let contadorTemporadaAlta = 0;
	let respuesta = "si";

	while (respuesta == "si" || respuesta == "Si" || respuesta == "SI"){
		nombre = prompt("Ingrese el nombre del pasajero");
		while (!(isNaN(nombre))){
		  nombre = prompt("Error.Ingrese el nombre del pasajero");
		}
		cantidadPasajeros = parseInt(prompt("Ingrese la cantidad de pasajeros"));
		while(isNaN(cantidadPasajeros) || cantidadPasajeros < 0 || cantidadPasajeros > 2000){
			cantidadPasajeros = parseInt(prompt("Error.Ingrese la cantidad de pasajeros"));
		} 
		destino = prompt("Ingrese el destino: 'brasil', 'caribe' o 'europa'");
		while(destino != "brasil" && destino != "europa" && destino != "caribe"){
			destino = prompt("Error. Ingrese el destino: 'brasil', 'caribe' o 'europa'");
		}
		temporada = prompt("Ingrese la temporada: 'alta', 'baja', o 'media'");
		while(temporada != "baja" && temporada != "media" && temporada !="alta"){
			temporada = prompt("Error.Ingrese la temporada: 'alta', 'baja', o 'media'");
		}

		if(destino == "brasil"){
			contadorBrasil = contadorBrasil + cantidadPasajeros;
		}
		else if (destino == "caribe"){
			contadorCaribe = contadorCaribe + cantidadPasajeros;
		}
		else{
			contadorEuropa = contadorEuropa + cantidadPasajeros;
		}
		if(banderaMenosFamilia == true || cantidadPasajeros < menosCantidadPasajeros){
			menosCantidadPasajeros = cantidadPasajeros;
			nombrePasajeroMenosFamilia = nombre;
			banderaMenosFamilia = false;
		}
		if(temporada == "alta"){
			contadorTemporadaAlta = contadorTemporadaAlta + 1;
			acumuladorTemporadaAlta = acumuladorTemporadaAlta + cantidadPasajeros;
		}
		
	respuesta = prompt("Desea seguir ingresando productos? 'si' o 'no'?");
	}//fin del while 
	
	if(contadorBrasil > contadorCaribe && contadorBrasil > contadorEuropa){
		destinoMasElegido = "Brasil";
	}
	else if(contadorCaribe > contadorBrasil && contadorCaribe > contadorEuropa){
		destinoMasElegido ="Caribe";
	}
	else {
		destinoMasElegido = "Europa";
	}
	promedioTempoAlta = acumuladorTemporadaAlta/contadorTemporadaAlta;

	console.log("el destino mas elegido fue: " + destinoMasElegido);
	console.log("El pasajero con menos pasajeros a cargo fue: "+nombrePasajeroMenosFamilia);
	console.log ("El promedio de personas que viajaron en temporada alta es: "+promedioTempoAlta);
	console.log("El total de pasajeros a Europa es: "+ contadorEuropa);

}
