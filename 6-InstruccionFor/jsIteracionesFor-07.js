function mostrar()
{
	let numeroIngresado;
	let cantidadDivisores;
	let mensaje;
	
	cantidadDivisores = 0;

	numeroIngresado =parseInt(prompt("ingrese un numero"));

	for(let i = 1; i <= numeroIngresado; i++){
		if(numeroIngresado%i == 0){
			console.log(i);
			cantidadDivisores = cantidadDivisores + 1;
		}
	}
	mensaje = "El numero que ingresaste tiene " + cantidadDivisores + " divisores";
		console.log(mensaje);
	


}//FIN DE LA FUNCIÓN