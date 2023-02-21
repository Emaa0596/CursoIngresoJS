function mostrar()
{

	let repeticiones =parseInt(prompt("ingrese el número de repeticiones"));

	while(isNaN(repeticiones)){
		repeticiones =parseInt(prompt("error.ingrese el NUMERO de repeticiones"));
	}

	for (i = 0; i != repeticiones; i++){
		document.write("hola UTN FRA " + "<br>");
		
	}


}//FIN DE LA FUNCIÓN