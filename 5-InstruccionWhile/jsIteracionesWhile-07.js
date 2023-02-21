/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numeroIngresado;
	let promedio;
	let contador;
	let acumulador;
	let respuesta;

	contador = 0;
	acumulador = 0;
	respuesta = "si";
	

	while(respuesta == "si" || respuesta == "Si" || respuesta == "SI"){
		numeroIngresado = parseInt(prompt("Ingrese un numero"));

		while(isNaN(numeroIngresado)){
		numeroIngresado = parseInt(prompt("error. Ingrese un numero"));
	}
	
	contador = contador + 1;
	acumulador = acumulador + numeroIngresado;
	promedio = acumulador/contador;

	respuesta = prompt("Escriba si para ingresar un numero, o no para finalizar")

	}
	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio
	

	




	

}//FIN DE LA FUNCIÓN