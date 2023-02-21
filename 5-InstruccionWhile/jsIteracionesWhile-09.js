/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let menorPar;
	let mayorNegativo;
	let respuesta;
	let mensaje;
	let banderaNegativo;
	let banderaPares;
	//iniciar variables 

	banderaDelPrimero = true;
	banderaNegativo = true;
	banderaPares = true;
	respuesta='si';

	while(respuesta == "si" || respuesta == "Si" || respuesta == "SI"){
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		
		while(isNaN(numeroIngresado)){
			numeroIngresado = parseInt(prompt("Error. ingrese un numero"));
			}
		if(banderaDelPrimero == true){
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = false;
		}
		if(numeroIngresado > numeroMaximo){
			numeroMaximo = numeroIngresado
		}
		if(numeroIngresado < numeroMinimo){
			numeroMinimo = numeroIngresado;
		}
		if(numeroIngresado%2==0 && banderaPares == true){
			menorPar = numeroIngresado;
			banderaPares = false;
		}
		if(numeroIngresado%2 == 0){
			if(numeroIngresado < menorPar){
				menorPar = numeroIngresado;
			}
		}
		if(numeroIngresado < 0 && banderaNegativo == true){
			mayorNegativo = numeroIngresado;
			banderaNegativo = false;
		}
		if(numeroIngresado < 0 && mayorNegativo < numeroIngresado){
			mayorNegativo = numeroIngresado;
		}
		respuesta = prompt("Desea ingresar otro numero? Si o No?")
	}//llave del while 

	mensaje= "el numero par menor es: " + menorPar + " y el mayor negativo es: "+mayorNegativo;
	alert(mensaje);
	document.getElementById("txtIdMaximo").value= numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}//FIN DE LA FUNCIÓN