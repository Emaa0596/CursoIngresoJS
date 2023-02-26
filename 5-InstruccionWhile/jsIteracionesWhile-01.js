
/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/

//while (mientras) es un bucle, genera linea de codigo muchas veces, hasta que un condicional lo cambie
//while ! =mientras que esto NO sea asi, entra a la funcion 
//do while genera automaticamente la primera vez
//for: cantidad finita de veces 
// isNan = si no se ingreso un numero, da true (verdadero)
// if variable i%2=0 (el resto de i/2 es= 0?) (divide por dos y se queda con el resto) = 0, se le suma uno porque es impar
// i%2=0 se usa siempre para saber si es par o impar 

//for se usa cuando se sabe cuantas veces repetimos. 
//se declara la variable, la condicion y la suma de la variable i dentro del for
//la bandera o flag es para cuando necesito saber el primer ingreso. de true pasa a false
//"<br>" hace linea a linea el document.write
function mostrar(){

	let nombre;
	let edad; 
	let edadMayor;
	let edadMenor;
	let respuesta;
	let bandera;
	let nombreMayor;
	let nombreMenor;
	let mensaje;

	bandera = true;

	respuesta = "si";

	
	while(respuesta == "si"){
		nombre = prompt("Ingrese un nombre");
		edad = parseInt(prompt("Ingrese una edad"));
			while(isNaN(edad) || edad < 0 || edad > 123){
			edad = parseInt(prompt("error.Ingrese una edad en numeros"));
		}
		if(bandera == true ){
			edadMayor = edad;
			edadMenor = edad;
			nombreMayor = nombre;
			nombreMenor = nombre;
			bandera = false;
		}
		else if(edadMayor < edad){
			nombreMayor = nombre;
			edadMayor = edad;
		}
		else if(edadMenor > edad){
			nombreMenor = nombre;
			edadMenor = edad;

		}
		respuesta = prompt("Desea ingresar otros datos? si o no");
		
	}
	mensaje = "La persona menor es "+ nombreMenor;
	mensaje +=" y la persona mayor es "+nombreMayor;
	document.write(mensaje);
}





/*{
	let contador;

	contador = 1;

	while(contador < 11){
		console.log(contador)
		contador = contador +1;
	}
}	*/


	
//FIN DE LA FUNCIÓN