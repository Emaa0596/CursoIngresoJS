function mostrar()
{
	let numeroIngresado;
	let cantidadDivisores;
	let mensaje;
	
	cantidadDivisores = 0;

	numeroIngresado = parseInt(prompt("ingrese un numero"));

	for(let i = 1; i <= numeroIngresado; i++){
		if(numeroIngresado%i == 0){
			cantidadDivisores = cantidadDivisores + 1;
		}
	}

	if(cantidadDivisores>2){
		mensaje = "No ingresaste un numero primo";
	}
	else{
		mensaje = "Ingresaste un numero primo"
	}

	alert(mensaje);
	

}//FIN DE LA FUNCIÓN