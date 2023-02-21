/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
// while 2 bis bis
function mostrar()
{
	let numeroIngresado;
	let cantidadDeNumeros;
	let promedio;
	let respuesta;
	let mensaje;

	cantidadDeNumeros = 0;
	promedio = 0;
	respuesta = "si"
	
	

	while(respuesta == "si" || respuesta == "Si" || respuesta == "SI"){
		numeroIngresado = parseInt(prompt("Ingrese un numero"));

	while(isNaN(numeroIngresado)){
		numeroIngresado = parseInt(prompt("Error. ingrese un numero"));
		}

		if(numeroIngresado > 9 && numeroIngresado < 21){
			cantidadDeNumeros = cantidadDeNumeros + 1;
			promedio = promedio + numeroIngresado
		}
		respuesta = prompt("Desea ingresar otro numero? Si o No?")
	}	
		
		promedio = promedio/cantidadDeNumeros;

		mensaje = "Ingresaste "+cantidadDeNumeros+" numeros entre 10 y 20 inclusive, con un promedio de "+ promedio
		alert(mensaje);

}

	




/*{
	let contador;

	contador = 10;

	while(contador > 0){
		console.log(contador)
		contador = contador -1;
	}

}*/ //FIN DE LA FUNCIÓN