
/*
	if(condicion)//verdadero o falso (0) true -> verdadero false -> falso
	{
		codigo...;
	}else
	{
		codigo...;		
	}

	operadores aritmeticos:
	+ - * / %
	operadores relacionales o condicionales
	< > <= >= == !=
	operadores logicos
    condicionUno	&&  condicionDos            ||               !
	y logica                                o logica         negacion
	*/

//Ejercicio 1 bis 
function mostrar()
{
	let tiempo;
	let distancia;
	let velocidad;
	let mensaje

	tiempo = prompt("Cuantas horas tardaste en llegar?");
	distancia = parseInt(document.getElementById("txtIdEdad").value);

	velocidad = distancia / tiempo;

	if (velocidad < 60){
		mensaje = "Muy lento";

	}
	else if (velocidad <= 80){
		mensaje = "lento";
		
	}
	if (velocidad <= 100 && velocidad > 80){
		mensaje = "Buen ritmo";
	}
	else if (velocidad > 100 && velocidad <=120){
		mensaje = "Ahi de la ley";
	}
	if (velocidad > 120){
		mensaje = "Eso no se hace";
	}
	alert(mensaje);


}
/* ejercicio if 1 
	let edad;

	edad = parseInt (document.getElementById("txtIdEdad").value);
	
	if(edad == 15){
		alert("Niña bonita"); 

	}
	else 
	alert ("No ingresaste 15");
	*/
	