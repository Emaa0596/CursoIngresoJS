/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	let mensaje;

	sexoIngresado = prompt("Ingrese f para femenino y m para masculino")

	while (sexoIngresado != "f" && sexoIngresado != "m" && sexoIngresado !="M" && sexoIngresado !="F"){
		sexoIngresado = prompt("dato incorrecto. Ingrese f para femenino y m para masculino")
	}

	if(sexoIngresado == "f" || sexoIngresado == "F"){
		mensaje = "Ingresaste el sexo femenino";
	}
	else if (sexoIngresado == "m" || sexoIngresado == "M"){
		mensaje = "Ingresaste el sexo masculino";
	}

	document.getElementById("txtIdSexo").value = mensaje;
}//FIN DE LA FUNCIÓN