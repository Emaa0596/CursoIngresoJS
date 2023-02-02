/* Emanuel Diaz
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{	
	let dividendoSP;
	let divisorSP;
	let dividendoEntero
	let divisorEntero
	let resto;

	dividendoSP = document.getElementById("txtIdNumeroDividendo").value;
	divisorSP = document.getElementById ("txtIdNumeroDivisor").value;

	dividendoEntero = parseInt(dividendoSP);
	divisorEntero = parseInt (divisorSP);

	resto= dividendoEntero % divisorEntero; 



	alert("El resto es: "+ resto); 
}
