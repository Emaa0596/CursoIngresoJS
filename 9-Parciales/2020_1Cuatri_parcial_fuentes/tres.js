/* En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m")
 y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , 
tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/

function mostrar() {
	let nombrePasajero;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let respuesta;
	let personaMasTemperatura;
	let mayorTemperatura;
	let cantidadViudosMayores;
	let cantidadSolterosYViudos;
	let cantidadSolteros;
	let edadSolteros;
	let mayorDe60ConFiebre;
	let promedioSolteros;
	let banderaMasTemperatura;

	banderaMasTemperatura = true;
	cantidadViudosMayores = 0;
	cantidadSolterosYViudos = 0;
	respuesta = "si";
	edadSolteros = 0;
	cantidadSolteros = 0;
	mayorDe60ConFiebre = 0;

	while (respuesta == "si" || respuesta == "Si" || respuesta == "SI") {
		nombrePasajero = prompt("Ingrese el nombre del pasajero");
		while (!isNaN(nombrePasajero)) {
			nombrePasajero = prompt("Error, ingrese el nombre sin numeros.");
		}
		edad = parseInt(prompt("Ingrese la edad"));
		while (isNaN(edad) || edad < 1 || edad > 120) {
			edad = parseInt(prompt("Error. Ingrese la edad (menor a 120)"));
		}
		sexo = prompt("Ingrese el sexo: 'f' para femenino o 'm' para masculino");
		while (sexo != "F" && sexo != "f" && sexo != "M" && sexo != "m") {
			sexo = prompt("Error.Ingrese el sexo: 'f' para femenino o 'm' para masculino");
		}
		estadoCivil = prompt("Ingrese el estado civil: 's' para soltero, 'c' para casado o 'v' para viudo");
		while (estadoCivil != "s" && estadoCivil != "S" && estadoCivil != "c" && estadoCivil != "C" &&
			estadoCivil != "v" && estadoCivil != "V") {
			estadoCivil = prompt("Error. Ingrese el estado civil: 's' para soltero, 'c' para casado o 'v' para viudo");
		}
		temperatura = parseFloat(prompt("Ingrese la temperatura"));
		while (temperatura > 42 || temperatura < 32) {
			temperatura = parseFloat(prompt("Error.Ingrese la temperatura"));
		}

		if (banderaMasTemperatura == true || mayorTemperatura < temperatura){
			personaMasTemperatura = nombrePasajero;
			mayorTemperatura = temperatura;
			banderaMasTemperatura = false;
		}
		if (edad > 59 && temperatura >= 38) {
			mayorDe60ConFiebre = mayorDe60ConFiebre + 1;
		}
		switch (estadoCivil) {
			case "s":
			case "S":
				if (sexo == "m" || sexo == "M") {
					edadSolteros = edadSolteros + edad;
					cantidadSolterosYViudos = cantidadSolterosYViudos + 1;
					cantidadSolteros = cantidadSolteros + 1;
				}
				break
			case "v":
			case "V":
				if (edad > 18) {
					cantidadViudosMayores = cantidadViudosMayores + 1;
				}
				if (sexo == "m" || sexo == "M") {
					cantidadSolterosYViudos = cantidadSolterosYViudos + 1;
				}
				break
		}
		respuesta = prompt("Desea ingresar mas datos? 'si' o 'no'?");
	}

	promedioSolteros = edadSolteros / cantidadSolteros;

	document.write("La persona con mas temperatura es: " + personaMasTemperatura + "<br>");
	document.write("La cantidad de mayores de edad que son viudos es: " + cantidadViudosMayores + "<br>");
	document.write("La cantidad de hombres solteros o viudos es: " + cantidadSolterosYViudos + "<br>");
	document.write("La cantidad personas mayores a 60 con mas de 38°C es: " + mayorDe60ConFiebre + "<br>");
	document.write("El promedio de edad de los solteros es: " + promedioSolteros);
}
