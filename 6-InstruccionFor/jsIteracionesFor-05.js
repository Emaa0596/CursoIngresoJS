function mostrar()
{ //for 5 bis

	let notaIngresada;
	let sexoIngresado;
	let sexoMasBajo;
	let promedioNotas;
	let notaMasBaja;
	let cantidadVarones;
	let desaprobados;
	let banderaNotas;
	let sumaNotas;
	let mensajePromedio;
	let mensajeNMasbaja;
	let mensajeCantVarones;
	let mensajeDesaprobados;

	banderaNotas = true;
	cantidadVarones = 0;
	desaprobados = 0;
	sumaNotas = 0;
	notaMasBaja = 10;

	
	

	for(let i = 1; i <=7; i++){
		notaIngresada = parseInt(prompt("Ingrese la nota"));

		while(isNaN(notaIngresada) || notaIngresada > 10 || notaIngresada < 0){
			notaIngresada = parseInt(prompt("Error. Ingrese la nota entre 0 y 10"));
		}
		
		sexoIngresado = prompt("Ingrese f para femenino, m para masculino o b para binario");
	
		while(sexoIngresado != "m" && sexoIngresado != "f" && sexoIngresado != "b" 
		&& sexoIngresado != "M" && sexoIngresado != "F" && sexoIngresado != "B"){

			sexoIngresado = prompt("Error.Ingrese f para femenino, m para masculino o b para binario")
		}
	
		if(banderaNotas == true){
			notaMasBaja  = notaIngresada;
		}
		banderaNotas = false;

		if(notaMasBaja > notaIngresada){
			notaMasBaja = notaIngresada;
			sexoMasBajo = sexoIngresado;
			
			if(sexoMasBajo == "M" || sexoMasBajo=="m"){
				sexoMasBajo = "Masculino"
			} 
			else if (sexoMasBajo=="F" || sexoMasBajo == "f"){
				sexoMasBajo ="Femenino"
			 }
			else if(sexoMasBajo== "b" || sexoMasBajo== "B"){
				sexoMasBajo = "Binario"
			 }
		}
		if(sexoIngresado == "m" || sexoIngresado == "M"){
			if(notaIngresada >= 6){
				cantidadVarones = cantidadVarones + 1;
			}
		}
		if(notaIngresada < 4){
			desaprobados = desaprobados + 1;
		}
		sumaNotas = sumaNotas + notaIngresada
	}
		
	promedioNotas = sumaNotas / 7;
	parseFloat(promedioNotas);

	mensajePromedio = "el promedio de las 7 notas es de: "+ promedioNotas;
	mensajeDesaprobados = "la cantidad de desaprobados es de: "+ desaprobados;
	mensajeNMasbaja = "La nota mas baja es de: "+ notaMasBaja + " y es de sexo: "+sexoMasBajo;
	mensajeCantVarones = "La cantidad de varones con nota 6 o mas es: "+cantidadVarones;

	console.log(mensajePromedio);
	console.log(mensajeNMasbaja);
	console.log(mensajeCantVarones);
	console.log(mensajeDesaprobados);



} 
 /* let numeroIngresado;

	for(; ;){

		numeroIngresado =parseInt(prompt("Ingrese un numero"));
		
		if (numeroIngresado == 9){
			break
		}
		console.log(numeroIngresado);
	} 
	*/
//FIN DE LA FUNCIÓN