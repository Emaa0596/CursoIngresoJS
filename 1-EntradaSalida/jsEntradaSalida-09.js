/* Emanuel Diaz
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let resultado;
	let porcentaje;
	
	porcentaje= 10


	sueldo= document.getElementById("txtIdSueldo").value;
	sueldo= parseInt(sueldo);
	resultado= sueldo + (sueldo * (porcentaje/100));

	document.getElementById("txtIdResultado").value = resultado;
	
	alert("El sueldo es: "+ resultado);
}
