function mostrar()
{
	let numeroIngresado;
	let promedio;
	let contador;
	let acumulador;
	contador = 0;
	acumulador = 0;
	

	for(i=0; i<5; i++) {

		numeroIngresado = parseInt(prompt("Ingrese un numero"));

		while(isNaN(numeroIngresado)){
			numeroIngresado = parseInt(prompt("error. Ingrese un numero"));
		}
		
		contador = contador + 1;
		acumulador = acumulador + numeroIngresado;
	}

	promedio = acumulador/contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN