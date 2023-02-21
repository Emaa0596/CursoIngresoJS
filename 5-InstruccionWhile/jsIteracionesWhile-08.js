/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numeroIngresado;
	let sumaPositivos;
	let multiNegativos;
	let respuesta;
	

	respuesta = "si";
	sumaPositivos = 0;
	multiNegativos = 1;

	while(respuesta == "si" || respuesta == "Si" || respuesta == "SI"){
		numeroIngresado = parseInt(prompt("Ingrese un numero"));

		while(isNaN(numeroIngresado)){
		numeroIngresado = parseInt(prompt("error. Ingrese un numero"));
		}
		
		if(numeroIngresado >= 0){
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else if(numeroIngresado < 0){
			multiNegativos = multiNegativos * numeroIngresado;
		}
		respuesta = prompt("Escriba si para ingresar un numero, o no para finalizar")

	}
	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiNegativos;

}//FIN DE LA FUNCIÓN