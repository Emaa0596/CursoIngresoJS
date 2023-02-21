/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	let edad;
	let sexo;
	let estadoCivil;
	let sueldoBruto;
	let legajo;
	let nacionalidad;

	edad =parseInt(prompt("Ingrese una edad"));

	while(isNaN(edad) || edad < 18 || edad > 90){
		edad =parseInt(prompt("Error. Ingrese una edad entre 18 y 90 años inclusive"));
	}

	sexo = prompt("Ingrese el sexo, m para masculino o f para femenino");

	while(sexo != "m" && sexo != "M" && sexo != "f" && sexo !="F"){
		sexo = prompt("error. Ingrese m para masculino o f para femenino");
	}

	if(sexo == "m" || sexo == "M"){
		sexo = "Masculino";
	}
	else if(sexo == "f" || sexo == "F"){
		sexo = "Femenino";
	}

	estadoCivil = parseInt(prompt("Ingrese estado civil. 1-para soltero, 2-para casado, 3-para divorciado y 4-para viudo"));

	while(isNaN(estadoCivil) || estadoCivil > 4 || estadoCivil < 1){
		estadoCivil = parseInt(prompt("Error. Ingrese estado civil. 1-para soltero, 2-para casado, 3-para divorciado y 4-para viudo"));
	}

	switch(estadoCivil){
		case 1: estadoCivil = "Soltero";
		break
		case 2: estadoCivil = "Casado";
		break
		case 3: estadoCivil = "Divorciado";
		break
		case 4: estadoCivil = "Viudo";
		break
	}

	sueldoBruto = parseInt(prompt("Ingrese un sueldo bruto (mayor a 8000)"))

	while(isNaN(sueldoBruto) || sueldoBruto < 8000){
		sueldoBruto = parseInt(prompt("Error.Ingrese un sueldo bruto (mayor a 8000)"))
	}

	legajo =parseInt(prompt("Ingrese numero de legajo"));

	while(isNaN(legajo) || legajo < 1000 || legajo > 9999){
		legajo =parseInt(prompt("Error. Ingrese numero de legajo"));
	}

	nacionalidad = prompt("Ingrese nacionalidad. A-Argentino E-Extranjeros o N-nacionalizado.")

	while(nacionalidad != "A" && nacionalidad != "a" && nacionalidad !="e" && nacionalidad != "E" && nacionalidad != "n" && nacionalidad != "N"){
		nacionalidad = prompt("Error. Ingrese nacionalidad. A-Argentino E-Extranjeros o N-nacionalizado.")
	}

	switch(nacionalidad){
		case "A": 
		case "a": nacionalidad = "Argentina";
		break
		case "e":
		case "E": nacionalidad = "Extranjero";
		break
		case "n":
		case "N": nacionalidad = "Nacionalizado"
		break	
	}

	document.getElementById("txtIdEdad").value = edad;
	document.getElementById("txtIdSexo").value = sexo;
	document.getElementById("txtIdEstadoCivil").value = estadoCivil;
	document.getElementById("txtIdSueldo").value = sueldoBruto;
	document.getElementById("txtIdLegajo").value = legajo;
	document.getElementById("txtIdNacionalidad").value = nacionalidad;

}
