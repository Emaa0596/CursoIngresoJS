/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;

	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	parseInt(numeroIngresado);
	
	while(isNaN(numeroIngresado) || numeroIngresado > 9 || numeroIngresado < 0){
		numeroIngresado = prompt("incorrecto. ingrese un numero entre 0 y 9");
		parseInt(numeroIngresado);
	}

	document.getElementById("txtIdNumero").value = numeroIngresado

}//FIN DE LA FUNCIÓN