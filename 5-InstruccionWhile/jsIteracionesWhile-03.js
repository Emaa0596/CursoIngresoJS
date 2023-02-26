/*
ejercicio comentado abajo
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/ 

/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function mostrar()
{
	let numeroIngresado; 
	let cantPares;
	let cantImpares;
	let numDivisibles;
	let numPrimo;
	let cantPrimos;
	let divisorNumIngresado;

	cantPares = 0;
	cantPrimos = 0;
	cantImpares = 0;
	numDivisibles = 0;
	divisorNumIngresado = 0;

	numeroIngresado =parseInt(prompt("Ingrese un numero positivo"));

	while(isNaN(numeroIngresado)){
		numeroIngresado =parseInt(prompt("Error. Ingrese un numero positivo"));
	}

	for(i = numeroIngresado; i == 1; i--){
		
		if(i%2 == 0){
			cantPares = cantPares + 1;
		}
		else{
			cantImpares = cantImpares +1;
		}

			for(e = 1; e == 100; e++){
				if(numeroIngresado%e == 0){
					numDivisibles = numDivisibles + 1;
				}
			}
		if(numDivisibles > 2){
			numPrimo = "Ingresaste un numero primo";
		}
		else{
			numPrimo = "No ingresaste un numero primo";
		}
			for(a = numeroIngresado; a==0; a--){
				if(a%2 == 0){
					divisorNumIngresado = divisorNumIngresado + 1;
				}
			}

	}                                                      
}//FIN DE LA FUNCIÓN

/* 
let claveIngresada;
	let mensaje;

	claveIngresada = prompt("ingrese el número clave");
	

	while(claveIngresada != "utn750"){
		claveIngresada = prompt("Clave incorrecta,intente de nuevo");
		
	}
	
	mensaje = "clave correcta";
	alert(mensaje);
*/