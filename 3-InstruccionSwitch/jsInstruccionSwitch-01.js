// Switch ya sabe el valor de la variable que ingresamos y a partir de ahi ejecuta 
// case: Indica cada caso
// para que frene el Switch hay que poner break en el caso (case:) que necesitemos ejecutar
//Se pueden hacer if adentro del Switch 
//Tambien un Switch adentro de otro Switch
//listas == Switch
//Switch(variable)
function mostrar()
{
	//tomo el mes
	let mesDelAño;
	let mensaje; 

	mesDelAño = document.getElementById("txtIdMes").value;

	switch(mesDelAño){
		case "Enero":
			mensaje = "que comiences bien el año!!!"
			break
		case "Marzo": 
			mensaje = "a clases!!!."
			break
		case "Julio": 
			mensaje = "se vienen las vacaciones!!!."
			break
		case "Diciembre": 
			mensaje = "Felices fiesta!!!."
			break
		default: 
			mensaje = "Sos aburrido"
	}
		

	alert(mensaje);  



}//FIN DE LA FUNCIÓN