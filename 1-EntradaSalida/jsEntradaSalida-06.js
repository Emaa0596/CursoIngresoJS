/* Emanuel Diaz
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numUnoTexto;
	let numDosTexto;
	let numUno;
	let numDos;
	let mensaje;



	// SIN VALUE NO ANDA
	numUnoTexto = document.getElementById("txtIdNumeroUno").value;
	numDosTexto = document.getElementById("txtIdNumeroDos").value;
	
	numUno = parseInt (numUnoTexto);
	numDos = parseInt (numDosTexto);

	mensaje = "La suma es " + (numUno + numDos);


	alert(mensaje);
}

