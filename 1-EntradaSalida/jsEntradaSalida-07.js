/* Emanuel Diaz
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	//declarar variables SIEMPRE dentro de la funcion
	//despus parseo, con parseInt las paso a numero
	//despues hago las cuentas y operaciones
	let numUno;
	let numDos;
	let resultado;

	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;

	numUno= parseInt(numUno);
	numDos= parseInt (numDos);

	resultado= numUno + numDos;



	alert("La suma da como resultado " + resultado);	
}

function restar()
{
	let numUno;
	let numDos;
	let resultado;

	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;

	numUno= parseInt(numUno);
	numDos= parseInt (numDos);

	resultado= numUno - numDos;



	alert("La resta da como resultado " + resultado);	
	
}

function multiplicar()
{ 
	let numUno;
	let numDos;
	let resultado;

	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;

	numUno= parseInt(numUno);
	numDos= parseInt (numDos);

	resultado= numUno * numDos;



	alert("La multiplicacion da como resultado " + resultado);	
	
}

function dividir()
{
	let numUno;
	let numDos;
	let resultado;

	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;

	numUno= parseInt(numUno);
	numDos= parseInt (numDos);

	resultado= numUno / numDos;



	alert("La division da como resultado " + resultado);	
}

