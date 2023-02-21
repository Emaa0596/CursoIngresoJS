function mostrar()
{
	let numeroIngresado;
	let cantidadPares;
	let mensaje;

	cantidadPares = 0;
	

	numeroIngresado =parseInt(prompt("ingrese un numero"));

	for(let i = 1; i <= numeroIngresado; i++){
		if(i%2 == 0){
			console.log(i);
			cantidadPares = cantidadPares + 1;
		}
	}
	mensaje = "Ingresaste " + cantidadPares +" numeros pares";
		console.log(mensaje);


}//FIN DE LA FUNCIÓN