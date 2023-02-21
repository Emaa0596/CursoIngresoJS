/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let respuesta;
	let numeroIngresado;
	let sumaNegativos;
	let sumaPositivos;
	let contadorPositivos;
	let contadorNegativos;
	let contadorCeros;
	let contadorPares;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;
	let mensaje;

	respuesta = "si";
	contadorPositivos = 0;
	contadorNegativos = 0;
	contadorCeros = 0;
	contadorPares = 0;
	sumaPositivos = 0;
	sumaNegativos = 0;

	while(respuesta == "si" || respuesta == "Si" || respuesta == "SI"){
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		
		while(isNaN(numeroIngresado)){
			numeroIngresado = parseInt(prompt("Error. ingrese un numero"));
			}
		
		if(numeroIngresado > 0){
			sumaPositivos = sumaPositivos + numeroIngresado;
			contadorPositivos = contadorPositivos + 1;
		}
		else if(numeroIngresado < 0){
			sumaNegativos = sumaNegativos + numeroIngresado;
			contadorNegativos = contadorNegativos + 1;	
		}
		else if(numeroIngresado == 0){
			contadorCeros = contadorCeros + 1;
		}
		if(numeroIngresado%2 == 0){
			contadorPares = contadorPares + 1;
		}

		respuesta = prompt("Desea ingresar otro numero? Si o No?");
	}

	promedioNegativos = sumaNegativos/contadorNegativos;
	promedioPositivos = sumaPositivos/contadorPositivos;
	diferencia = sumaPositivos - sumaNegativos;

	mensaje = "la suma de los positivos es: "+ sumaPositivos+" con un total de "+contadorPositivos+ " numeros positivos ingtesados."+ "<br>";
	mensaje +="La suma de los negativos es: "+sumaNegativos+" con un total de "+contadorNegativos+" numeros negativos ingresados."+"<br>";
	mensaje +="La cantidad de 0 ingresados es: "+ contadorCeros +"<br>"
	mensaje +="La cantidad de numeros pares ingresados es: "+contadorPares+"<br>"
	mensaje +="El promedio de numeros positivos es: "+promedioPositivos + "<br>"
	mensaje +="El promedio de los numeros negativos es: "+promedioNegativos + "<br>"
	mensaje +="La diferencia entre positivos y negativos es "+ diferencia;

	document.write(mensaje);
}//FIN DE LA FUNCIÓN