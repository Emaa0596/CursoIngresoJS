/* Emanuel Diaz
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	// HTML traeme el documento del ir... con su valor (.value)
	nombreIngresado= document.getElementById("txtIdNombre").value;
	mensaje = "Su nombre es "+ nombreIngresado
	alert(mensaje);

}


